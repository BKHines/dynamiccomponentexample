import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { ComponentaComponent } from './components/componenta/componenta.component';
import { ComponentcComponent } from './components/componentc/componentc.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent,
    ComponentcComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
