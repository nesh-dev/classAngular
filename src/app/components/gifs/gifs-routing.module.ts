import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GifsComponent } from './gifs.component'


const routes = [
    { path: 'gifs', component: GifsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GifsRoutingModule { }
