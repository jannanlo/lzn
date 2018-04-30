import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { JennerSiteRoutingModule } from './jenner-site-routing.module';
import { JennerSiteComponent } from './jenner-site.component';

@NgModule({
    imports: [
        CommonModule,
        JennerSiteRoutingModule,
        TranslateModule
    ],
    declarations: [JennerSiteComponent]
})
export class JennerSiteModule {}
