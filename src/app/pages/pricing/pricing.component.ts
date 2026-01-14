import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-gray-50 min-h-screen py-16">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900">費用與方案</h1>
          <p class="mt-4 text-xl text-gray-600">公開透明的價格，滿足不同團體的需求</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- General Group -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-teal-500 transition-colors">
            <div class="p-8">
              <h2 class="text-2xl font-bold text-gray-900">一般團體方案</h2>
              <p class="mt-2 text-gray-500">適合家庭、朋友出遊 (4-10人)</p>
              <div class="mt-8">
                <span class="text-4xl font-bold text-gray-900">NT$ 1,200</span>
                <span class="text-gray-500"> / 每人起</span>
              </div>
              <ul class="mt-8 space-y-4">
                <li class="flex items-start">
                  <span class="text-teal-500 mr-2">✓</span>
                  <span class="text-gray-600">任選 1 項體驗行程</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-500 mr-2">✓</span>
                  <span class="text-gray-600">專業在地導覽員解說</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-500 mr-2">✓</span>
                  <span class="text-gray-600">包含活動保險</span>
                </li>
                 <li class="flex items-start">
                  <span class="text-teal-500 mr-2">✓</span>
                  <span class="text-gray-600">提供相關活動裝備</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-gray-50 border-t border-gray-100">
              <a routerLink="/contact" class="block w-full text-center btn-primary">立即預約</a>
            </div>
          </div>

          <!-- Enterprise/School -->
          <div class="bg-teal-700 rounded-2xl shadow-xl overflow-hidden text-white relative">
            <div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg">熱門推薦</div>
            <div class="p-8">
              <h2 class="text-2xl font-bold">企業/學校 專案</h2>
              <p class="mt-2 text-teal-200">適合員工旅遊、校外教學 (20人+)</p>
              <div class="mt-8">
                <span class="text-4xl font-bold">客製化報價</span>
              </div>
              <ul class="mt-8 space-y-4">
                <li class="flex items-start">
                  <span class="text-teal-300 mr-2">✓</span>
                  <span class="text-teal-50">量身打造 ESG 永續行程</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-300 mr-2">✓</span>
                  <span class="text-teal-50">團隊建立 (Team Building) 設計</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-300 mr-2">✓</span>
                  <span class="text-teal-50">專屬引導師與精緻餐點安排</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-300 mr-2">✓</span>
                  <span class="text-teal-50">提供活動成果紀錄照片</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-teal-800 border-t border-teal-600">
              <a routerLink="/contact" [queryParams]="{type: 'enterprise'}" class="block w-full text-center bg-white text-teal-800 font-bold py-3 rounded-md hover:bg-gray-100 transition-colors">專人諮詢</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PricingComponent {}
