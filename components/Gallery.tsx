// components/Gallery.tsx
import React from 'react';

export default function Gallery() {
  // توليد مسارات الصور المحلية من 1 إلى 15 بصيغة webp
  const workImages = Array.from({ length: 15 }, (_, i) => 
    `/images/${i + 1}.webp`
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
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
            // إضافة معالجة في حال لم تكن الصورة موجودة بعد
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=جاري+رفع+الصورة";
            }}
          />
        </div>
      ))}
    </section>
  );
}
