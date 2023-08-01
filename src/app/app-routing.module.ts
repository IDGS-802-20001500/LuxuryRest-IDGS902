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
import { AgregarProductoComponent } from './modulos/producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './modulos/producto/editar-producto/editar-producto.component';
import { AgregarProveedorComponent } from './modulos/proveedor/agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './modulos/proveedor/editar-proveedor/editar-proveedor.component';
import { AgregarRecetaComponent } from './modulos/receta/agregar-receta/agregar-receta.component';
import { EditarRecetaComponent } from './modulos/receta/editar-receta/editar-receta.component';
import { AgregarMateriaComponent } from './modulos/materia_prima/agregar-materia/agregar-materia.component';
import { EditarMateriaComponent } from './modulos/materia_prima/editar-materia/editar-materia.component';
import { AgregarUsuarioComponent } from './modulos/usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './modulos/usuario/editar-usuario/editar-usuario.component';
import { EditarInventarioComponent } from './modulos/inventario/editar-inventario/editar-inventario.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'producto',component: ProductoComponent},
  {path: 'producto/agregarProducto',component: AgregarProductoComponent},
  {path: 'producto/editarProducto',component: EditarProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/registro', component: RegistroComponent},
  {path: 'compras', component: CompraComponent },
  {path: 'finanzas', component: FinanzasComponent },
  {path: 'inventario', component: InventarioComponent },
  {path: 'inventario/editarInventario', component: EditarInventarioComponent },
  {path: 'pedidos', component: PedidoComponent },
  {path: 'proveedores', component: ProveedorComponent },
  {path: 'proveedores/agregarProveedor', component: AgregarProveedorComponent },
  {path: 'proveedores/editarProveedor', component: EditarProveedorComponent },
  {path: 'usuarios', component: UsuarioComponent },
  {path: 'usuarios/agregarUsuario', component: AgregarUsuarioComponent },
  {path: 'usuarios/editarUsuario', component: EditarUsuarioComponent },
  {path: 'ventas', component: VentaComponent },
  {path: 'materiaPrima', component: MateriaPrimaComponent},
  {path: 'materiaPrima/agregarMateria', component: AgregarMateriaComponent},
  {path: 'materiaPrima/editarMateria', component: EditarMateriaComponent},
  {path: 'receta', component: RecetaComponent},
  {path: 'receta/agregarReceta', component: AgregarRecetaComponent},
  {path: 'receta/editarReceta', component: EditarRecetaComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
