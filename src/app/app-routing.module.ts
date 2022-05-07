import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dog-status',
    loadChildren: () => import('./dog-status/dog-status.module').then( m => m.DogStatusPageModule)
  },
  {
    path: 'dogs-page',
    loadChildren: () => import('./dogs-page/dogs-page.module').then( m => m.DogsPagePageModule)
  },
  {
    path: 'random-dog',
    loadChildren: () => import('./random-dog/random-dog.module').then( m => m.RandomDogPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
