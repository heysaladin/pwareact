type Props = {
  lang?: 'EN' | 'AR';
};

export default function TaasSidebar({ lang = 'EN' }: Props) {
  const isAR = lang === 'AR';

  if (isAR) {
    return (
      <div className="bg-[#0b1315] border border-[#2a3639] flex flex-col gap-[18px] self-stretch items-start p-[24px] rounded-[16px] shrink-0 w-[340px]">
        {/* Header row */}
        <div className="flex items-center justify-between w-full shrink-0">
          <div className="flex h-[40px] items-center rounded-[8px] w-[132px]">
            <img alt="CEER" className="h-[15.4px] w-[110px] object-contain" src="/taas/ceer-logo.svg" />
          </div>
          <div className="flex gap-[6px] items-center shrink-0">
            <div className="overflow-hidden shrink-0 size-[14px] relative">
              <div className="absolute inset-[20.83%]">
                <img alt="" className="absolute block max-w-none" style={{ inset: '-12.24%', transform: 'scaleX(-1)' }} src="/taas/icon-arrow-left.svg" />
              </div>
            </div>
            <p className="text-[14px] leading-[23px] text-[#dadada] whitespace-nowrap" style={{ fontFamily: "'Almarai', sans-serif" }}>
              العودة إلى CEER
            </p>
          </div>
        </div>

        {/* Car image */}
        <div className="h-[142px] rounded-[8px] shrink-0 w-[290px] overflow-hidden relative">
          <img alt="CEER EXOBOT SUV" className="absolute max-w-none" style={{ height: '201.41%', left: '-13.47%', top: '-66.2%', width: '129.69%' }} src="/taas/ceer-car.png" />
        </div>

        {/* Product title */}
        <div className="flex flex-col gap-[4px] items-start w-full shrink-0 text-[#dadada]">
          <p className="text-[12px] leading-[16px] w-full" style={{ fontFamily: "'Almarai', sans-serif" }}>
            بريميوم دفع رباعي · 2026
          </p>
          <p className="text-[32px] leading-[36px] uppercase w-full" style={{ fontFamily: "'Oxanium', sans-serif", fontWeight: 400 }}>
            EXOBOT SUV
          </p>
        </div>

        {/* Attributes */}
        <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
          {[
            { icon: '/taas/icon-tag.svg', label: 'كوانتم جراي', sub: 'اللون الخارجي' },
            { icon: '/taas/icon-box.svg', label: 'أونيكس بلاك', sub: 'المقصورة الداخلية' },
            { icon: '/taas/icon-calendar.svg', label: 'جنوط سبورت 21 إنش', sub: 'الجنوط' },
            { icon: '/taas/icon-truck.svg', label: '108 كيلوواط ساعة · 610 كم', sub: 'البطارية والمدى' },
          ].map((attr, i) => (
            <div key={i} className="flex gap-[12px] items-center w-full shrink-0">
              <div className="bg-[#0f1d22] flex items-center justify-center rounded-[10px] shrink-0 size-[36px]">
                <img alt="" className="size-[18px] object-contain" src={attr.icon} />
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start text-[#dadada]" style={{ fontFamily: "'Almarai', sans-serif" }}>
                <p className="text-[14px] leading-[23px] w-full">{attr.label}</p>
                <p className="text-[12px] leading-[16px] w-full">{attr.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="bg-[#0f1d22] h-px w-full shrink-0" />

        {/* Financing summary */}
        <div className="flex flex-col gap-[10px] items-start w-full shrink-0 text-[#dadada] text-[14px] leading-[23px]" style={{ fontFamily: "'Almarai', sans-serif" }}>
          {[
            ['السعر (شامل الضريبة)', '228,750 ⃁'],
            ['الدفعة الأولى (20%)', '45,750 ⃁'],
            ['مبلغ التمويل', '183,000 ⃁'],
            ['مدة التمويل', '60 شهرًا'],
          ].map(([label, val], i) => (
            <div key={i} className="flex items-center justify-between w-full shrink-0">
              <p>{label}</p>
              <p>{val}</p>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-[1_0_0] min-h-0 w-[100px]" />

        {/* Secure note */}
        <div className="bg-[#1d2e34] flex gap-[12px] items-start p-[14px] rounded-[12px] shrink-0 w-full">
          <img alt="" className="size-[20px] shrink-0 mt-[2px]" src="/taas/icon-shield.svg" />
          <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start text-[#95a9b1]" style={{ fontFamily: "'Almarai', sans-serif" }}>
            <p className="text-[14px] leading-[23px] w-full">بياناتك في أمان</p>
            <p className="text-[12px] leading-[16px] w-full">نستخدم تشفيرًا بمستوى مصرفي لحماية معلوماتك.</p>
          </div>
        </div>

        {/* Powered by */}
        <div className="flex gap-[6px] items-center shrink-0 text-[12px] leading-[16px]" style={{ fontFamily: "'Almarai', sans-serif" }}>
          <p className="text-[#a3a3a3]">مدعوم من</p>
          <p className="text-white">تموّل®</p>
          <p className="text-[#a3a3a3]">· مرخّصة من ساما</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b1315] border border-[#2a3639] flex flex-col gap-[18px] self-stretch items-start p-[24px] rounded-[16px] shrink-0 w-[340px]">
      {/* Header row */}
      <div className="flex items-center justify-between w-full shrink-0">
        <div className="flex h-[40px] items-center rounded-[8px] w-[132px]">
          <img alt="CEER" className="h-[15.4px] w-[110px] object-contain" src="/taas/ceer-logo.svg" />
        </div>
        <div className="flex gap-[6px] items-center shrink-0">
          <div className="overflow-hidden shrink-0 size-[14px] relative">
            <div className="absolute inset-[20.83%]">
              <img alt="" className="absolute block max-w-none" style={{ inset: '-12.24%' }} src="/taas/icon-arrow-left.svg" />
            </div>
          </div>
          <p className="text-[14px] leading-[23px] text-[#dadada] whitespace-nowrap" style={{ fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' }}>
            Back to CEER
          </p>
        </div>
      </div>

      {/* Car image */}
      <div className="h-[142px] rounded-[8px] shrink-0 w-[290px] overflow-hidden relative">
        <img alt="CEER EXOBOT SUV" className="absolute max-w-none" style={{ height: '201.41%', left: '-13.47%', top: '-66.2%', width: '129.69%' }} src="/taas/ceer-car.png" />
      </div>

      {/* Product title */}
      <div className="flex flex-col gap-[4px] items-start w-full shrink-0 text-[#dadada]">
        <p className="text-[12px] leading-[16px] w-full" style={{ fontFamily: "'Saira', sans-serif", fontVariationSettings: '"wdth" 100' }}>
          Premium AWD · 2026
        </p>
        <p className="text-[32px] leading-[36px] uppercase w-full" style={{ fontFamily: "'Oxanium', sans-serif", fontWeight: 400 }}>
          EXOBOT SUV
        </p>
      </div>

      {/* Attributes */}
      <div className="flex flex-col gap-[12px] items-start w-full shrink-0">
        {[
          { icon: '/taas/icon-tag.svg', label: 'Quantum Grey', sub: 'Exterior' },
          { icon: '/taas/icon-box.svg', label: 'Onyx Black', sub: 'Interior' },
          { icon: '/taas/icon-calendar.svg', label: '21" Alloy Sport', sub: 'Wheels' },
          { icon: '/taas/icon-truck.svg', label: '108 kWh · 610 km', sub: 'Battery & range' },
        ].map((attr, i) => (
          <div key={i} className="flex gap-[12px] items-center w-full shrink-0">
            <div className="bg-[#0f1d22] flex items-center justify-center rounded-[10px] shrink-0 size-[36px]">
              <img alt="" className="size-[18px] object-contain" src={attr.icon} />
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start text-[#dadada]" style={{ fontFamily: "'Saira', sans-serif" }}>
              <p className="text-[14px] leading-[23px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{attr.label}</p>
              <p className="text-[12px] leading-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{attr.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="bg-[#0f1d22] h-px w-full shrink-0" />

      {/* Financing summary */}
      <div className="flex flex-col gap-[10px] items-start w-full shrink-0 text-[#dadada] text-[14px] leading-[23px]" style={{ fontFamily: "'Saira', sans-serif" }}>
        {[
          ['Price (incl. VAT)', 'SAR 228,750'],
          ['Down payment (20%)', 'SAR 45,750'],
          ['Amount to finance', 'SAR 183,000'],
          ['Tenure', '60 months'],
        ].map(([label, val], i) => (
          <div key={i} className="flex items-center justify-between w-full shrink-0">
            <p style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
            <p style={{ fontVariationSettings: '"wdth" 100' }}>{val}</p>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-[1_0_0] min-h-0 w-[100px]" />

      {/* Secure note */}
      <div className="bg-[#1d2e34] flex gap-[12px] items-start p-[14px] rounded-[12px] shrink-0 w-full">
        <img alt="" className="size-[20px] shrink-0 mt-[2px]" src="/taas/icon-shield.svg" />
        <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start text-[#95a9b1]" style={{ fontFamily: "'Saira', sans-serif" }}>
          <p className="text-[14px] leading-[23px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>Your data is secure</p>
          <p className="text-[12px] leading-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>We use bank-level encryption to protect your information.</p>
        </div>
      </div>

      {/* Powered by */}
      <div className="flex gap-[6px] items-center shrink-0 text-[12px] leading-[16px]" style={{ fontFamily: "'Saira', sans-serif" }}>
        <p className="text-[#a3a3a3]" style={{ fontVariationSettings: '"wdth" 100' }}>Powered by</p>
        <p className="text-white" style={{ fontVariationSettings: '"wdth" 100' }}>Tamawal®</p>
        <p className="text-[#a3a3a3]" style={{ fontVariationSettings: '"wdth" 100' }}>· Licensed by SAMA</p>
      </div>
    </div>
  );
}
