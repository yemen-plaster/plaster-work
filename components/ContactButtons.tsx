// components/ContactButtons.tsx
import React from 'react';

interface ContactButtonsProps {
  internationalNumber: string;
  isSecondary?: boolean; // خاصية لتغيير التنسيق قليلاً لو أردت
}

export default function ContactButtons({ internationalNumber, isSecondary }: ContactButtonsProps) {
  return (
    <div className="w-full">
      <div className="flex gap-3.5 mb-3.5">
        <a 
          href={`tel:${internationalNumber}`} 
          className={`flex-1 flex items-center justify-center gap-2.5 bg-[#f8fafc] border border-[#e2e8f0] text-[#1a202c] py-4 rounded-xl font-black shadow-sm active:bg-gray-100 transition-all ${isSecondary ? 'shadow-md' : ''}`}
        >
          <span className="text-xl">📞</span>
          اتصال
        </a>
        <a 
          href={`https://wa.me/${internationalNumber}`} 
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#25d366] text-white py-4 rounded-xl font-black shadow-sm active:opacity-90 transition-all"
        >
          <span className="text-xl">💬</span>
          واتساب
        </a>
      </div>
      
      {!isSecondary && (
        <button className="w-full flex items-center justify-center gap-2.5 bg-[#2d5a27] text-white py-3.5 rounded-xl font-black shadow-sm active:brightness-110 transition-all">
          <span>📩</span>
          أرسل رسالة للمعلم
        </button>
      )}
    </div>
  );
}
