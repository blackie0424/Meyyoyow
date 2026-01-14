
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <!-- Hero Section with CSS Map Background -->
    <section class="relative h-[90vh] flex items-center justify-center overflow-hidden bg-teal-900">
      
      <!-- The Map (Loaded via CSS Class) -->
      <div class="absolute inset-0 z-0 bg-iraralay-map opacity-90"></div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-teal-900/40 z-0"></div>

      <!-- Text Content -->
      <div class="relative z-10 container-custom text-center px-4 mt-12">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
          Meyyoyow 漫遊朗島<br/>
          <span class="text-teal-300">依循地圖，找回部落的脈動</span>
        </h1>
        <p class="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-10 leading-relaxed font-light shadow-black drop-shadow-md bg-teal-900/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          從地圖左側的 <strong>Jyakmey</strong> 到右側的 <strong>Jimazisang</strong>，<br class="hidden md:block">
          跟隨黃色公路，深入 <strong>Ili no Iraralay</strong> (朗島部落) 的真實生活。
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a routerLink="/contact" class="btn-primary text-lg shadow-lg shadow-teal-900/50 transform hover:scale-105 transition-transform">
            立即預約行程
          </a>
          <a routerLink="/about" class="btn-secondary bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg">
            探索地圖故事
          </a>
        </div>
      </div>
    </section>

    <!-- Slogan Section -->
    <section class="bg-teal-900 text-white py-20">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-6">Meyyoyow 是一種生活態度</h2>
        <p class="text-xl text-teal-100 max-w-3xl mx-auto">
          在達悟語中，Meyyoyow 是「漫遊」、「出去玩」的意思。<br>
          我們相信，最好的學習發生在玩樂之中，最深的感動來自於真實的生活體驗。
        </p>
      </div>
    </section>

    <!-- Highlights Carousel -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h2 class="heading-section">精選行程 Highlights</h2>
        <p class="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          無論是親手製作無毒便當，還是划著拼板舟迎向太平洋，<br>
          每一個行程都是我們與土地最真摯的對話。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (item of highlights; track item.title) {
            <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="relative h-64 overflow-hidden">
                <img [ngSrc]="item.img" fill [alt]="item.title" class="object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <div class="text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">{{ item.category }}</div>
                <h3 class="text-xl font-bold mb-2 group-hover:text-teal-200 transition-colors">{{ item.title }}</h3>
                <p class="text-sm text-gray-200 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{{ item.desc }}</p>
                <a routerLink="/services" class="text-sm font-semibold underline decoration-teal-400 underline-offset-4 hover:text-teal-300 inline-flex items-center">
                  了解更多 <span class="ml-1 text-lg">&rarr;</span>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  highlights = [
    {
      title: '無毒安便當',
      category: '食農與永續',
      desc: '從產地到餐桌，親手採集在地食材，製作屬於自己的低碳美味。',
      img: 'https://picsum.photos/600/400?random=10'
    },
    {
      title: '划向太平洋',
      category: '海洋與工藝',
      desc: '坐上傳統拼板舟，感受海洋的脈動，聆聽造舟的古老智慧。',
      img: 'https://picsum.photos/600/400?random=11'
    },
    {
      title: '作客人家',
      category: '部落生活',
      desc: '走進部落家庭，共享一頓晚餐，聽聽最真實的蘭嶼生活故事。',
      img: 'https://picsum.photos/600/400?random=12'
    }
  ];
}
