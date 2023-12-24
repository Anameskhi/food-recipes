import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesListRoutingModule } from './recipes-list-routing.module';
import { RecipesListComponent } from './recipes-list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RecipesListRoutingModule
  ],
 
})
export class RecipesListModule { }
