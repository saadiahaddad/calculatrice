import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculComponent } from './calcul/calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
