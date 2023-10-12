import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import {MatTableModule} from '@angular/material/table';
import * as firebase from 'firebase/app';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';

// const firebaseConfig = {
//   apiKey: "AIzaSyDl70Qe9mCKDuW8KczL3RLhEMEZa8RUzT0",
//   authDomain: "task-management-system-90fa3.firebaseapp.com",
//   projectId: "task-management-system-90fa3",
//   storageBucket: "task-management-system-90fa3.appspot.com",
//   messagingSenderId: "867475595296",
//   appId: "1:867475595296:web:679c21add7509ffe1c9c45"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBOxstjK-RYuESnhKQYy5sEXguMCKrL8uA",
  authDomain: "websystem-e7e8b.firebaseapp.com",
  projectId: "websystem-e7e8b",
  storageBucket: "websystem-e7e8b.appspot.com",
  messagingSenderId: "1063157344164",
  appId: "1:1063157344164:web:d6d465248432cab4100331"
};


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    BrowserAnimationsModule,
    
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
   
    
    
    

  ],
  
  providers: [ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
