import{ NgModule } from '@angular/core';


import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports : [
        MatCardModule,
        MatToolbarModule,
        MatListModule,
       
        
    ],
    exports : [
        MatCardModule,
        MatToolbarModule,
        MatListModule
        
    ]
})
export class MaterialModules {}