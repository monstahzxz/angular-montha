import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Pic } from '../models/pic-post';
import { PictureService } from '../services/picture.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Lightbox } from 'ngx-lightbox';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { error } from 'protractor';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResultComponent } from '../result/result.component';
import { Location } from '@angular/common';


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
	public vidBtn: boolean;

	constructor(private renderer: Renderer2,
		private picService: PictureService,
		private spinner: NgxSpinnerService,
		private lightbox: Lightbox, private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer, private dialog: MatDialog, private router: Router, private location: Location) {
		this.captures = [];
		this.vidBtn = false;
	}

	ngOnInit(): void {
		this.startCamera();
	}

	// pauseCamera(){
	// 	this.vide.pause();
	// }
	backClicked() {
		// this.location.back()
		this.router.navigate(['home'])
	}

	startCamera() {
		if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
			this.vidBtn = true;
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

	public showBtn: boolean = true;
	public showRetake: boolean = true;


	capture() {
		this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
		this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
		this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
		this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
		if (this.captures.length >= 3) {
			this.showBtn = false;
		}
		if (this.captures.length > 0) {
			this.showRetake = false;
		}
		console.log(this.captures.length);

	}
	public body = <Pic>{};
	public ob = {};
	picSubmit() {
		console.log("submitting snaps");
		this.spinner.show();
		// setTimeout(() => {
		// 	this.spinner.hide();
		// 	alert("Server Error Retry")
		// 	this.retake();
		// }, 20000)
		this.body.image = this.captures;
		this.picService.picture(this.body).subscribe((res) => {
			console.log(res);
			this.spinner.hide();
			this.ob = res;
			this.resPop(this.ob)
		}, (error) => {
			this.spinner.hide();
		});
		console.log(this.body);
	}
	object = {};
	resPop(object) {
		console.log('result PopUp');

		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = true;
		// dialogConfig.position = { 'top': '10', 'right': '0' };
		dialogConfig.height = '400px';
		dialogConfig.width = '400px';
		dialogConfig.data = object;

		this.dialog.open(ResultComponent, dialogConfig);
	}


	retake() {
		this.captures = [];
		console.log(this.captures.length);
		this.showBtn = true;
		this.showRetake = true;
		// this.resPop()
		// this.backClicked()

	}

	handleError(error) {
		console.log('Error: ', error);
	}

}
