import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ProfileDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        // NgbModule
    ],
    entryComponents: [ProfileDialogComponent],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
