import './globals.css'
import type { Metadata } from 'next'

// 1. إعدادات الـ Metadata (تمت إضافة الرقم للعنوان)
export const metadata: Metadata = {
  title: 'معلم تلييس ولياسة (تليوس) وترميم في اليمن | 780332004',
  description: 'أفضل مقاول تلييس وتليوس (لياسة) وتسميت وحجر صناعي وزخرفة خارجية في اليمن. خدمة هندسية احترافية في أمانة العاصمة، صنعاء، ذمار، عدن، تعز، وكافة المحافظات اليمنية.',
  keywords: [
    "تليوس", "تلييس اليمن", "تسميت جدران", "حجر صناعي تلييس", 
    "زخرفة خارجية لياسة", "مقاول تليوس", "معلم تلييس محترف",
    "لياسة صنعاء", "تليوس ذمار", "تسميت عدن", "لياسة تعز", "تلييس اب",
    "لياسة حضرموت", "تلييس الحديدة", "تليوس مارب", "معلم لياسة جميع المحافظات"
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // 2. كود الـ Schema Markup (لإخبار جوجل أنك نشاط تجاري محلي)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness", // تصنيف جوجل لأعمال المقاولات والبناء
    "name": "معلم لياسة وتلييس محترف - اليمن",
    "image": "https://plaster-work.vercel.app/images/img1.jpg", 
    "description": "أفضل مقاول تلييس وتليوس (لياسة) وتسميت وحجر صناعي في اليمن.",
    "telephone": "+967780332004",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "صنعاء وذمار",
      "addressCountry": "YE" // رمز اليمن في جوجل
    },
    "areaServed": [
      "صنعاء", "ذمار", "عدن", "تعز", "إب", "اليمن"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* 3. حقن الـ Schema في كود الـ HTML */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
