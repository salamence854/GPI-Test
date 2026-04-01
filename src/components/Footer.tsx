import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/">
              <Logo className="h-20 w-auto" light={true} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              GP Invest là nhà phát triển bất động sản hàng đầu tại Việt Nam, cam kết kiến tạo những không gian sống bền vững và các biểu tượng kiến trúc chất lượng cao.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-red">Liên kết nhanh</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/vision" className="hover:text-white transition-colors">Tầm nhìn & Chiến lược</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Tin tức & Sự kiện</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Tuyển dụng</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-red">Dự án của chúng tôi</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">The Nine Tower</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trang An Complex</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GP Invest Building</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Minh Khai Project</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Palm City</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-red">Liên hệ với chúng tôi</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span>170 La Thành, Quận Đống Đa, Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span>+84 (24) 3514 9032</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span>info@gpinvest.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} GP Invest. Bảo lưu mọi quyền. Được thiết kế với sự xuất sắc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
