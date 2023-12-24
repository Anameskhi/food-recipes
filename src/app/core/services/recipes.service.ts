import { environment } from 'src/environments/environment';
import { Recipe } from './../interfaces/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

const BASE_PATH = environment.apiUrl

@Injectable({
 providedIn: 'root'
})
export class RecipesService extends BaseService {



getRecipes(): Observable<Recipe[]> {
 return this.get<Recipe[]>('recipes');
 }
}
