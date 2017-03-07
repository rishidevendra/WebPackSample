import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app/app.module';
import { enableProdMode } from '@angular/core';

if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'production') {
    console.log('inside production');
    enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
