//import { AuthGuardService } from './../user/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
// import { RecipeListComponent } from './../recipe-list/recipe-list.component';
// import { AddRecipeComponent } from './../add-recipe/add-recipe.component';

const appRoutes: Routes = [
  //{
  //  path: 'recipe',
  //  canActivate: [ AuthGuardService ]
  //},
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
