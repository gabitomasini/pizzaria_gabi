export interface UltimosPedidos {
  ultimos_pedidos: {
        num_pedido: number;
        nome_cliente: string;
        infos_pizza: {
          quantidade: number;
          nome_sabor: string;
          valor: string;
          origem_pedido: string;
          }
  }
}
