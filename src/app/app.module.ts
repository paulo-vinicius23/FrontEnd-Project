import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NaveBarComponent } from './nave-bar/nave-bar.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    NaveBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
