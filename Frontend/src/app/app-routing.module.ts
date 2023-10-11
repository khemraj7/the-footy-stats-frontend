import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    // pathMatch: 'full',
    // loadChildren: () => import('./featured/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./featured/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./featured/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./featured/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./featured/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'leagues',
    loadChildren: () => import('./featured/leagues/leagues.module').then(m => m.LeaguesModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('./featured/matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: 'predictions',
    loadChildren: () => import('./featured/predictions/predictions.module').then(m => m.PredictionsModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./featured/stats/stats.module').then(m => m.StatsModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
