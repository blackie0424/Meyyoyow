import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="bg-white min-h-screen">
      <div class="py-16 bg-gray-900 text-white text-center">
        <h1 class="text-4xl font-bold">影像紀實</h1>
        <p class="mt-4 text-gray-400">紀錄每一個真實的感動瞬間</p>
      </div>

      <div class="container-custom py-16">
        <!-- Education -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-8 border-l-4 border-teal-500 pl-4">教育現場</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="col-span-2 row-span-2 relative h-96 rounded-lg overflow-hidden">
               <img ngSrc="https://picsum.photos/800/800?random=50" fill alt="Student Interaction" class="object-cover hover:scale-105 transition-transform duration-500">
            </div>
            <div class="relative h-48 rounded-lg overflow-hidden">
               <img ngSrc="https://picsum.photos/400/400?random=51" fill alt="Safety Gear" class="object-cover hover:scale-105 transition-transform duration-500">
            </div>
             <div class="relative h-48 rounded-lg overflow-hidden">
               <img ngSrc="https://picsum.photos/400/400?random=52" fill alt="Learning Sheet" class="object-cover hover:scale-105 transition-transform duration-500">
            </div>
             <div class="relative h-48 rounded-lg overflow-hidden">
               <img ngSrc="https://picsum.photos/400/400?random=53" fill alt="Group Activity" class="object-cover hover:scale-105 transition-transform duration-500">
            </div>
             <div class="relative h-48 rounded-lg overflow-hidden">
               <img ngSrc="https://picsum.photos/400/400?random=54" fill alt="Smile" class="object-cover hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>

        <!-- Enterprise -->
        <div>
          <h2 class="text-2xl font-bold mb-8 border-l-4 border-teal-500 pl-4">企業參訪</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div class="relative h-64 rounded-lg overflow-hidden shadow-md">
               <img ngSrc="https://picsum.photos/600/400?random=60" fill alt="Fine Dining" class="object-cover hover:scale-105 transition-transform duration-500">
               <div class="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-3 py-1 m-2 rounded">精緻餐點</div>
            </div>
             <div class="relative h-64 rounded-lg overflow-hidden shadow-md">
               <img ngSrc="https://picsum.photos/600/400?random=61" fill alt="Team Building" class="object-cover hover:scale-105 transition-transform duration-500">
               <div class="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-3 py-1 m-2 rounded">團隊建立</div>
            </div>
             <div class="relative h-64 rounded-lg overflow-hidden shadow-md">
               <img ngSrc="https://picsum.photos/600/400?random=62" fill alt="ESG Action" class="object-cover hover:scale-105 transition-transform duration-500">
               <div class="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-3 py-1 m-2 rounded">永續行動</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent {}
