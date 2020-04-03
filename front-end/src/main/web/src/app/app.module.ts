import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GrowlModule } from 'primeng/growl';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GrowlModule,

    CoreModule
  ],
  exports: [GrowlModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
