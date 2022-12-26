import { InventarioComponent } from './inventario/inventario.component';
import { UltimosPedidosComponent } from './ultimos-pedidos/ultimos-pedidos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasComponent } from './receitas/receitas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'ultimos-pedidos',
        component: UltimosPedidosComponent
      },
      {
        path: 'receitas',
        component: ReceitasComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
