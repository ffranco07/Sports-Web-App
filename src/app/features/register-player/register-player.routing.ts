import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPlayerComponent } from 'src/app/features/register-player/register-player.component';


const routes: Routes = [
    {
        path: '',
        component: RegisterPlayerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterPlayerRoutingModule { }