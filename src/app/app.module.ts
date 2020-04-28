import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
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
//import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AppComponent } from "./app.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

import { PresentationModule } from "./presentation/presentation.module";

import { LandingComponent } from "./landing/landing.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, LandingComponent],
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
    // NgxAuthFirebaseUIModule.forRoot(environment.firebase, appFactory,
    //   {
    //     toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
    //     toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
    //     authGuardFallbackURL: 'login',
    //     authGuardLoggedInURL: '',// Password length min/max in forms independently of each componenet min/max.
    //     guardProtectedRoutesUntilEmailIsVerified: false,
    //     enableEmailVerification: false, // default: true
    //   })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
