import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SimpleService } from './simple.service';
import { ParentSelfProviderComponent } from './parent-self-provider/parent-self-provider.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentSelfProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
