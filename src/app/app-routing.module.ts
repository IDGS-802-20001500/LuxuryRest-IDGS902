import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { ProductoComponent } from './modulos/producto/producto/producto.component';
import { RegistroComponent } from './modulos/login/registro/registro.component';
import { FinanzasComponent } from './modulos/finanzas/finanzas/finanzas.component';
import { CompraComponent } from './modulos/compra/compra/compra.component';
import { InventarioComponent } from './modulos/inventario/inventario/inventario.component';
import { PedidoComponent } from './modulos/pedido/pedido/pedido.component';
import { ProveedorComponent } from './modulos/proveedor/proveedor/proveedor.component';
import { UsuarioComponent } from './modulos/usuario/usuario/usuario.component';
import { VentaComponent } from './modulos/venta/venta/venta.component';
import { MateriaPrimaComponent } from './modulos/materia_prima/materia-prima/materia-prima.component';
import { RecetaComponent } from './modulos/receta/receta/receta.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'producto',component: ProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/registro', component: RegistroComponent},
  {path: 'compras', component: CompraComponent },
  {path: 'finanzas', component: FinanzasComponent },
  {path: 'inventario', component: InventarioComponent },
  {path: 'pedidos', component: PedidoComponent },
  {path: 'proveedores', component: ProveedorComponent },
  {path: 'usuarios', component: UsuarioComponent },
  {path: 'ventas', component: VentaComponent },
  {path: 'materiaPrima', component: MateriaPrimaComponent},
  {path: 'receta', component: RecetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
