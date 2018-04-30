import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JennerSiteComponent } from './jenner-site.component';

const routes: Routes = [
    {
        path: '',
        component: JennerSiteComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JennerSiteRoutingModule {}

