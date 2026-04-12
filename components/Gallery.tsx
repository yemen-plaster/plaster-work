'use client'; // مهمة جداً لأننا سنستخدم تفاعل المستخدم (الضغط)

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  // حالة (State) لحفظ الصورة التي يضغط عليها المستخدم
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // مصفوفة الأسماء
  const imageNames = Array.from({ length: 15 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return `img${num}`;
  });

  return (
    <section className="p-4 space-y-4">
      <h2 className="text-xl font-black text-[#1a202c] p-1 text-right">معرض أعمالنا</h2>
      
      {/* شبكة الصور */}
      <div className="grid grid-cols-1 gap-5">
        {imageNames.map((name, index) => (
          <div 
            key={index} 
            className="bg-white p-2 rounded-2xl shadow-sm border border-[#e2e8f0] cursor-pointer transform transition-transform active:scale-[0.98]"
            onClick={() => setSelectedImage(`/images/${name}.jpg`)} // عند الضغط، نحفظ مسار الصورة
          >
            <div className="relative w-full h-72 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
              <Image 
                src={`/images/${name}.jpg`} 
                alt={`أعمال لياسة - صورة ${index + 1}`}
                fill
                className="object-cover"
                // أول صورتين نحملهن فوراً، والباقي نؤجل تحميله لتسريع الموقع
                priority={index < 2}
                loading={index >= 2 ? "lazy" : undefined}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة لتكبير الصورة (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)} // الإغلاق عند الضغط على أي مكان
        >
          {/* زر الإغلاق */}
          <button 
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full text-white text-2xl font-bold flex items-center justify-center border border-white/20 active:bg-white/30"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          
          {/* الصورة المكبرة */}
          <div className="relative w-full max-w-4xl h-[85vh]">
            <Image 
              src={selectedImage}
              alt="صورة مكبرة"
              fill
              className="object-contain" // يضمن عرض الصورة بالكامل بدون قص لتسهيل التكبير
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
