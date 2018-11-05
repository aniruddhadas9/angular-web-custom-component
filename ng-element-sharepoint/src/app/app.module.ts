import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloWorldWebPartComponent } from './hello-world-web-part/hello-world-web-part.component';

@NgModule({
  declarations: [
    HelloWorldWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HelloWorldWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(HelloWorldWebPartComponent, { injector: this.injector });
    customElements.define('app-hello-world-web-part', el);
  }
}
