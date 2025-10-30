import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, CreditCard, DollarSign, CheckCircle2 } from 'lucide-react';

const days = () => {
  const now = new Date();
  const arr = [];
  for (let i = -1; i < 6; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    arr.push({
      key: i,
      date: d.getDate(),
      day: d.toLocaleDateString(undefined, { weekday: 'short' }),
      isToday: i === 0,
    });
  }
  return arr;
};

const StatusPill = ({ status }) => {
  const map = {
    New: 'bg-blue-100 text-blue-700',
    'In-Progress': 'bg-orange-100 text-orange-700',
    Completed: 'bg-emerald-100 text-emerald-700',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>{status}</span>;
};

const PaymentBadge = ({ method }) => {
  const map = {
    Card: 'bg-blue-50 text-blue-700',
    Cash: 'bg-amber-50 text-amber-700',
    Online: 'bg-emerald-50 text-emerald-700',
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${map[method]}`}>{method}</span>;
};

export default function JobsScreen() {
  const [selected, setSelected] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const job = {
    id: '#4521',
    customer: 'Sarah Johnson',
    address: 'Villa 234, Street 45, Al Waab, Doha',
    slot: '10:00 AM - 12:00 PM',
    duration: '4 hours',
    status: 'In-Progress',
    method: 'Card',
    paid: true,
  };

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3 text-gray-700"><CalendarIcon size={18} /><span className="font-semibold">This Week</span></div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {days().map((d, idx) => (
            <button
              key={d.key}
              onClick={() => setSelected(idx)}
              className={`min-w-[56px] rounded-lg p-2 text-center border ${idx===selected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-800 border-gray-200'}`}
            >
              <div className="text-lg font-semibold">{d.date}</div>
              <div className="text-xs">{d.day}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-3 pb-24">
        {[1,2].map((i) => (
          <div key={i} className="bg-white shadow-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-gray-900">{job.customer}</div>
              <StatusPill status={i===1? 'New' : 'In-Progress'} />
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2 text-gray-700"><MapPin size={16} className="text-blue-600" /><span className="truncate">{job.address}</span></div>
              <div className="flex items-center gap-2 text-gray-700"><Clock size={16} className="text-blue-600" />{job.slot} <span className="ml-1 text-gray-500">({job.duration})</span></div>
              <div className="flex items-center gap-2 text-gray-700">
                <PaymentBadge method={i===1? 'Cash' : 'Card'} />
                {i===1 ? (
                  <span className="text-orange-600 text-xs font-medium inline-flex items-center gap-1"><DollarSign size={14}/> Pending</span>
                ) : (
                  <span className="text-emerald-600 text-xs font-medium inline-flex items-center gap-1"><CheckCircle2 size={14}/> Paid</span>
                )}
                <span className="ml-auto text-xs text-gray-500">{job.id}</span>
              </div>
            </div>
            <button onClick={() => setShowDetail(true)} className="mt-3 w-full h-12 rounded-lg bg-blue-600 text-white font-semibold">View Details</button>
          </div>
        ))}
      </div>

      {showDetail && (
        <div className="fixed inset-0 bg-black/30 flex items-end justify-center z-50">
          <div className="w-[393px] h-[852px] bg-white rounded-t-2xl overflow-y-auto">
            <JobDetail onClose={() => setShowDetail(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

function JobDetail({ onClose }) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b p-4 flex items-center justify-between">
        <button onClick={onClose} className="text-gray-700">←</button>
        <div className="font-semibold">#4521</div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">In-Progress</span>
      </div>

      {/* Customer Card */}
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div>
              <div className="text-lg font-bold">Sarah Johnson</div>
              <button className="text-blue-600 text-sm">📞 +974 XXXX 5678</button>
            </div>
          </div>
          <div className="text-gray-700">Villa 234, Street 45, Al Waab, Doha</div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Call before arrival</span>
          </div>
          <button className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold">🗺️ Navigate</button>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold">On the Way</button>
          <button className="w-full h-12 rounded-lg bg-emerald-500 text-white font-semibold">Job Complete</button>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
          <div className="font-semibold flex items-center gap-2">🏠 Deep Cleaning - 3BR Villa</div>
          <div className="text-gray-700">🕒 10:00 AM - 12:00 PM (4 hours)</div>
          <div>
            <div className="font-semibold mb-2">Required Equipment</div>
            <div className="space-y-2 text-gray-700">
              {['Vacuum cleaner','Mop and bucket','Cleaning supplies'].map((i) => (
                <label key={i} className="flex items-center gap-2"><input type="checkbox" className="w-4 h-4"/> {i}</label>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">Customer Preferences</div>
            <div className="text-gray-700">Please use eco-friendly products. Allergic to strong chemicals</div>
          </div>
          <div>
            <div className="font-semibold mb-1">Special Entry Instructions</div>
            <div className="text-gray-700">Access code: 1234, Visitor parking available</div>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-xl shadow-sm p-4 space-y-2 mb-6">
          <div className="font-semibold">Recent Activity</div>
          <div className="text-sm text-gray-700">1. Admin created at 11:00 PM, Oct 16, 2025</div>
          <div className="text-sm text-gray-700">2. Alex marked On the Way at 9:45 AM, Oct 22, 2025</div>
        </div>
      </div>
    </div>
  );
}
