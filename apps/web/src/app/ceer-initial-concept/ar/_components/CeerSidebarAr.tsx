import Link from 'next/link';

interface Props {
  backHref?: string;
  backLabel?: string;
}

export default function CeerSidebarAr({ backHref, backLabel = 'العودة إلى سير' }: Props) {
  return (
    <aside className="w-[350px] shrink-0 bg-[#0b1420] border-l border-[#2a3a4f] flex flex-col p-6 gap-0 sticky top-0 h-full overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between py-2">
        {backHref && (
          <Link href={backHref} className="flex items-center gap-2 text-[#a4a7ae] text-sm font-medium">
            {backLabel} →
          </Link>
        )}
        <svg width="100" height="14" viewBox="0 0 100 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mr-auto">
          <g clipPath="url(#ceer-sb-ar)">
            <path d="M48.4003 14H25.6232L28.4698 11.1994H45.5529L48.4003 14Z" fill="currentColor"/>
            <path d="M99.6471 5.5997L96.7994 8.4003H26.8022L21.1079 14H2.84656L0 11.1994V6.98782L2.84656 9.78729V11.1994H19.9293L25.6232 5.5997H99.6471Z" fill="currentColor"/>
            <path d="M22.7759 0L19.9293 2.79948H2.84656V6.99756L0 4.19809V2.79948L2.84656 0H22.7759Z" fill="currentColor"/>
            <path d="M48.4003 0L45.5529 2.79948H25.6232V0H48.4003Z" fill="currentColor"/>
            <path d="M74.0235 0L71.1761 2.79948H54.0941V5.5997H51.2468V0H74.0235Z" fill="currentColor"/>
            <path d="M79.7173 8.4003H76.87V14H79.7173V8.4003Z" fill="currentColor"/>
            <path d="M74.0235 14H51.2468V8.4003H54.0941V11.1994H71.1761L74.0235 14Z" fill="currentColor"/>
            <path d="M99.6471 2.79948V5.5997H96.7994V2.79948H79.7177V5.5997H76.87V0H96.7994L99.6471 2.79948Z" fill="currentColor"/>
            <path d="M99.6471 14H95.6208L89.9269 8.4003H93.9539L99.6471 14Z" fill="currentColor"/>
          </g>
          <defs><clipPath id="ceer-sb-ar"><rect width="99.6471" height="14" fill="white"/></clipPath></defs>
        </svg>
      </div>

      {/* Car card */}
      <div className="mt-3.5 bg-[#121e2e] border border-[#2a3a4f] rounded-2xl p-[21px] flex flex-col">
        <div className="w-full h-[180px] rounded-xl relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 50% 160%, rgba(37,63,98,1) 25%, rgba(28,47,72,1) 62%, rgba(18,30,46,1) 100%)' }}>
          <img src="/ceer-car-00.png" alt="EXOBOT SUV" className="absolute left-0 top-5 w-[240px] h-[160px] object-cover pointer-events-none" />
        </div>

        <p className="mt-4 font-bold text-base text-[#e6edf5]">EXOBOT SUV</p>
        <p className="mt-1 text-sm text-[#93a4b8]">دفع رباعي متميز – 2026</p>

        <div className="mt-3.5 border-t border-[#2a3a4f] pt-1.5 flex flex-col">
          {[
            ['🎨 المظهر', 'رمادي كوانتم'],
            ['💺 المقصورة', 'أسود أونيكس'],
            ['✳️ العجلات', '21" سبورت'],
            ['🔋 البطارية', '108 كيلوواط'],
            ['📏 المدى', '610 كم'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-1.5 h-[31px] text-[13px]">
              <span className="text-[#93a4b8]">{label}</span>
              <span className="text-[#e6edf5] font-semibold">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-2 border-t border-[#2a3a4f] pt-3.5 flex flex-col">
          <div className="flex justify-between py-1.5 text-[13px]">
            <span className="text-[#93a4b8]">سعر المركبة (شامل ض.ق.م)</span>
            <span className="text-[#e6edf5] font-semibold">٢٢٨٬٧٥٠ ر.س</span>
          </div>
          <div className="flex justify-between py-1.5 text-[13px]">
            <span className="text-[#93a4b8]">الدفعة المقدمة (20%)</span>
            <span className="text-[#e6edf5] font-semibold">٤٥٬٧٥٠ ر.س</span>
          </div>
        </div>

        <div className="mt-3.5 bg-[#16283f] rounded-[10px] px-4 py-3 flex items-center justify-between">
          <span className="text-[13px] text-[#e6edf5]">مبلغ التمويل</span>
          <span className="text-[15px] font-bold text-[#e6edf5]">١٨٣٬٠٠٠ ر.س</span>
        </div>

        <div className="flex justify-between pt-4 pb-1.5 text-[13px]">
          <span className="text-[#93a4b8]">مدة التمويل</span>
          <span className="text-[#e6edf5] font-semibold">60 شهراً</span>
        </div>

        <div className="mt-2.5 bg-[#00265f] border border-[#0041a3] rounded-[10px] px-[17px] py-[13px] flex items-center justify-between">
          <span className="text-[12px] text-white">إجمالي المستحق (SNB)</span>
          <span className="text-[15px] font-bold text-white">٢١٨٬٨٨٠ ر.س</span>
        </div>
      </div>

      {/* Security note */}
      <div className="mt-3 bg-[#121e2e] border border-[#2a3a4f] rounded-xl p-[15px] flex gap-3 items-center">
        <div className="w-[34px] h-[34px] bg-[#16283f] rounded-full flex items-center justify-center shrink-0 text-[15px]">🛡️</div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-bold text-[#e6edf5]">بياناتك آمنة</p>
          <p className="text-[12.5px] text-[#93a4b8] mt-0.5">نستخدم تشفيراً بمستوى بنكي لحماية معلوماتك.</p>
        </div>
      </div>

      {/* Nafath note */}
      <div className="mt-3 bg-[#121e2e] border border-[#2a3a4f] rounded-xl p-[15px] flex gap-3 items-center">
        <div className="shrink-0 px-2 py-0.5">
          <p className="text-[11px] font-black text-[#93a4b8] w-[39px] leading-[16.5px]" dir="auto">نفاذ Nafath</p>
        </div>
        <p className="flex-1 text-[12.5px] text-[#93a4b8] leading-[18.75px]">التحقق مدعوم بـ نفاذ — خدمات الهوية الرقمية الحكومية الموثوقة.</p>
      </div>

    </aside>
  );
}
