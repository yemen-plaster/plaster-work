// components/Gallery.tsx
import React from 'react';

export default function Gallery() {
  // هنا نقوم بتوليد أو وضع روابط الـ 15 صورة
  const workImages = Array.from({ length: 15 }, (_, i) => 
    `https://via.placeholder.com/600x600/edf2f7/a0aec0?text=Work+Image+${i + 1}`
  );

  return (
    <section className="p-4 space-y-4">
      <h2 className="text-xl font-black text-[#1a202c] p-1 text-right">
        معرض أعمالنا ({workImages.length} صورة)
      </h2>
      
      {workImages.map((img, index) => (
        <div key={index} className="bg-white p-2 rounded-2xl shadow-sm border border-[#e2e8f0]">
          <img 
            src={img} 
            alt={`عمل لياسة وترميم ${index + 1}`}
            className="w-full h-auto rounded-xl object-cover transition-transform active:scale-[0.98]"
            loading="lazy" // ميزة مهمة لتسريع تحميل الموقع
          />
        </div>
      ))}
    </section>
  );
}
