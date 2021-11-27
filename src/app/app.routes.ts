import { Routes } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { OfertasComponent } from "./components/ofertas/ofertas.component";

export const RUTAS: Routes = [
	{ path: "inicio", component: InicioComponent },
	{ path: "ofertas", component: OfertasComponent },
	{ path: "**", pathMatch: "full", redirectTo: "inicio" },
];
