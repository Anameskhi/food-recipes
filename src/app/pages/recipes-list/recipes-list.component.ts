import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  getRecipes$ = this.recipeSrvc.getRecipes()

  constructor(
    private recipeSrvc: RecipesService
  ){}
  ngOnInit(): void {
    
  }


}
