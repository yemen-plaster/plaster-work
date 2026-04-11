import React from 'react';

/**
 * مشروع: معلم لياسة ومقاولات - اليمن
 * المطور: م/ علي (yemen-plaster)
 * التقنية: Next.js 14+ (App Router)
 */

export default function Home() {
  // بيانات التواصل (سهلة التعديل)
  const phoneNumber: string = "780332004";
  const internationalNumber: string = "+967780332004";

  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center p-4 pb-24" dir="rtl">
      
      {/* البطاقة التعريفية الرئيسية */}
      <section className="bg-white w-full max-w-[480px] p-8 rounded-[30px] shadow-2xl text-center border border-[#edf2f7] mt-6">
        
        {/* شارة العرض */}
        <div className="inline-block bg-[#e63946] text-white px-5 py-1.5 rounded-full text-sm font-bold mb-5 animate-pulse">
          خصم 20% لفترة محدودة
        </div>

        <h1 className="text-3xl font-black mb-3 text-[#1e293b]">
          🏗️ معلم لياسة ومقاولات
        </h1>
        
        <p className="text-[#64748b] text-lg leading-relaxed mb-8">
          نقدم أفضل خدمات اللياسة والترميم بأعلى معايير الجودة والدقة في الميزان، خبرة طويلة في الميدان.
        </p>

        {/* قائمة الخدمات - مرتبة برمجياً */}
        <div className="text-right bg-[#f1f5f9] p-6 rounded-[25px] mb-8">
          {[
            "لياسة داخلية وخارجية",
            "تربيع وأوتار محترف",
            "ترميم جدران ومعالجة شقوق",
            "تلييس واجهات وملاحق"
          ].map((service, index) => (
            <div key={index} className="mb-3 font-bold flex items-center gap-3 text-[#1e293b]">
              <span className="text-[#e63946]">✔️</span>
              {service}
            </div>
          ))}
        </div>

        {/* رقم الهاتف الضخم - تفاعلي */}
        <div className="my-6">
          <p className="text-sm text-[#94a3b8] mb-1">اضغط للاتصال المباشر</p>
          <a 
            href={`tel:${internationalNumber}`} 
            className="block text-4xl text-[#e63946] font-black no-underline tracking-widest hover:scale-105 transition-transform duration-300"
          >
            {phoneNumber}
          </a>
        </div>

        {/* زر الواتساب الكبير */}
        <a 
          href={`https://wa.me/${internationalNumber}`} 
          className="flex items-center justify-center bg-[#25d366] text-white p-5 rounded-2xl no-underline font-black text-xl gap-3 shadow-lg active:scale-95 transition-all"
        >
          💬 تواصل واتساب الآن
        </a>

        {/* التذييل الصغير */}
        <p className="mt-8 text-[12px] text-[#94a3b8] font-medium border-t pt-4">
          © {new Date().getFullYear()} جميع الحقوق محفوظة لخدمات المقاولات والترميم
        </p>
      </section>

      {/* شريط الأزرار الثابت في الأسفل للموبايل (Sticky Footer) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 flex gap-3 shadow-[0_-5px_25px_rgba(0,0,0,0.1)] z-50 lg:hidden">
        <a 
          href={`tel:${internationalNumber}`} 
          className="flex-1 bg-[#e63946] py-4 rounded-2xl text-center text-white font-black text-lg shadow-md active:opacity-90"
        >
          📞 اتصل الآن
        </a>
        <a 
          href={`https://wa.me/${internationalNumber}`} 
          className="flex-1 bg-[#25d366] py-4 rounded-2xl text-center text-white font-black text-lg shadow-md active:opacity-90"
        >
          💬 واتساب
        </a>
      </nav>

    </main>
  );
}
