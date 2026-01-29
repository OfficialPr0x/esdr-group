import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { CONTACT_EMAIL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a question about a listing? Current tenant needing assistance? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Mail className="w-8 h-8 text-emerald-600 mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                <p className="text-slate-600 mb-2">For general inquiries and applications.</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 font-medium hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <MessageCircle className="w-8 h-8 text-emerald-600 mt-1 mr-4" />
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Chat with Assistant</h3>
                <p className="text-slate-600 mb-2">
                  Use the bubble in the bottom right for instant answers about properties and availability.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="font-bold text-emerald-900 text-lg mb-2">Current Tenants</h3>
              <p className="text-emerald-800 text-sm mb-4">
                For urgent maintenance emergencies, please refer to the emergency contact number provided in your lease welcome package.
              </p>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <select className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
                   <option>General Inquiry</option>
                   <option>Scheduling a Viewing</option>
                   <option>Maintenance (Non-Urgent)</option>
                   <option>Partnership/Investment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"></textarea>
              </div>
              <Button fullWidth>Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};