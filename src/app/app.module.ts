import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AtendenteComponent } from './components/atendente.component';
import { ClienteComponent } from './components/cliente.component';
import { PainelComponent } from './components/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendenteComponent,
    ClienteComponent,
    PainelComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}