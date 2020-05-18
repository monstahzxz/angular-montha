import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

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
import { SubjectComponent } from './subject/subject.component';
import { CameraComponent } from './camera/camera.component';
import { AbsPopComponent } from './abs-pop/abs-pop.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SettingsComponent } from './settings/settings.component';
import { PasswordValidatorDirective } from './directive/password-validator.directive';
import { ResultComponent } from './result/result.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ProfileDialogComponent,
        SubjectComponent,
        CameraComponent,
        AbsPopComponent,
        SettingsComponent,
        PasswordValidatorDirective,
        ResultComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot([
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'home/subject',
                component: SubjectComponent
            },
            {
                path: 'home/subject/camera',
                component: CameraComponent
            },
            {
                path: 'home/account',
                component: SettingsComponent
            }
        ])
        // NgbModule
    ],
    entryComponents: [ProfileDialogComponent],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
