
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log('Starting Meyyoyow App Bootstrap...');

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('Bootstrap success!');
    // Remove loading spinner if it exists (Angular usually wipes app-root content, but just in case)
    const loader = document.getElementById('app-loading');
    if (loader) loader.remove();
  })
  .catch((err) => {
    console.error('Bootstrap error:', err);
    // Explicitly throw so the global error handler in index.html catches it and shows it on UI
    throw err;
  });
