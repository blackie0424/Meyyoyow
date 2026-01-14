import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="bg-white">
      <!-- Header -->
      <div class="bg-gray-100 py-16">
        <div class="container-custom text-center">
          <h1 class="text-4xl font-bold text-gray-900">關於我們</h1>
          <p class="mt-4 text-xl text-gray-600">認識 Meyyoyow 與最有禮貌的 Iraralay</p>
        </div>
      </div>

      <!-- Brand Story -->
      <section class="section-padding">
        <div class="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-teal-800">Meyyoyow 品牌故事</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Meyyoyow 在達悟語中意味著「漫遊」與「出去玩」。我們是一群熱愛土地的朗島青年與在地職人，希望透過深度的體驗設計，讓「玩」不僅僅是娛樂，更是一種理解文化的途徑。
            </p>
            <p class="text-gray-600 leading-relaxed">
              我們拒絕走馬看花的觀光模式，堅持以尊重部落生活節奏的方式，帶領旅人走進我們的日常。在這裡，你是客人，也是朋友。
            </p>
          </div>
          <div class="relative h-80 rounded-lg overflow-hidden shadow-xl">
             <img ngSrc="https://picsum.photos/800/600?random=20" fill alt="Brand Story" class="object-cover">
          </div>
        </div>
      </section>

      <!-- Iraralay Introduction -->
      <section class="section-padding bg-teal-50">
        <div class="container-custom grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div class="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-xl">
            <img ngSrc="https://picsum.photos/800/600?random=21" fill alt="Iraralay Village" class="object-cover">
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-3xl font-bold mb-6 text-teal-800">認識朗島 (Iraralay)</h2>
            <h3 class="text-xl font-semibold mb-4 text-teal-600">最有禮貌的部落</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              朗島部落 (Iraralay) 位於蘭嶼北岸，擁有廣大的腹地與豐富的漁場。在過去，因見人便親切打招呼，而被譽為「最有禮貌的部落」。
            </p>
            <p class="text-gray-600 leading-relaxed">
              這裡也是保留傳統地下屋與拼板舟文化最完整的區域之一，奇岩怪石林立，不僅是神話傳說的起源地，更是體驗達悟海洋文化的最佳場域。
            </p>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="section-padding">
        <div class="container-custom">
          <h2 class="heading-section">團隊介紹</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            @for (member of team; track member.name) {
              <div class="text-center">
                <div class="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-teal-100">
                  <img [ngSrc]="member.img" fill [alt]="member.name" class="object-cover">
                </div>
                <h3 class="text-lg font-bold text-gray-900">{{ member.name }}</h3>
                <p class="text-sm text-teal-600 mb-2">{{ member.role }}</p>
                <p class="text-sm text-gray-500">{{ member.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  team = [
    { name: 'Si-Meyyoyow', role: '創辦人 / 資深講師', desc: '返鄉青年，致力於推廣永續旅遊。', img: 'https://picsum.photos/300/300?random=30' },
    { name: 'Si-Mahato', role: '生態職人', desc: '熟悉山林植物與傳統造舟工藝。', img: 'https://picsum.photos/300/300?random=31' },
    { name: 'Sinan-Voz', role: '食農教育總監', desc: '傳承部落傳統料理與芋田智慧。', img: 'https://picsum.photos/300/300?random=32' },
    { name: 'Syaman-Wom', role: '海洋嚮導', desc: '擁有豐富的海洋知識與操舟技術。', img: 'https://picsum.photos/300/300?random=33' }
  ];
}
