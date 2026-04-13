import React from 'react';
import ContactButtons from '@/components/ContactButtons';
import Gallery from '@/components/Gallery';

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c] pb-10" dir="rtl">

      {/* 1. قسم البيانات الرئيسية */}
      <section className="bg-white p-5 border-b border-[#e2e8f0]">
        <h1 className="text-2xl font-black leading-tight mb-4 text-[#1a202c]">
          🏗️ معلم تلييس ولياسة (تليوس) - اليمن
        </h1>
        <div className="flex items-center gap-6 text-sm text-[#718096] mb-4">
          <span className="flex items-center gap-1.5 font-medium">📍 صنعاء - ذمار</span>
          <span className="flex items-center gap-1.5 font-medium">✨ جميع محافظات الجمهورية</span>
        </div>
      </section>

      {/* 2. الأزرار العلوية */}
      <section className="p-4 bg-white border-b border-[#e2e8f0]">
        <ContactButtons internationalNumber={internationalNumber} />
      </section>

      {/* 3. وصف الخدمة المطور للـ SEO */}
      <section className="p-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h2 className="text-xl font-black text-[#1a202c] border-b pb-4">وصف الخدمة</h2>
          <p className="text-[#4a5568] leading-[1.8] font-medium">
            أفضل معلم ومقاول تلييس في اليمن. متخصصون في كافة أعمال التلييس الداخلي (تسميت) والخارجي، وتنفيذ واجهات الحجر الصناعي والزخارف الإسمنتية. دقة، تربيع، وتأكيس هندسي بأعلى جودة وسرعة في التنفيذ.
          </p>
          <p className="font-bold text-lg">
            📞 للتواصل: <a href={`tel:${phoneNumber}`} className="text-[#3182ce] underline">{phoneNumber}</a>
          </p>
        </div>
      </section>

      {/* 4. استدعاء معرض الصور */}
      <Gallery />

      {/* 5. قسم الـ SEO والمحافظات (الجديد والمصمم ليتماشى مع الموقع) */}
      <section className="p-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0]">
          <h2 className="text-lg font-black text-[#1a202c] mb-3">خدماتنا في كافة المحافظات</h2>
          <p className="text-sm text-[#4a5568] mb-4 leading-relaxed">
            نصل بخدماتنا في التلييس (تليوس)، التسميت، وتنفيذ الحجر الصناعي إلى جميع المدن والمحافظات:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[#3182ce] font-bold bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0]">
            <span>• أمانة العاصمة</span>
            <span>• صنعاء</span>
            <span>• ذمار</span>
            <span>• عدن</span>
            <span>• تعز</span>
            <span>• إب</span>
            <span>• حضرموت</span>
            <span>• الحديدة</span>
            <span>• مأرب</span>
            <span>• عمران</span>
            <span>• حجة</span>
            <span>• المحويت</span>
            <span>• ريمة</span>
            <span>• البيضاء</span>
            <span>• أبين</span>
            <span>• لحج</span>
            <span>• الضالع</span>
            <span>• شبوة</span>
            <span>• المهرة</span>
            <span>• سقطرى</span>
            <span>• الجوف</span>
            <span>• صعدة</span>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-[11px] text-gray-500 font-medium">
            الكلمات الأكثر بحثاً: تليوس، معلم تلييس، حجر صناعي، تسميت، زخارف خارجية، مقاول لياسة في اليمن.
          </div>
        </div>
      </section>

      {/* 6. الأزرار السفلية والختام */}
      <section className="p-4 bg-white border-t border-[#e2e8f0] mt-4">
        <ContactButtons internationalNumber={internationalNumber} isSecondary={true} />
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 جميع الحقوق محفوظة - م/ علي
        </p>
      </section>

    </main>
  );
}
