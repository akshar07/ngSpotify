import {Routes} from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { AboutComponent } from './about.component';

export const ROUTES: Routes =[
    {path:'',component:SearchResultsComponent},
    {path:'about', component:AboutComponent}
]



