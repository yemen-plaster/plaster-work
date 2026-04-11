import React from 'react';

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c]" dir="rtl">
      
      {/* 1. البيانات الرئيسية في الأعلى (قبل الصور) */}
      <section className="bg-white p-4 pt-6 border-b border-[#e2e8f0]">
        <h1 className="text-[22px] font-black leading-tight mb-3 text-[#1a202c]">
          أفضل معلم لياسة باليمن لجميع أعمال اللياسة والترميم. دقة وسرعة في التنفيذ.
        </h1>
        
        <div className="flex items-center gap-4 text-[13px] text-[#718096] mb-4">
          <span className="flex items-center gap-1">📍 اليمن، ذمار</span>
          <span className="flex items-center gap-1">🕒 قبل قليل</span>
        </div>

        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">👤</div>
            <span className="font-bold text-sm text-[#2d3748]">yemen-plaster</span>
          </div>
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">متصل الآن</div>
        </div>
      </section>

      {/* 2. معرض الصور (بعد البيانات) */}
      <section className="bg-white">
        <div className="relative h-80 w-full overflow-hidden border-b border-[#e2e8f0]">
          <img 
            src="https://via.placeholder.com/600x400/edf2f7/a0aec0?text=Work+Image" 
            className="w-full h-full object-cover"
            alt="أعمال لياسة"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs font-bold">
            1 / 3
          </div>
        </div>
      </section>

      {/* 3. الأزرار (تحت الصور مباشرة كما في مستعمل) */}
      <section className="p-4 bg-white border-b border-[#e2e8f0]">
        <div className="flex gap-3">
          <a 
            href={`tel:${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] text-[#1a202c] py-3.5 rounded-xl font-black shadow-sm active:bg-gray-100"
          >
            <span className="text-xl">📞</span>
            اتصال
          </a>
          <a 
            href={`https://wa.me/${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white py-3.5 rounded-xl font-black shadow-sm active:opacity-90 transition-all"
          >
            <span className="text-xl">💬</span>
            واتساب
          </a>
        </div>
        
        <button className="w-full mt-3 flex items-center justify-center gap-2 bg-[#386a32] text-white py-3.5 rounded-xl font-black shadow-sm active:brightness-110">
          <span>📩</span>
          أرسل رسالة للمعلم
        </button>
      </section>

      {/* 4. قسم الوصف التفصيلي */}
      <section className="p-4 space-y-4 pb-32">
        <div className="bg-[#ebf5ff] p-5 rounded-xl border border-[#cce3f5] flex items-center gap-4">
          <div className="bg-[#3182ce] p-2.5 rounded-lg text-white text-lg shadow-md">🚚</div>
          <p className="text-[#2c5282] text-sm font-bold leading-relaxed">
            مستعدون لتنفيذ كافة أعمال المقاولات والترميم داخل ذمار وصنعاء بأقل الأسعار.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h2 className="text-lg font-black text-[#1a202c] border-b pb-3">وصف الإعلان</h2>
          <div className="text-[#4a5568] leading-[1.8] font-medium space-y-3">
            <p>أفضل معلم لياسة بالرياض لجميع أعمال البويا والديكورات الداخلية والخارجية. دقة وسرعة في التنفيذ.</p>
            <p className="flex items-center gap-2">📞 للتواصل: 
              <a href={`tel:${phoneNumber}`} className="text-[#3182ce] font-bold underline text-lg tracking-wide">{phoneNumber}</a>
            </p>
            <div className="bg-gray-50 p-3 rounded-lg border border-dashed border-gray-300">
              <p className="text-xs text-gray-500 mb-1">تصفح أعمالنا عبر موقعنا:</p>
              <p className="text-[#3182ce] font-bold">www.plaster-work.vercel.app</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. شريط الأزرار الثابت في الأسفل للمالك (التحكم) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#004a87] p-2 flex justify-around items-center z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
        <div className="flex gap-2 w-full max-w-lg px-2">
          <button className="flex-1 bg-[#1e293b] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>✏️</span> تعديل
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>🚀</span> ترويج
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>🔄</span> تحديث
          </button>
          <button className="flex-1 bg-[#1e293b] text-[#ff4d4d] py-3 rounded-lg flex items-center justify-center gap-2 text-xs font-black border border-gray-500 active:scale-95">
             <span>🗑️</span> حذف
          </button>
        </div>
      </nav>

    </main>
  );
}
