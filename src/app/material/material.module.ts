import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const MateialComponents = [MatButtonModule, MatToolbarModule, MatDialogModule, MatCardModule, MatIconModule];

@NgModule({

  imports: [MateialComponents],
  exports: [MateialComponents]
})
export class MaterialModule { }
