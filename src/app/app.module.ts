import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { SectionsModule } from "./sections/sections.module";
import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

import { PresentationModule } from "./presentation/presentation.module";

import { LandingComponent } from "./landing/landing.component";
import { BlogpostComponent } from "./blogpost/blogpost.component";
import { BlogpostsComponent } from "./blogposts/blogposts.component";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    BlogpostComponent,
    BlogpostsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    PresentationModule,
    SectionsModule,
    ComponentsModule,
    ExamplesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    // Specify the ngx-auth-firebaseui library as an import
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyD_-U6r6_0O40ZQnteWEVDkS0nC6kIzJ5w",
      authDomain: "travel-trailer-gypsies-9c69a.firebaseapp.com",
      databaseURL: "https://travel-trailer-gypsies-9c69a.firebaseio.com",
      projectId: "travel-trailer-gypsies-9c69a",
      storageBucket: "travel-trailer-gypsies-9c69a.appspot.com",
      messagingSenderId: "930709471294",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
