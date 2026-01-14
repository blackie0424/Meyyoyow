import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-1">
          <h3 class="text-2xl font-bold mb-4">Meyyoyow</h3>
          <p class="text-gray-400 text-sm">
            漫遊朗島，體驗最純粹的蘭嶼生活。<br>
            從食農、海洋到部落文化，<br>
            我們帶您看見不一樣的 Iraralay。
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4 text-teal-400">快速連結</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><a routerLink="/about" class="hover:text-white">關於我們</a></li>
            <li><a routerLink="/services" class="hover:text-white">體驗行程</a></li>
            <li><a routerLink="/pricing" class="hover:text-white">費用與方案</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 text-teal-400">聯絡資訊</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>台東縣蘭嶼鄉朗島村</li>
            <li>meyyoyow&#64;example.com</li>
            <li>Line ID: @meyyoyow</li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 text-teal-400">追蹤我們</h4>
          <div class="flex space-x-4">
            <!-- Social placeholders -->
            <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">FB</div>
            <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">IG</div>
          </div>
        </div>
      </div>
      <div class="container-custom mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {{ year }} Meyyoyow 漫遊朗島. All rights reserved.
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
