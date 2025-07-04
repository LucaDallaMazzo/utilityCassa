import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TabsModule, RouterModule, CommonModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  
    tabs = [
        { value: 'dashboard', label: 'Dashboard', icon: 'pi pi-home' },
        { value: 'transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
        { value: 'products', label: 'Products', icon: 'pi pi-list' },
        { value: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
    ];
}