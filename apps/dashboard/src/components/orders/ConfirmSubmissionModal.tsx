'use client';

const imgSigningIllustration = '/illustrations/illustration_icon_signing.svg';

export default function ConfirmSubmissionModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-[6px] bg-black/50"
        onClick={onCancel}
      />

      {/* Modal card */}
      <div className="relative z-10 bg-white rounded-[8px] w-[640px] px-6 py-12 flex flex-col items-center animate-fade-in-scale dark:bg-slate-950">
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          {/* Illustration */}
          <div className="relative flex h-[127px] w-[139px] shrink-0 items-center justify-center">
            <img
              src={imgSigningIllustration}
              alt=""
              className="h-[100px] w-[112px]"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-px items-center text-center w-full">
            <p className="text-[26px] font-semibold text-[#15212f] leading-[1.5] w-full dark:text-slate-100">
              Are sure to confirm submission?
            </p>
            <p className="text-[16px] font-normal text-[#6d7989] leading-[1.5] w-full whitespace-pre-wrap dark:text-slate-400">
              {`Are you sure to confirm move status to be "Contract Signing" \nwith the correct loan data and correct date?`}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-[400px]">
            <button
              onClick={onConfirm}
              className="bg-[#0063f5] text-white text-[16px] font-medium leading-[1.5] py-2 px-[10px] rounded-[6px] w-full hover:bg-[#004fc6] transition-colors"
            >
              Yes, I confirm &amp; Submit
            </button>
            <button
              onClick={onCancel}
              className="bg-white border border-[#cdd4df] text-[#4b5565] text-[16px] font-medium leading-[1.5] py-2 px-5 rounded-[6px] w-full hover:bg-[#f9fafb] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              No, let me recheck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
