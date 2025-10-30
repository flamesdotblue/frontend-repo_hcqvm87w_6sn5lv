import React from 'react';
import { Bell, DollarSign, Star } from 'lucide-react';

const Item = ({ icon: Icon, color, title, message, time, unread }) => (
  <div className="relative bg-white rounded-xl shadow-sm p-4 flex items-start gap-3">
    {unread && <span className="absolute left-0 top-5 -ml-1 w-2 h-2 rounded-full bg-blue-600" />}
    <div className={`p-2.5 rounded-lg ${color.bg} ${color.text}`}>
      <Icon size={18} />
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{message}</div>
      <div className="text-xs text-gray-400 mt-1 text-right">{time}</div>
    </div>
  </div>
);

export default function NotificationsScreen() {
  return (
    <div className="w-full h-full bg-gray-50 p-4 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">Notifications</h1>
        <button className="text-sm text-blue-600 font-medium">Mark All Read</button>
      </div>

      <div className="space-y-3">
        <Item unread icon={Bell} color={{ bg: 'bg-blue-50', text: 'text-blue-600' }} title="New Job Assigned" message="Deep Cleaning at Villa 234, Tomorrow at 10:00 AM" time="5 min ago" />
        <Item icon={DollarSign} color={{ bg: 'bg-emerald-50', text: 'text-emerald-600' }} title="Payment Received" message="$125 for Job #4521" time="15 min ago" />
        <Item icon={Star} color={{ bg: 'bg-amber-50', text: 'text-amber-600' }} title="New Review" message="Sarah gave you 5 stars!" time="1 hour ago" />
      </div>

      <div className="text-xs text-gray-400 mt-2">Swipe left on a card to delete</div>
    </div>
  );
}
