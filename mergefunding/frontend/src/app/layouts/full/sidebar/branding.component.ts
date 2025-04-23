import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
// import { CoreServices } from '../../../../assets/fp/PHOTO-2025-03-20-13-29-41.jpg'
@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <a href="/" class="logodark">
      <img
        src="../../../../assets/fp/PHOTO-2025-03-20-13-29-41.jpg"
        class="align-middle m-2"
        alt="logo"
        width ="30%"
      />
    </a>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
  constructor(private settings: CoreService) {}
}
