import React, { useState } from 'react';
import DashboardScreen from './components/DashboardScreen';
import JobsScreen from './components/JobsScreen';
import NotificationsScreen from './components/NotificationsScreen';
import MoreScreen from './components/MoreScreen';
import { Home, Briefcase, Bell, MoreHorizontal } from 'lucide-react';

const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 py-2 ${active ? 'text-blue-600' : 'text-gray-500'}`}
    aria-label={label}
  >
    <Icon size={22} />
    <span className="text-[10px] mt-1">{label}</span>
  </button>
);

export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4">
      <div className="relative w-[393px] h-[852px] bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-200">
        {/* screens */}
        <div className="absolute inset-0 pb-[64px]">
          {tab === 'home' && <DashboardScreen onTabChange={setTab} />}
          {tab === 'jobs' && <JobsScreen />}
          {tab === 'notifications' && <NotificationsScreen />}
          {tab === 'more' && <MoreScreen />}
        </div>

        {/* bottom nav */}
        <nav className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex">
          <TabButton icon={Home} label="Home" active={tab==='home'} onClick={() => setTab('home')} />
          <TabButton icon={Briefcase} label="Jobs" active={tab==='jobs'} onClick={() => setTab('jobs')} />
          <TabButton icon={Bell} label="Notifications" active={tab==='notifications'} onClick={() => setTab('notifications')} />
          <TabButton icon={MoreHorizontal} label="More" active={tab==='more'} onClick={() => setTab('more')} />
        </nav>
      </div>
    </div>
  );
}
