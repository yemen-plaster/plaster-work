import React from 'react';

/**
 * مشروع: معلم لياسة ومقاولات - اليمن
 * المطور: م/ علي
 * التنسيق: مستوحى من "مستعمل" (الصور في الأسفل)
 */

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  // روابط الصور (استبدلها بصور أعمالك الحقيقية لاحقاً في مجلد public/images)
  const workImages = [
    "https://via.placeholder.com/600x600/edf2f7/a0aec0?text=Work+Image+1",
    "https://via.placeholder.com/600x600/edf2f7/a0aec0?text=Work+Image+2",
    "https://via.placeholder.com/600x600/edf2f7/a0aec0?text=Work+Image+3",
  ];

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c] pb-32" dir="rtl">
      
      {/* 1. قسم البيانات الرئيسية والعنوان في الأعلى (بداية الصفحة) */}
      <section className="bg-white p-5 border-b border-[#e2e8f0]">
        <h1 className="text-2xl font-black leading-tight mb-4 text-[#1a202c]">
          🏗️ معلم دهانات وديكورات بالرياض
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-[#718096] mb-4">
          <span className="flex items-center gap-1.5 font-medium">📍 الرياض</span>
          <span className="flex items-center gap-1.5 font-medium">🕒 قبل ساعتين</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center text-xl text-gray-500">👤</div>
            <span className="font-bold text-base text-[#2d3748]">PAINTS_RIYADH</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-700 text-sm font-bold">متصل</span>
          </div>
        </div>
      </section>

      {/* 2. قسم أزرار الاتصال (نفس ألوان مستعمل) */}
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

      {/* 3. صندوق المعلومات والوصف التفصيلي */}
      <section className="p-4 space-y-5">
        <div className="bg-[#ebf5ff] p-5 rounded-xl border border-[#cce3f5] flex items-center gap-4">
          <div className="bg-[#3182ce] p-3 rounded-lg text-white text-xl shadow-md">🚚</div>
          <p className="text-[#2c5282] text-sm font-bold leading-relaxed">
            نضمن لكم جودة العمل ودقة المواعيد لجميع أعمال الدهانات والترميم.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h2 className="text-xl font-black text-[#1a202c] border-b pb-4">وصف الخدمة</h2>
          <div className="text-[#4a5568] leading-[1.8] font-medium space-y-4">
            <p>أفضل معلم دهانات بالرياض لجميع أعمال البويا والديكورات الداخلية والخارجية. دقة وسرعة في التنفيذ.</p>
            <p className="flex items-center gap-2">📞 للتواصل: 
              <a href={`tel:${phoneNumber}`} className="text-[#3182ce] font-bold underline text-lg tracking-wide">{phoneNumber}</a>
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
              <p className="text-xs text-gray-500 mb-1.5">تصفح أعمالنا عبر موقعنا:</p>
              <p className="text-[#3182ce] font-bold text-base">www.paints-riyadh.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. قسم معرض الصور في الأخير (تحت الوصف وتحت كل شيء) */}
      <section className="p-4 space-y-4">
        <h2 className="text-xl font-black text-[#1a202c] p-1">معرض أعمالنا</h2>
        {workImages.map((img, index) => (
          <div key={index} className="bg-white p-2 rounded-2xl shadow-sm border border-[#e2e8f0]">
            <img 
              src={img} 
              alt={`عمل لياسة وترميم ${index + 1}`}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        ))}
      </section>

      {/* 5. شريط الأزرار الثابت في الأسفل للمالك (التحكم) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#004a87] p-2 flex justify-around items-center z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.3)] lg:hidden">
        <div className="flex gap-2 w-full max-w-lg px-2">
          <button className="flex-1 bg-[#1e293b] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>✏️</span> تعديل
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>🚀</span> ترويج
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>🔄</span> تحديث
          </button>
          <button className="flex-1 bg-[#1e293b] text-[#ff4d4d] py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>🗑️</span> حذف
          </button>
        </div>
      </nav>

    </main>
  );
}
