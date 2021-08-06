import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Seolleongtang (Ox Bone Soup)',
      'Seolleongtang is a milky beef bone soup that’s made by boiling down ox leg bones for several hours until the broth becomes rich and creamy white. This broth is a staple in Korean households, especially during cold winter months.',
      'https://www.koreanbapsang.com/wp-content/uploads/2013/02/DSC5952-5-e1569820474516.jpg',
      [
        new Ingredient('Beef Bone Marrow', 4),
        new Ingredient('Beef Brisket', 2),
        new Ingredient('Cooked Rice', 1),
        new Ingredient('Chopped Scallions', 3),
        new Ingredient('Salt & Pepper', 1),
      ]
    ),
    new Recipe(
      'Chicken Katsu',
      'Japan may not seem like a source for a fried chicken recipe, but it is, and that chicken is delicious. These thin cutlets are coated in panko breadcrumbs and sizzled in the pan ’til they’re gorgeously golden and crisp. Then, tonkatsu sauce is drizzled on top—you can think of it as a soy-based answer to barbecue sauce. And if that’s not enough, the fluffy ginger rice and sesame-sprinkled green beans on the side will convince you to make this Japanese comfort food one of your own.',
      'https://static01.nyt.com/images/2021/04/19/dining/kc-chicken-katsu/merlin_185308080_a60a6563-292e-4f52-a33b-386113aca0b2-articleLarge.jpg',
      [
        new Ingredient('Boneless Chicken Halves', 4),
        new Ingredient('Panko Crumbs', 2),
        new Ingredient('Egg', 1),
        new Ingredient('Flour', 2),
        new Ingredient('Salt & Pepper', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
