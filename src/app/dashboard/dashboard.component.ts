import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  SWIPE_ACTION = {
    LEFT: 'swipeleft',
    RIGHT: 'swiperight',
    UP: 'swipeup',
    DOWN: 'swipeup',
  };

  constructor() {
  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {
    console.log('swipe it baby!' + action);
  }

  ngOnInit() {
  }

}
