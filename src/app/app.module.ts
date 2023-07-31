import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './modulos/inventario/inventario/inventario.component';
import { MateriaPrimaComponent } from './modulos/materia_prima/materia-prima/materia-prima.component';
import { RecetaComponent } from './modulos/receta/receta/receta.component';
import { ProveedorComponent } from './modulos/proveedor/proveedor/proveedor.component';
import { PedidoComponent } from './modulos/pedido/pedido/pedido.component';
import { CompraComponent } from './modulos/compra/compra/compra.component';
import { VentaComponent } from './modulos/venta/venta/venta.component';
import { UsuarioComponent } from './modulos/usuario/usuario/usuario.component';
import { FinanzasComponent } from './modulos/finanzas/finanzas/finanzas.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { RegistroComponent } from './modulos/login/registro/registro.component';
import { ProductoComponent } from './modulos/producto/producto/producto.component';
import { AgregarProductoComponent } from './modulos/producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './modulos/producto/editar-producto/editar-producto.component';
import { PagoComponent } from './modulos/venta/pago/pago.component';
import { AgregarProveedorComponent } from './modulos/proveedor/agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './modulos/proveedor/editar-proveedor/editar-proveedor.component';
import { AgregarRecetaComponent } from './modulos/receta/agregar-receta/agregar-receta.component';
import { EditarRecetaComponent } from './modulos/receta/editar-receta/editar-receta.component';
import { AgregarMateriaComponent } from './modulos/materia_prima/agregar-materia/agregar-materia.component';
import { EditarMateriaComponent } from './modulos/materia_prima/editar-materia/editar-materia.component';
import { AgregarUsuarioComponent } from './modulos/usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './modulos/usuario/editar-usuario/editar-usuario.component';
import { EditarInventarioComponent } from './modulos/inventario/editar-inventario/editar-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InventarioComponent,
    MateriaPrimaComponent,
    RecetaComponent,
    ProveedorComponent,
    PedidoComponent,
    CompraComponent,
    VentaComponent,
    UsuarioComponent,
    FinanzasComponent,
    LoginComponent,
    RegistroComponent,
    ProductoComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    PagoComponent,
    AgregarProveedorComponent,
    EditarProveedorComponent,
    AgregarRecetaComponent,
    EditarRecetaComponent,
    AgregarMateriaComponent,
    EditarMateriaComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    EditarInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
