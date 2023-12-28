import { Component } from '@angular/core';
import { Main2Component } from '../main2/main2.component';
import { AsideComponent } from '../aside/aside.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [Main2Component,AsideComponent,NavComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
