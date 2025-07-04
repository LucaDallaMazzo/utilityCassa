import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { SettingsComponent } from '../settings/settings.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TabsModule,SettingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
