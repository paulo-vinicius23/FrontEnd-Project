import { Component } from '@angular/core';
import { NaveBarService } from './services/nave-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novo-projeto';

  constructor(private navServ: NaveBarService) {
    this.navServ.eventContrastMode.subscribe(mode => {
      if(mode) {
        document.body.classList.add('contrast');
      } else {
        document.body.classList.remove('contrast');
      }
    })
  }

}
