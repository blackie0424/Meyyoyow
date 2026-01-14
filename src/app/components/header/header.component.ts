import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-gray-100">
      <div class="container-custom">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center">
            <span class="text-2xl font-bold text-teal-700 tracking-tight">Meyyoyow</span>
            <span class="ml-2 text-sm text-gray-500 font-medium hidden sm:block">｜漫遊朗島</span>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex space-x-8">
            @for (item of navItems; track item.path) {
              <a [routerLink]="item.path" 
                 routerLinkActive="text-teal-600 font-semibold" 
                 [routerLinkActiveOptions]="{exact: item.exact}"
                 class="text-gray-600 hover:text-teal-600 transition-colors duration-200">
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button (click)="toggleMenu()" class="text-gray-500 hover:text-gray-700 focus:outline-none p-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if (!isMenuOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Nav -->
      @if (isMenuOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            @for (item of navItems; track item.path) {
              <a [routerLink]="item.path" 
                 (click)="closeMenu()"
                 routerLinkActive="bg-teal-50 text-teal-700"
                 [routerLinkActiveOptions]="{exact: item.exact}"
                 class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-700 hover:bg-gray-50">
                {{ item.label }}
              </a>
            }
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  navItems = [
    { label: '首頁', path: '/', exact: true },
    { label: '關於我們', path: '/about', exact: false },
    { label: '體驗行程', path: '/services', exact: false },
    { label: '費用方案', path: '/pricing', exact: false },
    { label: '影像紀實', path: '/gallery', exact: false },
    { label: '預約與資訊', path: '/contact', exact: false },
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
