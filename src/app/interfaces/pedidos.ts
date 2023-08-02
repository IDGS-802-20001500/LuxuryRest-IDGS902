export interface Pedidos {
  id_pedido:number;
  id_usuario:number;
  estado_pedido:string;
  fecha_hora_pedido:Date;
  domicilio:string;
  empleado:string;
  repartidor:string;
  fecha_hora_entrega:Date;
}
