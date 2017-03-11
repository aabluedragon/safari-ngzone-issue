import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function init() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

// Relaxing angular2 so we can bootstrap after web components are ready.
if(!true) init();

window.addEventListener('WebComponentsReady', () => {
  init();
});




