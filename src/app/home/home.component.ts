import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  diaHorario = new Date();
  ultimosPedidos = false;
  receitas = false;
  inventario = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.irParaUltimosPedidos();
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
