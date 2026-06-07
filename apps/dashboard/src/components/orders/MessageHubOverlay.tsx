'use client';
import { useState } from 'react';
import { X, Maximize2, ArrowUpRight, Upload } from 'lucide-react';

const TO_CUSTOMER_ITEMS = [
  'Text message',
  'Message with attachments',
  'External Link',
  'Consent Request',
  'Manual Counter Offer',
  'Request Payment',
];

const OPERATION_ITEMS = [
  'Internal Note',
  'Escalation Alert',
  'Team Notification',
];

function TextMessageForm({ title, onCancel }: { title: string; onCancel: () => void }) {
  const [msgTitle, setMsgTitle] = useState('');
  const [body, setBody] = useState('');
  const [requireReply, setRequireReply] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
        <div>
          <h2 className="text-[24px] font-bold leading-[32px] text-[#181d27]">{title}</h2>
          <p className="text-[14px] text-[#535862] mt-1">Create message for User that related to the order</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[14px] font-semibold text-[#181d27] block mb-1.5">Message title</label>
            <input
              type="text"
              value={msgTitle}
              onChange={e => setMsgTitle(e.target.value)}
              placeholder="Enter the message title"
              className="w-full border border-[#d5d7da] rounded-[8px] px-3 py-2.5 text-[14px] text-[#181d27] placeholder:text-[#9aa4b2] outline-none focus:border-[#0063f5]"
            />
          </div>

          <div>
            <label className="text-[14px] font-semibold text-[#181d27] block mb-1.5">
              Message body <span className="text-red-500">*</span>
            </label>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              placeholder="Enter a description...."
              rows={5}
              className="w-full border border-[#d5d7da] rounded-[8px] px-3 py-2.5 text-[14px] text-[#181d27] placeholder:text-[#9aa4b2] outline-none focus:border-[#0063f5] resize-none"
            />
            <div className="flex justify-end mt-1">
              <button
                onClick={() => setBody('')}
                className="flex items-center gap-1 border border-red-400 text-red-500 text-[12px] px-2 py-1 rounded-[6px] hover:bg-red-50 transition-colors"
              >
                <X className="w-3 h-3" /> Clear all
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={requireReply}
              onChange={e => setRequireReply(e.target.checked)}
              className="w-4 h-4 accent-[#0063f5]"
            />
            <span className="text-[14px] text-[#181d27]">Require to reply</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#e2e3e4] mt-6 shrink-0">
        <button
          disabled={!body}
          className="px-5 py-2.5 bg-[#0063f5] text-white text-[14px] font-medium rounded-[8px] disabled:bg-[#d5d7da] disabled:text-[#9aa4b2] transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          Submit
        </button>
        <button
          onClick={onCancel}
          className="px-5 py-2.5 border border-[#d5d7da] text-[#181d27] text-[14px] font-medium rounded-[8px] hover:bg-[#f9fafb] transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function MessageWithAttachmentsForm({ onCancel }: { onCancel: () => void }) {
  const [msgTitle, setMsgTitle] = useState('');
  const [body, setBody] = useState('');
  const [requireReply, setRequireReply] = useState(false);
  const [attachDoc, setAttachDoc] = useState(false);
  const [mustAttach, setMustAttach] = useState(false);
  const maxChars = 255;

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
        <div>
          <h2 className="text-[24px] font-bold leading-[32px] text-[#181d27]">Message with attachement</h2>
          <p className="text-[14px] text-[#535862] mt-1">Create message for User that related to the order</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[14px] font-semibold text-[#181d27] block mb-1.5">Message title</label>
            <input
              type="text"
              value={msgTitle}
              onChange={e => setMsgTitle(e.target.value)}
              placeholder="Enter the message title"
              className="w-full border border-[#d5d7da] rounded-[8px] px-3 py-2.5 text-[14px] text-[#181d27] placeholder:text-[#9aa4b2] outline-none focus:border-[#0063f5]"
            />
          </div>

          <div>
            <label className="text-[14px] font-semibold text-[#181d27] block mb-1.5">
              Message body <span className="text-red-500">*</span>
            </label>
            <textarea
              value={body}
              onChange={e => setBody(e.target.value.slice(0, maxChars))}
              placeholder="Enter a description...."
              rows={5}
              className="w-full border border-[#d5d7da] rounded-[8px] px-3 py-2.5 text-[14px] text-[#181d27] placeholder:text-[#9aa4b2] outline-none focus:border-[#0063f5] resize-none"
            />
            <div className="flex items-center justify-between mt-1">
              <span className="text-[12px] text-[#9aa4b2]">{maxChars - body.length} characters are remaining</span>
              <button
                onClick={() => setBody('')}
                className="flex items-center gap-1 border border-red-400 text-red-500 text-[12px] px-2 py-1 rounded-[6px] hover:bg-red-50 transition-colors"
              >
                <X className="w-3 h-3" /> Clear all
              </button>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={requireReply} onChange={e => setRequireReply(e.target.checked)} className="w-4 h-4 accent-[#0063f5]" />
            <span className="text-[14px] text-[#181d27]">Require to reply</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={attachDoc} onChange={e => setAttachDoc(e.target.checked)} className="w-4 h-4 accent-[#0063f5]" />
            <span className="text-[14px] text-[#181d27]">Attach the document to download by the User</span>
          </label>

          {attachDoc && (
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-semibold text-[#181d27]">Attachment document</p>
              <div className="border border-[#e2e3e4] rounded-[8px] flex flex-col items-center justify-center gap-2 py-6 px-4">
                <div className="border border-[#e2e3e4] rounded-[8px] p-2">
                  <Upload className="w-5 h-5 text-[#697586]" />
                </div>
                <p className="text-[14px] text-[#181d27]">
                  <span className="text-[#0063f5] font-medium cursor-pointer">Click to upload</span>
                  {' '}or drag and drop
                </p>
                <p className="text-[12px] text-[#9aa4b2]">PDF, PNG, JPG, max file size 1 MB</p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2">
            <input type="checkbox" checked={mustAttach} onChange={e => setMustAttach(e.target.checked)} className="w-4 h-4 accent-[#0063f5] mt-0.5 shrink-0" />
            <div>
              <p className="text-[14px] font-semibold text-[#181d27]">Must attach a required document of file</p>
              <p className="text-[13px] text-[#697586] mt-0.5">By checking this checkbox, you're required users to attach a document of file that size is less than 5 Mb. In the format .pdf, .doc, .xls, .ppt, .docx, .xlsx, .pptx, .png, .jpg, .jpeg, and not in a .zip or .rar.`</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#e2e3e4] mt-6 shrink-0">
        <button
          disabled={!body}
          className="px-5 py-2.5 bg-[#0063f5] text-white text-[14px] font-medium rounded-[8px] disabled:bg-[#d5d7da] disabled:text-[#9aa4b2] transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          Submit
        </button>
        <button
          onClick={onCancel}
          className="px-5 py-2.5 border border-[#d5d7da] text-[#181d27] text-[14px] font-medium rounded-[8px] hover:bg-[#f9fafb] transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function MessageHubOverlay({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<'customer' | 'operation'>('customer');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const items = tab === 'customer' ? TO_CUSTOMER_ITEMS : OPERATION_ITEMS;

  function renderForm() {
    if (selectedType === 'Message with attachments') {
      return <MessageWithAttachmentsForm onCancel={() => setSelectedType(null)} />;
    }
    return <TextMessageForm title={selectedType!} onCancel={() => setSelectedType(null)} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      <div className="absolute inset-0 backdrop-blur-[20px] bg-black/20" onClick={onClose} />

      <div className="relative z-10 bg-white flex flex-col h-full w-[500px] p-6 gap-6 overflow-hidden animate-slide-in-right">
        {/* Top buttons */}
        <div className="flex gap-2.5 items-center justify-end shrink-0">
          <button
            className="border border-[#d5d7da] flex items-center justify-center p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] transition-colors"
            aria-label="Maximize"
          >
            <Maximize2 className="w-5 h-5 text-[#414651]" />
          </button>
          <button
            onClick={onClose}
            className="border border-[#d5d7da] flex items-center justify-center p-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#f9fafb] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#414651]" />
          </button>
        </div>

        {selectedType ? renderForm() : (
          <>
            {/* Header */}
            <div className="flex flex-col gap-1 shrink-0">
              <h2 className="text-[24px] font-semibold leading-[32px] text-[#181d27]">Message Hub</h2>
              <p className="text-[14px] leading-5 text-[#535862]">Send the related message direct to customer or for the operation messages</p>
            </div>

            {/* Tabs */}
            <div className="flex bg-[#f3f4f6] rounded-[10px] p-1 shrink-0">
              <button
                onClick={() => setTab('customer')}
                className={`flex-1 text-[13px] font-medium leading-5 py-[10px] px-[30px] rounded-[8px] transition-colors ${
                  tab === 'customer'
                    ? 'bg-white text-[#0063f5] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]'
                    : 'text-[#6a7282] hover:text-[#181d27]'
                }`}
              >
                To Customer
              </button>
              <button
                onClick={() => setTab('operation')}
                className={`flex-1 text-[13px] font-medium leading-5 py-[10px] px-[35px] rounded-[8px] transition-colors ${
                  tab === 'operation'
                    ? 'bg-white text-[#0063f5] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]'
                    : 'text-[#6a7282] hover:text-[#181d27]'
                }`}
              >
                Operation Messages
              </button>
            </div>

            {/* Message types */}
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold leading-4 tracking-[0.6px] uppercase text-[#697586]">Messages Types</p>
              <div className="flex flex-col border border-[#e2e3e4] rounded-[8px] overflow-hidden">
                {items.map((item, i) => (
                  <button
                    key={item}
                    onClick={() => setSelectedType(item)}
                    className={`flex items-center justify-between px-4 py-3 hover:bg-[#f5f8ff] transition-colors text-left cursor-pointer ${
                      i < items.length - 1 ? 'border-b border-[#e2e3e4]' : ''
                    }`}
                  >
                    <span className="text-[14px] font-medium leading-5 text-[#0063f5]">{item}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0063f5] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
