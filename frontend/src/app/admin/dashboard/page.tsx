'use client';

import React, { useState } from 'react';
import { 
  Activity, Users, ShoppingBag, 
  BarChart3, ShieldCheck,
  Search, ArrowDown,
  LayoutGrid, Settings, LogOut,
  Bell, Clock, Edit, Trash2, Plus, CheckCircle2, XCircle, MoreVertical
} from 'lucide-react';
import { Badge } from '@/components/shared/DesignSystem';
import Link from 'next/link';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  joined: string;
  status: 'Active' | 'Suspended';
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');

  const [usersList, setUsersList] = useState<AdminUser[]>([
    { id: 1, name: 'Customer Name 1', email: 'customer1@example.com', phone: '+91 98765 43211', joined: 'Oct 12, 2023', status: 'Active' },
    { id: 2, name: 'Customer Name 2', email: 'customer2@example.com', phone: '+91 98765 43212', joined: 'Oct 15, 2023', status: 'Active' },
  ]);

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: AdminUser = {
      id: Date.now(),
      name: newUserName,
      email: newUserEmail,
      phone: '+91 00000 00000',
      joined: 'Just Now',
      status: 'Active'
    };
    setUsersList([newUser, ...usersList]);
    setIsAddUserModalOpen(false);
    setNewUserName('');
    setNewUserEmail('');
  };

  const handleToggleUserStatus = (id: number) => {
    setUsersList(usersList.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' };
      }
      return u;
    }));
  };

  const metrics = [
    { label: 'Total Revenue', value: '₹12.54L', trend: '+18.2%', icon: <BarChart3 className="text-black" /> },
    { label: 'Total Bookings', value: '4,821', trend: '+12.5%', icon: <ShoppingBag className="text-black" /> },
    { label: 'Active Partners', value: '342', trend: '+8.1%', icon: <ShieldCheck className="text-black" /> },
    { label: 'User Growth', value: '12k', trend: '+15.4%', icon: <Users className="text-black" /> },
  ];

  const renderOverview = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-black mb-1">Executive Insights</h1>
          <p className="text-gray-500 text-sm font-medium">Real-time performance analytics.</p>
        </div>
        <button className="px-4 py-2 border border-gray-300 bg-white text-black font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                {m.icon}
              </div>
              <div className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                <ArrowDown className="rotate-180" size={12} /> {m.trend}
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-semibold mb-1">{m.label}</p>
              <h3 className="text-2xl font-bold text-black">{m.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
              <h3 className="text-base font-bold text-black">Recent Bookings</h3>
              <button onClick={() => setActiveTab('Bookings')} className="text-sm font-semibold text-gray-500 hover:text-black">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="hover:bg-gray-50 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <span className="font-semibold text-black text-sm">#UC-981{item}</span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-black text-sm">AC Cleaning</p>
                        <p className="text-xs text-gray-500 font-medium">Home Repair</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-black text-sm">Aryan S.</span>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="success">Completed</Badge>
                      </td>
                      <td className="px-6 py-4 font-bold text-black text-sm">₹899</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-black text-white rounded-xl shadow-sm p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2">
              <Activity size={18} /> System Health
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-400 mb-1">
                  <span>API Latency</span>
                  <span className="text-green-400">Optimal</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[15%] h-full bg-green-400 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-400 mb-1">
                  <span>Server Load</span>
                  <span className="text-yellow-400">Moderate</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-yellow-400 rounded-full" />
                </div>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-gray-500">
                <Clock size={12} /> Last Scan: 2 mins ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderUsers = () => (
    <div>
      {isAddUserModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Add New User</h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input required type="text" value={newUserName} onChange={e=>setNewUserName(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-black" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input required type="email" value={newUserEmail} onChange={e=>setNewUserEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-black" placeholder="john@example.com" />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsAddUserModalOpen(false)} className="flex-1 py-2 border border-gray-300 rounded-lg text-black font-bold hover:bg-gray-50">Cancel</button>
                <button type="submit" className="flex-1 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800">Save User</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black mb-1">User Management</h1>
          <p className="text-gray-500 text-sm font-medium">Manage all customer accounts.</p>
        </div>
        <button onClick={() => setIsAddUserModalOpen(true)} className="px-4 py-2 bg-black text-white font-semibold rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus size={16} /> Add User
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="max-w-md w-full relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search users by name, email, or phone..." 
              className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm font-medium text-black placeholder:text-gray-400 outline-none focus:border-gray-300 transition-all"
            />
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Joined</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {usersList.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-black text-xs">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-black font-medium">{item.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-500 font-medium">{item.joined}</td>
                <td className="px-6 py-4">
                  <Badge variant={item.status === 'Active' ? 'success' : 'danger'}>{item.status}</Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleToggleUserStatus(item.id)} className="text-sm font-bold text-blue-600 hover:underline">
                    {item.status === 'Active' ? 'Suspend' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPartners = () => (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black mb-1">Partner Approvals & Management</h1>
          <p className="text-gray-500 text-sm font-medium">Verify KYC and manage active service professionals.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-black">Pending KYC</h3>
            <span className="bg-yellow-50 text-yellow-700 font-bold px-2 py-1 rounded text-xs">42</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Requires manual verification</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-black">Active Partners</h3>
            <span className="bg-green-50 text-green-700 font-bold px-2 py-1 rounded text-xs">1,240</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Currently online and accepting jobs</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-black">Suspended</h3>
            <span className="bg-red-50 text-red-700 font-bold px-2 py-1 rounded text-xs">15</span>
          </div>
          <p className="text-gray-500 text-sm font-medium">Due to policy violations</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="font-bold text-black">Recent Applications</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Professional</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Applied On</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {[1, 2, 3, 4].map((item) => (
              <tr key={item} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                      <img src={`https://i.pravatar.cc/100?u=${item + 20}`} alt="Partner" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm">Professional {item}</h4>
                      <p className="text-xs text-gray-500 font-medium">+91 99887 7766{item}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-black font-semibold">Plumbing</td>
                <td className="px-6 py-4 text-sm text-gray-500 font-medium">New Delhi</td>
                <td className="px-6 py-4 text-sm text-gray-500 font-medium">2 hours ago</td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                    <CheckCircle2 size={18} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reject">
                    <XCircle size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderServices = () => (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black mb-1">Categories & Services</h1>
          <p className="text-gray-500 text-sm font-medium">Manage pricing, inclusions, and catalog structure.</p>
        </div>
        <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus size={16} /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['AC Repair', 'Home Cleaning', 'Salon for Women', 'Plumbing', 'Electrician', 'Carpentry'].map((cat, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group hover:border-black transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <LayoutGrid size={20} className={i % 2 === 0 ? "text-gray-500 group-hover:text-white" : "text-gray-500 group-hover:text-white"} />
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 text-gray-400 hover:text-black rounded transition-colors"><Edit size={16} /></button>
                <button className="p-1.5 text-gray-400 hover:text-red-600 rounded transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>
            <h3 className="font-bold text-lg text-black mb-1">{cat}</h3>
            <p className="text-sm text-gray-500 font-medium">{12 + i * 3} active services</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBookings = () => (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-black mb-1">Command Center</h1>
          <p className="text-gray-500 text-sm font-medium">Monitor all platform bookings in real-time.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div className="flex gap-2">
            {['All', 'Active', 'Completed', 'Cancelled'].map((filter, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-colors ${
                i === 0 ? 'bg-black text-white' : 'bg-white text-gray-500 border border-gray-200 hover:text-black'
              }`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID / Time</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Service Details</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer / Partner</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <tr key={item} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-black text-sm">#UC-2024-{1000 + item}</p>
                  <p className="text-xs text-gray-500 font-medium">Today, 10:30 AM</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-black text-sm">Deep Cleaning</p>
                  <p className="text-xs text-gray-500 font-medium">2 BHK / Unfurnished</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-black flex items-center gap-1"><Users size={12}/> Rahul (C)</span>
                    <span className="text-sm font-medium text-gray-600 flex items-center gap-1"><ShieldCheck size={12}/> Vijay (P)</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant={item % 3 === 0 ? "warning" : "success"}>
                    {item % 3 === 0 ? "In Progress" : "Completed"}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right font-bold text-black text-sm">₹1,499</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-black mb-1">Platform Settings</h1>
      <p className="text-gray-500 text-sm font-medium mb-8">Global configurations for the marketplace.</p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-lg text-black mb-4 border-b border-gray-100 pb-2">Financial Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-black mb-1">Platform Commission Rate (%)</label>
              <input type="number" defaultValue="15" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm font-medium outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">Minimum Payout Threshold (₹)</label>
              <input type="number" defaultValue="500" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm font-medium outline-none focus:border-black" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-lg text-black mb-4 border-b border-gray-100 pb-2">City Operations</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <p className="font-bold text-sm text-black">New Delhi</p>
                <p className="text-xs text-gray-500 font-medium">Active Zone</p>
              </div>
              <div className="w-10 h-5 bg-black rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <p className="font-bold text-sm text-black">Mumbai</p>
                <p className="text-xs text-gray-500 font-medium">Active Zone</p>
              </div>
              <div className="w-10 h-5 bg-black rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </div>
          <button className="mt-4 text-sm font-bold text-black underline">Add New City</button>
        </div>

        <button className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors">
          Save All Changes
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="text-xl font-bold tracking-tight text-black">
            Super Admin
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {[
            { label: 'Overview', icon: <Activity size={18} /> },
            { label: 'Users', icon: <Users size={18} /> },
            { label: 'Partners', icon: <ShieldCheck size={18} />, badge: '42' },
            { label: 'Services', icon: <LayoutGrid size={18} /> },
            { label: 'Bookings', icon: <ShoppingBag size={18} /> },
            { label: 'Settings', icon: <Settings size={18} /> },
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-sm transition-colors ${
                activeTab === item.label ? "bg-black text-white shadow-md" : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={activeTab === item.label ? "text-white" : "text-gray-500"}>{item.icon}</span>
                {item.label}
              </div>
              {item.badge && (
                <span className={`font-bold text-[10px] px-2 py-0.5 rounded-full ${
                  activeTab === item.label ? "bg-white text-black" : "bg-red-50 text-red-600"
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <Link href="/login" className="flex items-center gap-3 text-red-600 font-bold text-sm w-full px-3 py-2 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={18} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1">
            <h2 className="text-lg font-bold text-black hidden md:block">{activeTab}</h2>
            <div className="max-w-md w-full relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search globally..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm font-medium text-black placeholder:text-gray-400 outline-none focus:border-gray-300 focus:bg-white transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-black transition-colors">
              <Bell size={20} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
              AD
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 overflow-y-auto pb-24">
          {activeTab === 'Overview' && renderOverview()}
          {activeTab === 'Users' && renderUsers()}
          {activeTab === 'Partners' && renderPartners()}
          {activeTab === 'Services' && renderServices()}
          {activeTab === 'Bookings' && renderBookings()}
          {activeTab === 'Settings' && renderSettings()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
