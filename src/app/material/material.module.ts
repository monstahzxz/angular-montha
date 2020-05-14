import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LightboxModule } from 'ngx-lightbox';

const MateialComponents = [MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  NgxSpinnerModule,
  LightboxModule
];

@NgModule({

  imports: [MateialComponents],
  exports: [MateialComponents]
})
export class MaterialModule { }
