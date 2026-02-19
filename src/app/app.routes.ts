import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Sobre } from './paginas/sobre/sobre';
import { Contato } from './paginas/contato/contato';
import { Naoencontrado } from './paginas/naoencontrado/naoencontrado';
import { Produtos } from './paginas/produtos/produtos';

export const routes: Routes = [ 
    {path: 'inicio', loadComponent: () => import('./paginas/inicio/inicio').then(c => c.Inicio)},
    {path: 'sobre', loadComponent: () => import('./paginas/sobre/sobre').then(c => c.Sobre)},
    {path: 'contato', loadComponent: () => import('./paginas/contato/contato').then(c => c.Contato)},
    {path: 'produtos/:codigo', loadComponent: () => import('./paginas/produtos/produtos').then(c => c.Produtos)},
    {path: 'restrito', loadComponent: () => import('./paginas/restrito/restrito').then(c => c.Restrito)},
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    {path:'**',  loadComponent: () => import('./paginas/naoencontrado/naoencontrado').then(c => c.Naoencontrado)}  

];
