import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UltimosPedidosComponent } from './ultimos-pedidos/ultimos-pedidos.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import localePT from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeBr);
registerLocaleData(localePT);
registerLocaleData(localeES);
registerLocaleData(localeDE);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UltimosPedidosComponent,
    ReceitasComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br' }, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
