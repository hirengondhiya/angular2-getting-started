import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule, routableAppComponents } from './app-router.module';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductNameFilterPipe } from './products/product-name-filter.pipe';
import { StarComponent } from './shared/star.component';

import { ProductService } from './products/product.service';

@NgModule({
  imports: [ BrowserModule,
            FormsModule,
            HttpModule,
            AppRouterModule ],
  declarations: [ AppComponent,
                  ProductNameFilterPipe, 
                  StarComponent, 
                  routableAppComponents ],
  bootstrap: [ AppComponent ],
  providers: [ ProductService ]
})
export class AppModule { }
