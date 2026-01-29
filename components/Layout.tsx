import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, Info, Mail } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { Button } from './Button';
import { ChatWidget } from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Building2 },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="h-10 w-10 bg-emerald-700 rounded-xl flex items-center justify-center text-white font-bold transition-transform group-hover:rotate-12 shadow-lg shadow-emerald-900/20">E</div>
                <div className="flex flex-col">
                  <span className={`text-xl font-black tracking-tighter transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}`}>ESDR GROUP</span>
                  {/* Small tag line below brand if space permits */}
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${location.pathname === link.path
                    ? 'text-emerald-700 bg-emerald-50/50'
                    : isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-slate-200/20">
                <Link to="/apply">
                  <Button size="sm" className="shadow-lg shadow-emerald-900/10">Apply Now</Button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl animate-fade-in">
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-4 px-4 py-4 rounded-xl text-base font-bold transition-all ${location.pathname === link.path
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  <link.icon size={20} className={location.pathname === link.path ? 'text-emerald-600' : 'text-slate-400'} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-6">
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth size="lg">Apply to Rent</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
            <div className="md:col-span-5">
              <div className="flex items-center space-x-2 text-white mb-6">
                <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-sm">E</div>
                <span className="text-xl font-black tracking-tighter">ESDR GROUP</span>
              </div>
              <p className="max-w-sm text-slate-500 text-sm leading-relaxed mb-8">
                The premier real estate investment group in Eastern Ontario. We own and operate residential and commercial properties with a focus on trust, quality, and community building.
              </p>
              <div className="flex space-x-4">
                {/* Social icons could go here */}
                <div className="h-10 w-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-colors cursor-pointer group">
                  <Mail size={18} className="group-hover:text-white" />
                </div>
                <div className="h-10 w-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-colors cursor-pointer group">
                  <Building2 size={18} className="group-hover:text-white" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="hover:text-emerald-500 transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Portfolio</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Rentals</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/properties" className="hover:text-emerald-500 transition-colors">Residential</Link></li>
                <li><Link to="/properties" className="hover:text-emerald-500 transition-colors">Multi-Unit</Link></li>
                <li><Link to="/apply" className="hover:text-emerald-500 transition-colors">Tenant App</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <span className="text-white font-medium mr-2">Email:</span>
                  <a href="mailto:rentals@esdrgroup.ca" className="hover:text-white">rentals@esdrgroup.ca</a>
                </li>
                <li>Eastern Ontario, Canada</li>
                <li>Mon-Fri: 9am - 5pm</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-600">
            <p>&copy; {new Date().getFullYear()} ESDR GROUP. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};