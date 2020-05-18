import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LightboxModule } from 'ngx-lightbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const MateialComponents = [MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  NgxSpinnerModule,
  LightboxModule,
  MatSelectModule,
  FormsModule, MatTabsModule, MatInputModule, MatFormFieldModule
];

@NgModule({

  imports: [MateialComponents],
  exports: [MateialComponents]
})
export class MaterialModule { }
