// app/page.tsx
import React from 'react';
import ContactButtons from '@/components/ContactButtons';
import Gallery from '@/components/Gallery';

export default function Home() {
  const phoneNumber = "780332004";
  const internationalNumber = "+967780332004";

  // قائمة بجميع المحافظات الـ 22
  const governorates = [
    "أمانة العاصمة", "صنعاء", "ذمار", "عدن", "تعز", "إب", "حضرموت", 
    "الحديدة", "مأرب", "عمران", "حجة", "المحويت", "ريمة", "البيضاء", 
    "أبين", "لحج", "الضالع", "شبوة", "المهرة", "سقطرى", "الجوف", "صعدة"
  ];

  return (
    <main className="min-h-screen bg-[#f1f3f5] text-[#1a202c] pb-10" dir="rtl">

      {/* 1. الترويسة الأنيقة */}
      <section className="bg-white p-5 border-b border-[#e2e8f0]">
        <h1 className="text-2xl font-black leading-tight mb-3 text-[#1a202c]">
          🏗️ معلم مقاولات ولياسة (تليوس) - اليمن
        </h1>
        <div className="flex items-center gap-4 text-sm text-[#718096] font-medium">
          <span>📍 المركز: صنعاء وذمار</span>
          <span className="text-gray-300">|</span>
          <span>✨ نخدم كافة المحافظات</span>
        </div>
      </section>

      {/* 2. أزرار التواصل */}
      <section className="p-4 bg-white border-b border-[#e2e8f0]">
        <ContactButtons internationalNumber={internationalNumber} />
      </section>

      {/* 3. وصف الخدمة (تم دمج الكلمات المفتاحية بأسلوب تسويقي احترافي وبدون حشو) */}
      <section className="p-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <h2 className="text-xl font-black text-[#1a202c] border-b pb-4">خدماتنا الهندسية</h2>
          <p className="text-[#4a5568] leading-[1.9] font-medium text-justify">
            نحن فريق فني متخصص نقدم أفضل خدمات المقاولات العامة والتشطيب في اليمن. نتميز بتوفير أمهر معلمي التلييس لتنفيذ أعمال **التليوس الداخلي (تسميت)** والخارجي للمباني. تشمل خدماتنا المتميزة تنفيذ واجهات **الحجر الصناعي**، **الزخارف الإسمنتية**، أعمال **الطيان**، **الرشة**، و**الترميم الشامل** للفلل والمنازل. نضمن لك دقة متناهية في **التربيع والتأكيس الهندسي** مع الالتزام التام بالمواعيد.
          </p>
          <div className="pt-2">
            <a href={`tel:${phoneNumber}`} className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg border border-blue-100">
              📞 للتواصل المباشر: {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* 4. معرض الصور */}
      <Gallery />

      {/* 5. قسم المحافظات (مرتب جداً ومريح للعين) */}
      <section className="p-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0]">
          <h2 className="text-lg font-black text-[#1a202c] mb-2">نطاق تغطية أعمالنا</h2>
          <p className="text-sm text-[#4a5568] mb-5">
            نفخر بتقديم خدماتنا وتنفيذ المشاريع لعملائنا الكرام في جميع المحافظات اليمنية بلا استثناء:
          </p>
          
          {/* عرض المحافظات كأسماء فقط مع أيقونة صغيرة لتبدو كقائمة احترافية */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-[#4a5568] font-bold">
            {governorates.map((city, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-blue-500">📍</span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. الخاتمة */}
      <section className="p-4 bg-white border-t border-[#e2e8f0] mt-6">
        <ContactButtons internationalNumber={internationalNumber} isSecondary={true} />
        <p className="text-center text-xs text-gray-400 mt-6 font-bold">
           تم التطوير بواسطة م/ علي - 2026
        </p>
      </section>

    </main>
  );
}
