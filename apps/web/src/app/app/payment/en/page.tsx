'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <div className="bg-[#E8EBF0] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-[16px] shadow-lg w-[512px] p-8 flex flex-col gap-6">

        {/* Apple Pay button */}
        <button onClick={() => router.push('/code')} className="bg-black text-white rounded-[8px] py-4 w-full flex items-center justify-center gap-3 text-[18px] font-medium">
          <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.175 14.0459C18.1521 11.3789 20.3438 10.082 20.4453 10.0205C19.1855 8.14648 17.1934 7.89648 16.4941 7.87305C14.8076 7.69922 13.1797 8.87305 12.3223 8.87305C11.4473 8.87305 10.1016 7.89258 8.68164 7.92188C6.84766 7.95117 5.14453 9.00195 4.20508 10.6348C2.27344 13.9629 3.72852 18.8867 5.58008 21.5977C6.50195 22.9258 7.58984 24.4141 9.01758 24.3613C10.4102 24.3027 10.9453 23.4805 12.6309 23.4805C14.2988 23.4805 14.7988 24.3613 16.2559 24.3262C17.7539 24.3027 18.6934 22.9727 19.5859 21.6328C20.6504 20.1035 21.0879 18.5977 21.1055 18.5215C21.0703 18.5098 18.2012 17.459 18.175 14.0459Z"
              fill="white"
            />
            <path
              d="M15.3926 6.00977C16.1387 5.09375 16.6504 3.83398 16.5137 2.5625C15.4316 2.61328 14.0801 3.30664 13.3047 4.20508C12.6133 5.00195 12.002 6.30664 12.1563 7.54883C13.3691 7.63867 14.6289 6.92773 15.3926 6.00977Z"
              fill="white"
            />
          </svg>
          Pay
        </button>

        {/* STC Pay button */}
        <button onClick={() => router.push('/code')} className="bg-[#7B2D8B] text-white rounded-[8px] py-4 w-full flex items-center justify-center text-[18px] font-medium">
          <span className="font-bold tracking-tight">stc</span>
          <sup className="text-[#FFD700] text-[12px] ml-[2px] font-normal">pay</sup>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-[#E4E7EC]" />
          <span className="text-[#9AA4B2] text-[14px]">Or pay with card</span>
          <hr className="flex-1 border-[#E4E7EC]" />
        </div>

        {/* Name on card */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#101828] mb-2">Name on card</label>
          <input
            type="text"
            placeholder="Name on card"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-[#E4E7EC] rounded-[8px] px-4 py-3 w-full text-[16px] placeholder:text-[#9AA4B2] outline-none focus:border-[#0063F5]"
          />
        </div>

        {/* Card information */}
        <div className="flex flex-col">
          <label className="text-[14px] font-medium text-[#101828] mb-2">Card information</label>
          <div className="border border-[#E4E7EC] rounded-[8px] overflow-hidden">
            {/* Card number row */}
            <div className="px-4 py-3 w-full flex items-center justify-between border-b border-[#E4E7EC]">
              <input
                type="text"
                placeholder="1234 5678 9101 1121"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="flex-1 outline-none text-[16px] placeholder:text-[#9AA4B2]"
              />
              {/* Card brand icons */}
              <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                <span className="text-[11px] text-[#9AA4B2] font-medium border border-[#E4E7EC] rounded px-1 py-[1px]">mada</span>
                <span className="text-[11px] text-[#1A1F71] font-bold italic border border-[#E4E7EC] rounded px-1 py-[1px]">VISA</span>
                {/* Mastercard two-circle icon */}
                <span className="relative inline-flex items-center w-[28px] h-[18px]">
                  <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="9" r="8" fill="#EB001B" />
                    <circle cx="18" cy="9" r="8" fill="#F79E1B" fillOpacity="0.85" />
                  </svg>
                </span>
              </div>
            </div>
            {/* Expiry + CVC row */}
            <div className="flex">
              <div className="w-1/2 border-r border-[#E4E7EC]">
                <input
                  type="text"
                  placeholder="MM / YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="px-4 py-3 outline-none w-full text-[16px] placeholder:text-[#9AA4B2]"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="px-4 py-3 outline-none w-full text-[16px] placeholder:text-[#9AA4B2]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pay button */}
        <button onClick={() => router.push('/code')} className="bg-[#1A3C8F] text-white rounded-[8px] py-4 w-full text-[18px] font-semibold text-center">
          Pay SAR 200.00
        </button>

        {/* Powered by Moyasar */}
        <p className="text-center text-[14px] text-[#9AA4B2] mt-2">Powered by Moyasar</p>

      </div>
    </div>
  );
}
