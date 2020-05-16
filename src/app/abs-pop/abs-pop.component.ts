import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SubjectComponent } from '../subject/subject.component';


@Component({
  selector: 'app-abs-pop',
  templateUrl: './abs-pop.component.html',
  styleUrls: ['./abs-pop.component.scss']
})
export class AbsPopComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SubjectComponent>) { }

  ngOnInit(): void {
    this.arrInit();
  }
  public strength: number = 60;
  public students: Array<number> = [];
  public i: number;
  arrInit() {
    for (this.i = 1; this.i <= this.strength; this.i++) {
      this.students[this.i - 1] = this.i;
    }
    console.log(this.students.length)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
