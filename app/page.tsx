// app/page.tsx
import React from 'react';
import ContactButtons from '@/components/ContactButtons';
import Gallery from '@/components/Gallery'; // استيراد المعرض الجديد

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c] pb-10" dir="rtl">

      {/* 1. قسم البيانات الرئيسية */}
      <section className="bg-white p-5 border-b border-[#e2e8f0]">
        <h1 className="text-2xl font-black leading-tight mb-4 text-[#1a202c]">
          🏗️ معلم لياسة ومقاولات - اليمن
        </h1>
        <div className="flex items-center gap-6 text-sm text-[#718096] mb-4">
          <span className="flex items-center gap-1.5 font-medium">📍 صنعاء - ذمار</span>
          <span className="flex items-center gap-1.5 font-medium"> جميع محافظات الجمهورية</span>
        </div>
      </section>

      {/* 2. الأزرار العلوية */}
      <section className="p-4 bg-white border-b border-[#e2e8f0]">
        <ContactButtons internationalNumber={internationalNumber} />
      </section>

      {/* 3. وصف الخدمة */}
      <section className="p-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h2 className="text-xl font-black text-[#1a202c] border-b pb-4">وصف الخدمة</h2>
          <p className="text-[#4a5568] leading-[1.8] font-medium">
            أفضل معلم تلييس باليمن لجميع أعمال التلييس الداخلية والخارجية. دقة وسرعة في التنفيذ.
          </p>
          <p className="font-bold text-lg">
            📞 للتواصل: <a href={`tel:${phoneNumber}`} className="text-[#3182ce] underline">{phoneNumber}</a>
          </p>
        </div>
      </section>

      {/* 4. استدعاء معرض الصور */}
      <Gallery />

      {/* 5. الأزرار السفلية والختام */}
      <section className="p-4 bg-white border-t border-[#e2e8f0] mt-6">
        <ContactButtons internationalNumber={internationalNumber} isSecondary={true} />
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 جميع الحقوق محفوظة - م/ علي
        </p>
      </section>

    </main>
  );
}
