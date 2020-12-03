import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

// route情報の定義
// path:URL名、component:pathにアクセスした際にアクセスするcomponent
const routes: Routes = [
  // リダイレクトの設定(pathが完全に一致した際にリダイレクトする)
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  imports: [
    // routingを有効にしている
    RouterModule.forRoot(routes)
  ],
  //app.module.tsで使用できるように
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
