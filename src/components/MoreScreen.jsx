import React from 'react';
import { Camera, Phone, Mail, User, Shield, Languages, FileText, MessageCircle, Headset, LogOut } from 'lucide-react';

const Section = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
    <div className="text-lg font-semibold">{title}</div>
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium inline-flex items-center gap-1 mr-2 mb-2">{children}</span>
);

export default function MoreScreen() {
  return (
    <div className="w-full h-full bg-gray-50 p-4 space-y-4 overflow-y-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <button className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-blue-600 text-white"><Camera size={14} /></button>
          </div>
          <div>
            <div className="text-xl font-bold">Alex Thompson</div>
            <div className="text-gray-500">Senior Cleaner</div>
            <div className="text-xs text-gray-400">Member since Jan 2024</div>
          </div>
          <div className="ml-auto">
            <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">WB-5878</span>
          </div>
        </div>
      </div>

      <Section title="Personal Information">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2"><Phone size={16} className="text-blue-600"/> +974 5555 1234</div>
          <div className="flex items-center gap-2"><Mail size={16} className="text-blue-600"/> alex@example.com</div>
          <div className="flex items-center gap-2"><User size={16} className="text-blue-600"/> Emergency: John Doe (+974 4444 9876, Brother)</div>
        </div>
        <button className="ml-auto block text-sm text-blue-600 font-medium">Edit</button>
      </Section>

      <Section title="Professional Details">
        <div>
          <div className="font-medium mb-1">Skills</div>
          <div className="flex flex-wrap">
            {['Deep Cleaning','Carpet Cleaning','Window Cleaning'].map(s => <Pill key={s}>{s}</Pill>)}
          </div>
        </div>
        <div className="text-sm text-gray-700">Certifications: IICRC (exp. 2026), First Aid (exp. 2025)</div>
        <div className="text-sm text-gray-700">Experience: 3 years</div>
        <div className="text-sm text-gray-700">Languages: English, Arabic, Hindi</div>
        <div className="text-sm text-gray-700">Service Categories: Residential, Commercial</div>
      </Section>

      <Section title="Availability Management">
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d,i)=> (
            <button key={d} className={`py-2 rounded-lg ${i<5? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>{d}</button>
          ))}
        </div>
        <div className="text-center text-gray-700">8:00 AM - 5:00 PM</div>
        <button className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold">Save Availability</button>
      </Section>

      <Section title="Leave Management">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-sm text-gray-700">Vacation</div>
            <div className="text-xl font-bold">10 days</div>
            <div className="mt-2 h-2 bg-white rounded-full"><div className="h-2 bg-blue-600 rounded-full w-1/2"/></div>
          </div>
          <div className="bg-amber-50 rounded-lg p-3">
            <div className="text-sm text-gray-700">Sick</div>
            <div className="text-xl font-bold">5 days</div>
            <div className="mt-2 h-2 bg-white rounded-full"><div className="h-2 bg-amber-500 rounded-full w-1/3"/></div>
          </div>
        </div>
        <button className="w-full h-12 rounded-lg border border-gray-200 font-semibold">Request Time Off</button>
        <div className="text-sm text-gray-700">History: 2 days approved (Aug), 1 day pending (Oct 28)</div>
      </Section>

      <Section title="Documents">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="border rounded-lg p-3">
            <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">PDF</div>
            <div className="font-medium">QID Copy</div>
            <div className="text-xs text-gray-500">Uploaded Sep 15, Exp: Nov 30 <span className="text-red-600">(expiring)</span></div>
          </div>
          <div className="border rounded-lg p-3">
            <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">PDF</div>
            <div className="font-medium">Driver License</div>
            <div className="text-xs text-gray-500">Uploaded May 02, Exp: 2027</div>
          </div>
        </div>
        <button className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold">Upload Document</button>
      </Section>

      <Section title="Communication">
        <div className="grid grid-cols-2 gap-3">
          <button className="h-12 rounded-lg bg-blue-600 text-white font-semibold">Contact Supervisor</button>
          <button className="h-12 rounded-lg border border-gray-200 font-semibold">Call Support</button>
        </div>
        <details className="mt-2">
          <summary className="font-medium cursor-pointer">FAQ</summary>
          <div className="text-sm text-gray-700 mt-2">How to mark a job complete? Go to Job Detail and tap "Job Complete".</div>
        </details>
      </Section>

      <Section title="Settings">
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center justify-between"><span>Language</span><span>English / العربية</span></div>
          <div className="flex items-center justify-between"><span>Notifications</span><span>On</span></div>
          <div className="flex items-center justify-between"><span>App Theme</span><span>Light</span></div>
          <div className="flex items-center justify-between"><span>Preferred Maps</span><span>Google Maps</span></div>
        </div>
        <button className="w-full h-12 rounded-lg text-red-600 font-semibold border border-red-200 mt-2">Log Out</button>
      </Section>

      <div className="h-6" />
    </div>
  );
}
