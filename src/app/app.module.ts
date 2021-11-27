import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { RUTAS } from "./app.routes";

import { AppComponent } from "./app.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";
import { InicioComponent } from "./components/inicio/inicio.component";

@NgModule({
	declarations: [AppComponent, OfertasComponent, InicioComponent],
	imports: [BrowserModule, RouterModule.forRoot(RUTAS, { useHash: true })],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
