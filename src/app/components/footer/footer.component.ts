import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  goals: string;

  constructor() { }

  ngOnInit() {
    this.goals = 'The form';
  }

}
