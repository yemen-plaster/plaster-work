'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  // حالة (State) لحفظ مؤشر الصورة التي يضغط عليها المستخدم لتكبيرها
  // تم تعديله ليحفظ الرقم (Index) بدلاً من الرابط ليسهل التعامل مع الـ Alt اليناميكي
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // مصفوفة تحتوي على وصف دقيق وغني بالكلمات المفتاحية لكل صورة من الـ 15
  // هذا هو المكان "المخفي" برمجياً لإخبار جوجل بتفاصيل الصور دون حشو مرئي
  const imageDescriptions = [
    "معلم تلييس محترف في صنعاء - واجهة منزل",
    "أعمال تليوس (لياسة) جدران داخلية - تربيع وتأكيس",
    "مقاول ترميم مباني في ذمار - تشطيب واجهة حجر",
    "تلييس خارجي ورشة جرافيت - فيلا سكنية اليمن",
    "تسميت جدران وبناء ملحق - تشطيب احترافي 780332004",
    "زخارف إسمنتية خارجية - تلبيس واجهات مودرن",
    "لياسة وتربيع جدران بدقة هندسية - مشروع سكني",
    "تركيب وتلييس حجر صناعي - معلم محترف عدن",
    "أعمال طيان وترميم في صنعاء القديمة - خبرة واسعة",
    "تلييس زوايا الجدران - تشطيب عالي الجودة تعز",
    "فيلا جاهزة بالكامل - تشطيب لياسة وزخارف إب",
    "فريق العمل أثناء تلييس جدران كبيرة - اليمن",
    "معلم تليوس وترميم - خبرة هندسية حضرموت",
    "تلييس جدران حوش في ذمار - مقاولات بناء",
    "أفضل تشطيب لياسة في اليمن - معرض أعمالنا"
  ];

  // توليد أسماء الملفات ديناميكياً بناءً على طول مصفوفة الأوصاف
  const imageNames = Array.from({ length: imageDescriptions.length }, (_, i) => `img${i + 1}`);

  return (
    <section className="p-4 space-y-4">
      <h2 className="text-xl font-black text-[#1a202c] p-1 text-right border-b-2 border-blue-100 inline-block pb-1">معرض أعمالنا</h2>

      {/* شبكة الصور */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {imageNames.map((name, index) => (
          <div 
            key={index} 
            className="bg-white p-2 rounded-2xl shadow-sm border border-[#e2e8f0] cursor-pointer transform transition-transform md:hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setSelectedImageIndex(index)} // عند الضغط نفتح الصورة بناءً على مؤشرها
          >
            <div className="relative w-full h-72 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
              <Image 
                src={`/images/${name}.jpg`} 
                alt={imageDescriptions[index]} // 💡 هنا تم حقن الـ SEO لكل صورة بشكل فريد
                fill
                className="object-cover"
                priority={index < 2} // تسريع تحميل أول صورتين
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* وصف صغير اختياري للزبون (غير إلزامي للـ SEO ولكن مفيد للمظهر المرتب) */}
            <p className="text-xs text-center text-gray-500 mt-2 font-medium px-1">
              {imageDescriptions[index].split(' - ')[0]} {/* عرض الجزء الأول من الوصف فقط */}
            </p>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة لتكبير الصورة (Lightbox) */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImageIndex(null)} // الإغلاق عند الضغط على الشاشة
        >
          {/* زر الإغلاق */}
          <button 
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full text-white text-2xl font-bold flex items-center justify-center border border-white/20 active:bg-white/30 z-50"
            onClick={() => setSelectedImageIndex(null)}
          >
            &times;
          </button>

          {/* الصورة المكبرة */}
          <div className="relative w-full max-w-4xl h-[85vh]">
            <Image 
              src={`/images/${imageNames[selectedImageIndex]}.jpg`}
              alt={imageDescriptions[selectedImageIndex]} // 💡 الـ Alt اليناميكي للصورة المكبرة أيضاً
              fill
              className="object-contain" // لعرض الصورة بالكامل بدون قص
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
