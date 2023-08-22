import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConexionServiceService } from 'src/app/conexion-service.service';
import { DialogMensajeComponent } from 'src/app/dialog-mensaje/dialog-mensaje.component';
import { Pedidos } from 'src/app/interfaces/pedidos';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  listaVentas: Array<any> = [{}];
  listaPedidos: Array<any> = [{}];
  listaPedidosProducto: Array<any> = [{}];
  listaProductos: Array<any> = [{}];
  id_usuario:number=0;
  
  currentDate = new Date();
  rol:string=""

  constructor(
    
    private conexiones: ConexionServiceService,
    private dialog: MatDialog, // Inyecta MatDialog
    private router: Router // Inyecta Router


    ){
      
      this.id_usuario = Number(localStorage.getItem('id_usuario'));
      
      this.rol = "" + localStorage.getItem('rol');
      this.consultarVentas()
  }

  consultarVentas() {
    this.conexiones.getVentas().subscribe({
      next: (response) => {
        this.listaVentas = response;
        this.consultarPedidos()
      },
      error: (error) => console.log(error),
    });
  }
  consultarPedidos() {
    this.conexiones.getPedidos().subscribe({
      next: (response) => {
        this.listaPedidos = response;
        this.consultarPedidosProducto()
      },
      error: (error) => console.log(error),
    });
  }
  consultarPedidosProducto() {
    this.conexiones.getPedidosProductos().subscribe({
      next: (response) => {
        this.listaPedidosProducto = response;
        this.consultarProducto()
      },
      error: (error) => console.log(error),
    });
  }
  consultarProducto() {
    this.conexiones.getProductos().subscribe({
      next: (response) => {
        this.listaProductos = response;
      },
      error: (error) => console.log(error),
    });
  }



  id_pedido:number= 0
      estado_pedido:number=0
      fecha_hora_pedido:Date = new Date()
      domicilio:string= ""
      empleado:number =  1
      fecha_hora_entrega:Date = new Date()
      


usuario = "" + localStorage.getItem('usuario');

  agregarPedido() {
    const datos = this.construirPedido();
    this.conexiones.editarPedido(this.id_pedido, datos).subscribe(
    (response) => {
        console.log('pedido actualizado con éxito', response);

        this.consultarVentas();
        
        this.mostrarDialog(
          'Éxito',
          'Pedido actualizado exitosamente .'
        );
        this.router.navigate(['pedidos']);
      },
      (error) => {
        console.error('pedido al agregar la venta', error);
        this.mostrarDialog(
          'Error',
          'Ha ocurrido un error al actualizar pedido .'
        );
        this.router.navigate(['pedidos']);

        
      },
    );
  }


  // Función para mostrar el diálogo
  mostrarDialog(titulo: string, mensaje: string): void {
    const dialogRef = this.dialog.open(DialogMensajeComponent, {
      data: { titulo, mensaje },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
    });
  }


  construirPedido(): any {
    const formattedDate = this.currentDate.toISOString().slice(0, 10);
    const datos: Pedidos = {
      id_pedido: this.id_pedido,
      id_usuario: this.id_usuario,
      estado_pedido: this.estado_pedido,
      fecha_hora_pedido: "" + this.fecha_hora_pedido,
      domicilio: "",
      empleado: 1,
      fecha_hora_entrega: formattedDate

    };
    return datos;
  }





  enviar(id:number){
  const productoEncontrado = this.listaPedidos.find(
      (producto) => producto.id_pedido == id
    );

    this.id_pedido = productoEncontrado.id_pedido;
    this.estado_pedido = 1
    this.fecha_hora_pedido = productoEncontrado.fecha_hora_pedido
    this.domicilio=""
    this.empleado=1

    this.agregarPedido()
  }


  eliminar(id:number){
    const productoEncontrado = this.listaPedidos.find(
      (producto) => producto.id_pedido == id
    );

    this.id_pedido = productoEncontrado.id_pedido;
    this.estado_pedido = 0
    this.fecha_hora_pedido = productoEncontrado.fecha_hora_pedido
    this.domicilio=""
    this.empleado=1

    this.agregarPedido()
  }



}
