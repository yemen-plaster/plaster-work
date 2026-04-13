import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // العنوان يجمع الرقم مع كلمات البحث الطويلة (Long-tail Keywords)
  title: 'معلم تلييس ولياسة (تليوس) وترميم محترف في اليمن | 780332004',
  description: 'مقاول تلييس وتليوس (لياسة) وتسميت وحجر صناعي وزخرفة خارجية. متخصصون في الترميم والتشطيب في صنعاء، ذمار، عدن، تعز، إب وكافة اليمن. دقة هندسية في التربيع والتأكيس.',
  keywords: [
    "تليوس اليمن", "معلم تلييس محترف", "مقاول ترميم مباني", "تسميت جدران", 
    "حجر صناعي واجهات", "زخرفة خارجية اسمنتية", "طيان وترميم", "رشة خارجية",
    "تلبيس حجر", "تشطيب فلل ومنازل", "لياسة صنعاء وذمار", "تليوس تعز وإب",
    "مقاولات عامة اليمن", "تربيع وتأكيس هندسي", "أفضل معلم لياسة"
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // تعريف قائمة جميع المحافظات لبرمجتها داخل الـ Schema
  const allGovernorates = [
    "أمانة العاصمة", "صنعاء", "ذمار", "عدن", "تعز", "إب", "حضرموت", 
    "الحديدة", "مأرب", "عمران", "حجة", "المحويت", "ريمة", "البيضاء", 
    "أبين", "لحج", "الضالع", "شبوة", "المهرة", "سقطرى", "الجوف", "صعدة"
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness", // تصنيف الأعمال الإنشائية
    "name": "معلم لياسة وتلييس محترف - اليمن",
    "alternateName": "مقاول تليوس وترميم اليمن",
    "telephone": "+967780332004",
    "url": "https://plaster-work.vercel.app/",
    "logo": "https://plaster-work.vercel.app/images/logo.jpg", // إذا توفر لوجو مستقبلاً
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "صنعاء وذمار",
      "addressCountry": "YE"
    },
    // إخبار جوجل رسمياً بنطاق خدمتك في كل محافظة دون حشو كلمات في الواجهة
    "areaServed": allGovernorates.map(city => ({
      "@type": "City",
      "name": city
    })),
    "description": "أفضل خدمات التلييس (التليوس) والترميم والحجر الصناعي والزخرفة الخارجية في جميع محافظات الجمهورية اليمنية.",
    "priceRange": "$$"
  };

  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* حقن البيانات المنظمة (Structured Data) لمساعدة جوجل على فهم تخصصك الجغرافي */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
