import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tasks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
