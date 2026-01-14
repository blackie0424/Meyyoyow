
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="bg-teal-50 min-h-screen py-16">
      <div class="container-custom">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">預約與資訊</h1>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Info Column -->
          <div class="lg:col-span-1 space-y-8">
            <!-- Traffic -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold text-teal-800 mb-4">交通指引</h3>
              <p class="text-gray-600 mb-2"><strong>集合地點：</strong><br>蘭嶼鄉朗島村活動中心前廣場</p>
              <p class="text-gray-600 text-sm">建議騎乘機車前往，Google Map 搜尋「朗島活動中心」。</p>
            </div>

            <!-- FAQ -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold text-teal-800 mb-4">常見問題 Q&A</h3>
              <div class="space-y-4">
                <details class="group">
                  <summary class="font-medium text-gray-800 cursor-pointer list-none flex justify-between">
                    需要提前多久預約？
                    <span class="text-teal-500">+</span>
                  </summary>
                  <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-teal-200">
                    建議至少提前 7 天預約，以利安排導覽人員。
                  </p>
                </details>
                <details class="group">
                  <summary class="font-medium text-gray-800 cursor-pointer list-none flex justify-between">
                    如果下雨怎麼辦？
                    <span class="text-teal-500">+</span>
                  </summary>
                  <p class="text-sm text-gray-600 mt-2 pl-2 border-l-2 border-teal-200">
                    我們會視雨勢調整行程，若遇惡劣天氣將全額退費或延期。
                  </p>
                </details>
              </div>
            </div>

            <!-- Social -->
             <div class="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 class="text-xl font-bold text-teal-800 mb-4">直接聯絡我們</h3>
              <button class="w-full bg-[#00C300] text-white font-bold py-2 rounded-md hover:bg-[#00b300] transition mb-2">
                加入 LINE 官方帳號
              </button>
              <p class="text-sm text-gray-500">ID: @meyyoyow</p>
            </div>
          </div>

          <!-- Form Column -->
          <div class="lg:col-span-2">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">
                {{ isEnterprise ? '企業/團體 諮詢表單' : '體驗預約表單' }}
              </h3>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">聯絡人姓名</label>
                    <input type="text" formControlName="name" class="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">聯絡電話</label>
                    <input type="tel" formControlName="phone" class="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" formControlName="email" class="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border">
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">預計日期</label>
                    <input type="date" formControlName="date" class="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">預計人數</label>
                    <input type="number" formControlName="guests" class="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">詢問內容 / 需求</label>
                  <textarea formControlName="message" rows="4" class="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2 border"></textarea>
                </div>

                <div class="pt-4">
                  <button type="submit" [disabled]="contactForm.invalid" class="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                    送出詢問
                  </button>
                </div>
              </form>
              @if (submitted()) {
                <div class="mt-4 p-4 bg-green-50 text-green-700 rounded-md text-center">
                  感謝您的詢問，我們會盡快與您聯繫！
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder) as FormBuilder;
  private route = inject(ActivatedRoute) as ActivatedRoute;
  
  submitted = signal(false);
  isEnterprise = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    date: [''],
    guests: ['', Validators.required],
    message: ['']
  });

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.isEnterprise = params['type'] === 'enterprise';
      if (this.isEnterprise) {
        this.contactForm.patchValue({ message: '我想詢問企業/學校專案...' });
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      this.submitted.set(true);
      this.contactForm.reset();
    }
  }
}
