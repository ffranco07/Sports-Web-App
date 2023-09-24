import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

/**
 * Footer component class
 *
 * @author Francisco Franco
 * @version %I%, %G%
 * @since 1.0
 */
export class FooterComponent implements OnInit {

  version: string;

  constructor() { }

  ngOnInit() {
    this.version = environment.version;
  }

}
