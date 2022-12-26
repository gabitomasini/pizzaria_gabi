import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzariaService } from '../shared/services/pizzaria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // diaHorario = new Date();
  data = new Date();
  diaHorario = this.data;


  ultimosPedidos = false;
  receitas = false;
  inventario = false;

  listaPedidos = {};

  constructor(private router: Router, private pizzariaService: PizzariaService) { }


  ngOnInit(): void {
    console.log(this.diaHorario)
    this.irParaUltimosPedidos();
    this.verPedidos();
  }

  verPedidos(){
    this.pizzariaService.obterUltimosPedidos().subscribe((res) => {
      this.listaPedidos = res;
    })
    console.log(this.listaPedidos)
  }

  irParaUltimosPedidos(){
    this.ultimosPedidos = true;
    this.receitas = false;
    this.inventario = false;
  }

  irParaReceitas(){
    this.receitas = true;
    this.ultimosPedidos = false;
    this.inventario = false;
  }

  irParaInventario(){
    this.inventario = true;
    this.ultimosPedidos = false;
    this.receitas = false;
  }

}
