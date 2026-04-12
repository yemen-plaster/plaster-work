import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  const imageNames = Array.from({ length: 15 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return `img${num}`;
  });

  return (
    <section className="p-4 space-y-4">
      <h2 className="text-xl font-black text-[#1a202c] p-1 text-right">معرض أعمالنا</h2>
      <div className="grid grid-cols-1 gap-5">
        {imageNames.map((name, index) => (
          <div key={index} className="bg-white p-2 rounded-2xl shadow-sm border border-[#e2e8f0]">
            <div className="relative w-full h-72 overflow-hidden rounded-xl">
              <Image 
                src={`/images/${name}.jpg`} 
                alt={`أعمال لياسة - صورة ${index + 1}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
