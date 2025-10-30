import React from 'react';
import { Bell, MapPin, Clock, Navigation, Info, Home, Briefcase, Timer, Activity } from 'lucide-react';

const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}>{children}</span>
);

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="flex-1 bg-white shadow-sm rounded-xl p-4 flex items-center gap-3">
    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
      <Icon size={20} />
    </div>
    <div className="flex-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-semibold text-gray-900">{value}</div>
      {label.includes('Jobs') && (
        <div className="mt-2 h-2 w-full bg-gray-200 rounded-full">
          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '33%' }} />
        </div>
      )}
    </div>
  </div>
);

const SmallJobCard = ({ status, badgeClass, name, time, icon: Icon }) => (
  <div className="bg-white shadow-sm rounded-xl p-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className={`p-2.5 rounded-lg bg-gray-50 text-gray-700`}>
        <Icon size={20} />
      </div>
      <div>
        <div className="text-gray-900 font-medium">{name}</div>
        <div className="text-sm text-gray-500 flex items-center gap-1"><Clock size={14} />{time}</div>
      </div>
    </div>
    <Badge className={badgeClass}>{status}</Badge>
  </div>
);

const NextJobCard = () => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold text-orange-500 tracking-widest">NEXT JOB IN 45 MINUTES</span>
      <Badge className="bg-gray-100 text-gray-700">#4521</Badge>
    </div>
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
      <div className="flex items-center gap-2 text-gray-700">
        <Home size={18} className="text-blue-600" />
        <span className="font-medium">Deep Cleaning - 3BR Villa</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <MapPin size={18} className="text-blue-600" />
        <span>Villa 234, Al Waab (2.3 km away)</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Clock size={18} className="text-blue-600" />
        <span>10:00 AM - 12:00 PM</span>
        <Badge className="bg-emerald-50 text-emerald-600">4 hours</Badge>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3">
      <button className="h-12 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center gap-2">
        <Navigation size={18} /> Navigate
      </button>
      <button className="h-12 rounded-lg border border-blue-600 text-blue-600 font-semibold bg-white flex items-center justify-center gap-2">
        <Info size={18} /> View Details
      </button>
    </div>
  </div>
);

export default function DashboardScreen({ onTabChange }) {
  return (
    <div className="w-full h-full bg-gray-50 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Good morning,</div>
          <h1 className="text-2xl font-bold text-gray-900">Alex</h1>
        </div>
        <button className="relative p-2 rounded-full bg-white shadow-sm">
          <Bell className="text-gray-700" size={22} />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
        </button>
      </div>

      <NextJobCard />

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Today's Jobs</h2>
          <button onClick={() => onTabChange('jobs')} className="text-sm text-blue-600 font-medium">View All</button>
        </div>
        <div className="space-y-3">
          <SmallJobCard
            status="Ongoing"
            badgeClass="bg-blue-100 text-blue-700"
            name="Sarah Johnson"
            time="10:00 AM - 12:00 PM"
            icon={Home}
          />
          <SmallJobCard
            status="Next"
            badgeClass="bg-orange-100 text-orange-700"
            name="Mohammad Ali"
            time="1:00 PM - 3:00 PM"
            icon={Briefcase}
          />
          <SmallJobCard
            status="Scheduled"
            badgeClass="bg-gray-100 text-gray-700"
            name="Emily Clark"
            time="4:00 PM - 5:30 PM"
            icon={Home}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Jobs 1/3" value="33%" icon={Activity} />
        <StatCard label="6.5 Hours" value="Today" icon={Timer} />
      </div>
    </div>
  );
}
