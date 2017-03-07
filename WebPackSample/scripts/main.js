"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('../app/app.module');
var core_1 = require('@angular/core');
if (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'production') {
    console.log('inside production');
    core_1.enableProdMode();
}
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map