import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NaveBarComponent } from './nave-bar/nave-bar.component';
import { MoveListComponent } from './move/move-list/move-list.component';
import { MoveCardComponent } from './move/components/move-card/move-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    NaveBarComponent,
    MoveListComponent,
    MoveCardComponent,
    LoginFormComponent,
    CadastroFormComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
