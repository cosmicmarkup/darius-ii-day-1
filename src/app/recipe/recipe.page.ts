import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  id: string;
  link: string;
  //  id: number;
  //  id: any;
  recipe: any = ['antipasti salmon', 'caponata', 'chorizo pilaf', 'fish gratin'];
  name: string;

  constructor( private activatedroute: ActivatedRoute ) {
  }

  ngOnInit() {
   // get the parameter from the URL
   this.id = this.activatedroute.snapshot.paramMap.get('id');
   console.log(this.id);
   if(this.id === '0') {
      this.name = this.recipe[0];
   }else if(this.id === '1') {
      this.name = this.recipe[1];
   } else if(this.id === '2') {
      this.name = this.recipe[2];
   } else{
      this.name = this.recipe[3];
   }
   this.link = this.convertToDash(this.name);
  }

  convertToDash(word) {
   return  word.replace(/\s+/g, '-');
  }
}
