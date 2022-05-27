import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'join',
    loadChildren: () => import('./join/join.module').then( m => m.JoinPageModule)
  },
  {
    path: 'welcome2',
    loadChildren: () => import('./welcome2/welcome2.module').then( m => m.Welcome2PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'addpet',
    loadChildren: () => import('./addpet/addpet.module').then( m => m.AddpetPageModule)
  },
  {
    path: 'viewpet',
    loadChildren: () => import('./viewpet/viewpet.module').then( m => m.ViewpetPageModule)
  },
  {
    path: 'pspage',
    loadChildren: () => import('./pspage/pspage.module').then( m => m.PspagePageModule)
  },
  {
    path: 'signin2',
    loadChildren: () => import('./signin2/signin2.module').then( m => m.Signin2PageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'adopt',
    loadChildren: () => import('./adopt/adopt.module').then( m => m.AdoptPageModule)
  },
  {
    path: 'details-pet2',
    loadChildren: () => import('./details-pet2/details-pet2.module').then( m => m.DetailsPet2PageModule)
  },
  {
    path: 'profile2',
    loadChildren: () => import('./profile2/profile2.module').then( m => m.Profile2PageModule)
  },
  {
    path: 'addsrvc',
    loadChildren: () => import('./addsrvc/addsrvc.module').then( m => m.AddsrvcPageModule)
  },
  {
    path: 'viewserv',
    loadChildren: () => import('./viewserv/viewserv.module').then( m => m.ViewservPageModule)
  },
  {
    path: 'details-serv',
    loadChildren: () => import('./details-serv/details-serv.module').then( m => m.DetailsServPageModule)
  },
  {
    path: 'allserv',
    loadChildren: () => import('./allserv/allserv.module').then( m => m.AllservPageModule)
  },
  {
    path: 'details-serv2',
    loadChildren: () => import('./details-serv2/details-serv2.module').then( m => m.DetailsServ2PageModule)
  },
  {
    path: 'petneeds',
    loadChildren: () => import('./petneeds/petneeds.module').then( m => m.PetneedsPageModule)
  },
  {
    path: 'request1',
    loadChildren: () => import('./request1/request1.module').then( m => m.Request1PageModule)
  },
  {
    path: 'details-req1',
    loadChildren: () => import('./details-req1/details-req1.module').then( m => m.DetailsReq1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
