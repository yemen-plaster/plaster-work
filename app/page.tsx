import React from 'react';

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c]" dir="rtl">
      
      {/* 1. قسم الصور في الأعلى */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="relative h-72 w-full overflow-hidden">
          <img 
            src="https://via.placeholder.com/600x400/edf2f7/a0aec0?text=Work+Image" 
            className="w-full h-full object-cover"
            alt="أعمال لياسة"
          />
          <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
            1 / 3
          </div>
        </div>
      </section>

      {/* 2. الأزرار تحت الصور مباشرة (نفس مستعمل) */}
      <section className="p-4 bg-white border-b border-[#e2e8f0]">
        <div className="flex gap-3">
          <a 
            href={`tel:${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] text-[#1a202c] py-3 rounded-lg font-bold shadow-sm active:bg-gray-100"
          >
            <span className="text-xl">📞</span>
            اتصال
          </a>
          <a 
            href={`https://wa.me/${internationalNumber}`} 
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white py-3 rounded-lg font-bold shadow-sm active:opacity-90"
          >
            <span className="text-xl">💬</span>
            واتساب
          </a>
        </div>
        
        {/* زر إرسال رسالة (مثل مستعمل) */}
        <button className="w-full mt-3 flex items-center justify-center gap-2 bg-[#2d5a27] text-white py-3 rounded-lg font-bold shadow-sm">
          <span>📩</span>
          أرسل رسالة للمعلم
        </button>
      </section>

      {/* 3. الوصف والمعلومات */}
      <section className="p-4 space-y-4 pb-32">
        <div className="bg-[#e9f2fb] p-4 rounded-lg border border-[#d1e3f5] flex items-center gap-3">
          <div className="bg-[#3182ce] p-2 rounded-full text-white text-xs">🚚</div>
          <p className="text-[#2c5282] text-sm font-medium leading-relaxed">
            نصلكم في أي مكان داخل ذمار وصنعاء. دقة في التنفيذ وسرعة في الإنجاز.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0]">
          <h1 className="text-xl font-black mb-4 text-[#1a202c]">
            أفضل معلم لياسة باليمن لجميع أعمال اللياسة والترميم. دقة وسرعة في التنفيذ.
          </h1>
          
          <div className="space-y-3 text-[#4a5568] leading-relaxed">
            <p className="font-bold text-[#2d3748]">للتواصل: 
              <a href={`tel:${phoneNumber}`} className="text-[#3182ce] mr-2 underline">{phoneNumber}</a>
            </p>
            <p className="text-sm">تصفح أعمالنا عبر موقعنا:</p>
            <p className="text-[#3182ce] font-mono font-bold tracking-tight">www.plaster-work.vercel.app</p>
          </div>
        </div>
      </section>

      {/* 4. شريط الأزرار الثابت في الأسفل (Sticky Footer) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#004a87] p-2 flex justify-around items-center z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.2)]">
        <div className="flex gap-2 w-full max-w-md">
          <button className="flex-1 bg-[#1e293b] text-white py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold border border-gray-600">
             <span>✏️</span> تعديل
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold border border-gray-600">
             <span>🚀</span> ترويج
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold border border-gray-600">
             <span>🔄</span> تحديث
          </button>
          <button className="flex-1 bg-[#1e293b] text-white py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold border border-gray-600">
             <span>🗑️</span> حذف
          </button>
        </div>
      </nav>

    </main>
  );
}
