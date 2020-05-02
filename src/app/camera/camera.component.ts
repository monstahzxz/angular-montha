import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Pic } from '../models/pic-post';
import { PictureService } from '../services/picture.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-camera',
	templateUrl: './camera.component.html',
	styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
	@ViewChild('video', { static: true }) videoElement: ElementRef;
	@ViewChild('canvas', { static: true }) canvas: ElementRef;

	videoWidth = 0;
	videoHeight = 0;
	constraints = {
		video: {
			facingMode: "environment",
			// width: { ideal: 1080 },
			// height: { ideal: 4096 }
			width: 1080,
			height: 720
		}
	};

	public captures: Array<any>;
	public base: string;

	constructor(private renderer: Renderer2, private picService: PictureService, private spinner: NgxSpinnerService) {
		this.captures = [];
	}

	ngOnInit(): void {
		this.startCamera();
	}


	startCamera() {
		if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
			navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
		} else {
			alert('Sorry, camera not available.');
		}
	}

	attachVideo(stream) {
		this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
		this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
			this.videoHeight = this.videoElement.nativeElement.videoHeight;
			this.videoWidth = this.videoElement.nativeElement.videoWidth;
		});
		console.log(this.videoWidth + " " + this.videoHeight)
	}

	capture() {
		this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
		this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
		this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
		this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
	}
	public body = <Pic>{};
	picSubmit() {
		console.log("submitting snaps");
		this.spinner.show();
		this.body.image = this.captures;
		this.picService.picture(this.body).subscribe((res) => {
			console.log(res);
			this.spinner.hide();
		});
		console.log(this.body);
	}

	retake() {
		this.captures = [];
	}

	handleError(error) {
		console.log('Error: ', error);
	}

}
