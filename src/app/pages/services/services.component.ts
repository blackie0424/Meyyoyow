import { Component, signal } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

interface ServiceItem {
  name: string;
  tag: string;
  desc: string;
  img: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  template: `
    <div class="bg-gray-50 min-h-screen pb-20">
      <!-- Header -->
      <div class="bg-teal-700 text-white py-16">
        <div class="container-custom text-center">
          <h1 class="text-4xl font-bold">體驗行程</h1>
          <p class="mt-4 text-xl text-teal-100">核心產品：從食農、海洋到部落生活的深度沉浸</p>
        </div>
      </div>

      <!-- Category Filter -->
      <div class="sticky top-16 z-30 bg-white shadow-sm border-b border-gray-200">
        <div class="container-custom flex overflow-x-auto space-x-8 py-4 no-scrollbar">
          @for (cat of categories; track cat.id) {
            <button 
              (click)="scrollTo(cat.id)"
              class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors"
              [class.bg-teal-600]="activeCategory() === cat.id"
              [class.text-white]="activeCategory() === cat.id"
              [class.bg-gray-100]="activeCategory() !== cat.id"
              [class.text-gray-600]="activeCategory() !== cat.id"
              [class.hover:bg-teal-500]="activeCategory() !== cat.id"
              [class.hover:text-white]="activeCategory() !== cat.id"
            >
              {{ cat.title }}
            </button>
          }
        </div>
      </div>

      <!-- Content -->
      <div class="container-custom mt-12 space-y-20">
        @for (cat of categories; track cat.id) {
          <section [id]="cat.id" class="scroll-mt-32">
            <div class="border-l-4 border-teal-600 pl-4 mb-8">
              <h2 class="text-2xl font-bold text-gray-900">{{ cat.title }}</h2>
              <p class="text-gray-500">{{ cat.subtitle }}</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              @for (item of cat.items; track item.name) {
                <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                  <div class="relative h-48">
                    <img [ngSrc]="item.img" fill [alt]="item.name" class="object-cover">
                    <div class="absolute top-4 left-4 bg-white/90 backdrop-blur text-teal-800 text-xs font-bold px-2 py-1 rounded">
                      {{ item.tag }}
                    </div>
                  </div>
                  <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.name }}</h3>
                    <p class="text-gray-600 text-sm mb-4 flex-grow">{{ item.desc }}</p>
                    <button class="w-full mt-auto py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-50 transition-colors font-medium">
                      查看詳情
                    </button>
                  </div>
                </div>
              }
            </div>
          </section>
        }
      </div>
    </div>
  `
})
export class ServicesComponent {
  activeCategory = signal('A');

  categories: ServiceCategory[] = [
    {
      id: 'A',
      title: 'A. 食農與永續',
      subtitle: 'ESG 企業首選｜低碳飲食與土地智慧',
      items: [
        { name: '無毒安便當', tag: '低碳飲食', desc: '採集在地時令野菜，使用環保月桃葉包裹，製作零廢棄的美味便當。', img: 'https://picsum.photos/500/300?random=41' },
        { name: '女人的魚', tag: '芋田體驗', desc: '換上裝備走入水芋田，體驗達悟女性照顧芋頭的辛勞與智慧。', img: 'https://picsum.photos/500/300?random=42' },
        { name: '天才小釣手', tag: '漁獵智慧', desc: '在潮池邊學習辨識魚類，體驗傳統且永續的採集方式。', img: 'https://picsum.photos/500/300?random=43' }
      ]
    },
    {
      id: 'B',
      title: 'B. 海洋與工藝',
      subtitle: '教育文化深度｜拼板舟與山林',
      items: [
        { name: '划向太平洋', tag: '拼板舟文化', desc: '親身操作拼板舟，感受與大海搏鬥的勇氣，認識船眼紋的意義。', img: 'https://picsum.photos/500/300?random=44' },
        { name: '潮來潮往', tag: '潮間帶採集', desc: '夜間或退潮時分，探索潮間帶豐富的生態寶庫。', img: 'https://picsum.photos/500/300?random=45' },
        { name: '山林生態', tag: '造舟與林業', desc: '走入山林尋找造舟木材，理解永續林業與生態平衡。', img: 'https://picsum.photos/500/300?random=46' }
      ]
    },
    {
      id: 'C',
      title: 'C. 部落生活沉浸',
      subtitle: '文化交流｜共食與歷史',
      items: [
        { name: '作客人家', tag: '共食文化', desc: '進入在地人家中，像家人一樣共進晚餐，交流彼此的故事。', img: 'https://picsum.photos/500/300?random=47' },
        { name: '部落巡禮', tag: '歷史地景', desc: '穿梭在地下屋與涼台之間，聆聽每一塊石頭的傳說故事。', img: 'https://picsum.photos/500/300?random=48' }
      ]
    }
  ];

  scrollTo(id: string) {
    this.activeCategory.set(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
