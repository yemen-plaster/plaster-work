import React from 'react';

/**
 * مشروع: معلم لياسة ومقاولات - اليمن
 * المطور: م/ علي
 * التحديث: إضافة 15 صورة وتكرار أزرار الاتصال في الأسفل
 */

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  // توليد قائمة بـ 15 صورة
  const workImages = Array.from({ length: 15 }, (_, i) => 
    `https://via.placeholder.com/600x600/edf2f7/a0aec0?text=Work+Image+${i + 1}`
  );

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c] pb-10" dir="rtl">

      {/* 1. قسم البيانات الرئيسية والعنوان */}
      <section className="bg-white p-5 border-b border-[#e2e8f0]">
        <h1 className="text-2xl font-black leading-tight mb-4 text-[#1a202c]">
          🏗️ معلم لياسة ومقاولات - اليمن
        </h1>

        <div className="flex items-center gap-6 text-sm text-[#718096] mb-4">
          <span className="flex items-center gap-1.5 font-medium">📍 صنعاء</span>
          <span className="flex items-center gap-1.5 font-medium">🕒 قبل ساعتين</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center text-xl text-gray-500">👤</div>
            <span className="font-bold text-base text-[#2d3748]">yemen-plaster</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-700 text-sm font-bold">متصل</span>
          </div>
        </div>
      </section>

      {/* 2. قسم أزرار الاتصال (العلوية) */}
      <section className="p-4 bg-white border-b border-[#e2e8f0]">
        <div className="flex gap-3.5 mb-3.5">
          <a 
            href={`tel:${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#f8fafc] border border-[#e2e8f0] text-[#1a202c] py-3.5 rounded-xl font-black shadow-sm active:bg-gray-100 transition-all"
          >
            <span className="text-xl">📞</span>
            اتصال
          </a>
          <a 
            href={`https://wa.me/${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#25d366] text-white py-3.5 rounded-xl font-black shadow-sm active:opacity-90 transition-all"
          >
            <span className="text-xl">💬</span>
            واتساب
          </a>
        </div>

        <button className="w-full flex items-center justify-center gap-2.5 bg-[#2d5a27] text-white py-3.5 rounded-xl font-black shadow-sm active:brightness-110 transition-all">
          <span>📩</span>
          أرسل رسالة للمعلم
        </button>
      </section>

      {/* 3. الوصف التفصيلي */}
      <section className="p-4 space-y-5">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h2 className="text-xl font-black text-[#1a202c] border-b pb-4 text-right">وصف الخدمة</h2>
          <div className="text-[#4a5568] leading-[1.8] font-medium space-y-4 text-right">
            <p>أفضل معلم تلييس باليمن لجميع أعمال التلييس الداخلية والخارجية. دقة وسرعة في التنفيذ.</p>
            <p className="flex items-center gap-2 font-bold text-lg justify-start">📞 للتواصل: 
              <a href={`tel:${phoneNumber}`} className="text-[#3182ce] underline tracking-wide">{phoneNumber}</a>
            </p>
          </div>
        </div>
      </section>

      {/* 4. معرض الصور (15 صورة) */}
      <section className="p-4 space-y-4">
        <h2 className="text-xl font-black text-[#1a202c] p-1 text-right">معرض أعمالنا</h2>
        {workImages.map((img, index) => (
          <div key={index} className="bg-white p-2 rounded-2xl shadow-sm border border-[#e2e8f0]">
            <img 
              src={img} 
              alt={`عمل لياسة وترميم ${index + 1}`}
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* 5. قسم أزرار الاتصال (السفلية - مكررة تحت الصور) */}
      <section className="p-4 bg-white border-t border-[#e2e8f0] mt-6">
        <div className="flex gap-3.5 mb-3.5">
          <a 
            href={`tel:${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#f8fafc] border border-[#e2e8f0] text-[#1a202c] py-4 rounded-xl font-black shadow-md active:bg-gray-100 transition-all"
          >
            <span className="text-xl">📞</span>
            اتصال
          </a>
          <a 
            href={`https://wa.me/${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#25d366] text-white py-4 rounded-xl font-black shadow-md active:opacity-90 transition-all"
          >
            <span className="text-xl">💬</span>
            واتساب
          </a>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          © 2026 جميع الحقوق محفوظة - م/ علي
        </p>
      </section>

    </main>
  );
}
