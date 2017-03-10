import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

function init() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

// Relaxing angular2 so we can bootstrap after web components are ready.
if(!true) init();

document.addEventListener('WebComponentsReady', () => {
  init();
});




