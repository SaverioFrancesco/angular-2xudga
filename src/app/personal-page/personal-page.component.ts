import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { accounts } from '../accounts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  identityData;

 ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.identityData = accounts[ params.get('nameId') ];
  });
}  

}