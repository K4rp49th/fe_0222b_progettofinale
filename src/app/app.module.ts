import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DettagliClientiComponent } from './components/dettagli-clienti/dettagli-clienti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { ComuniComponent } from './comuni/comuni.component';
import { FattureComponent } from './fatture/fatture.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListaClientiComponent } from './clienti/lista-clienti/lista-clienti.component';

@NgModule({
  declarations: [
    AppComponent,
    DettagliClientiComponent,
    ClientiComponent,
    ComuniComponent,
    FattureComponent,
    LoginComponent,
    SignupComponent,
    ListaClientiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
