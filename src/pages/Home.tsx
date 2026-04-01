import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Building2, Users, Award, Globe, ChevronRight, ChevronLeft, Phone, Mail, MessageSquare, Building, Key, Coins, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from '../components/Logo';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNewsTab, setActiveNewsTab] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const newsTabs = ["Hoạt động doanh nghiệp", "Triển khai dự án", "Truyền thông nội bộ"];

  const newsData = [
    [
      {
        category: "HOẠT ĐỘNG DOANH NGHIỆP",
        date: "18 Th2, 2026",
        title: "GIỮA LÀN SÓNG TÁI CẤU TRÚC, GP.INVEST KHẲNG ĐỊNH CHIẾN LƯỢC PHÁT TRIỂN ĐÔ THỊ BỀN VỮNG",
        description: "Trong bối cảnh Chính phủ thúc đẩy thị trường bất động sản phát triển theo hướng an toàn và lành mạnh, yêu cầu đặt ra đối với các doanh nghiệp ngày càng rõ nét và khắt khe hơn. Chia sẻ với Diễn đàn Doanh nghiệp nhân dịp xuân Bính Ngọ 2026, ông Nguyễn Trí Dũ...",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
      },
      {
        category: "HOẠT ĐỘNG DOANH NGHIỆP",
        date: "10 Th2, 2026",
        title: "GP.INVEST VINH DỰ NHẬN GIẢI THƯỞNG DOANH NGHIỆP BẤT ĐỘNG SẢN TIÊU BIỂU 2025",
        description: "Với những đóng góp tích cực cho thị trường và cam kết về chất lượng sản phẩm, GP.Invest đã vượt qua nhiều tiêu chí khắt khe để được vinh danh tại lễ trao giải Doanh nghiệp Bất động sản tiêu biểu năm 2025 diễn ra tại Hà Nội...",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
      }
    ],
    [
      {
        category: "TRIỂN KHAI DỰ ÁN",
        date: "15 Th2, 2026",
        title: "TIẾN ĐỘ THI CÔNG DỰ ÁN THE NINE TOWER THÁNG 2/2026: HOÀN THIỆN NHỮNG KHÂU CUỐI CÙNG",
        description: "Dự án The Nine Tower đang bước vào giai đoạn nước rút với sự tập trung cao độ từ đội ngũ kỹ sư và công nhân. Hiện tại, phần cảnh quan và nội thất sảnh đón khách đang được hoàn thiện tỉ mỉ để chuẩn bị bàn giao cho khách hàng...",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
      },
      {
        category: "TRIỂN KHAI DỰ ÁN",
        date: "05 Th2, 2026",
        title: "GP.INVEST CHÍNH THỨC KHỞI CÔNG DỰ ÁN KHU ĐÔ THỊ MỚI TẠI PHÚ THỌ",
        description: "Lễ khởi công dự án Khu đô thị mới tại Việt Trì, Phú Thọ đã diễn ra thành công tốt đẹp với sự tham dự của đại diện lãnh đạo địa phương và ban lãnh đạo GP.Invest. Dự án hứa hẹn sẽ mang đến một diện mạo mới cho khu vực...",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
      }
    ],
    [
      {
        category: "TRUYỀN THÔNG NỘI BỘ",
        date: "23 Th2, 2026",
        title: "KHAI XUÂN BÍNH NGỌ 2026 – GP.INVEST TĂNG TỐC BỨT PHÁ, SẴN SÀNG CHINH PHỤC MỤC TIÊU MỚI",
        description: "Sau những ngày Tết đoàn viên ấm áp, GP.Invest chính thức khai xuân Bính Ngọ 2026 trong không khí rộn ràng, phấn khởi và tràn đầy năng lượng. Buổi khai xuân đầu năm không chỉ là hoạt động thường niên mang ý nghĩa khởi động cho một chu kỳ phát tr...",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
      },
      {
        category: "TRUYỀN THÔNG NỘI BỘ",
        date: "12 Th2, 2026",
        title: "GIẢI BÓNG ĐÁ NAM GP.INVEST CUP 2026: TINH THẦN ĐỒNG ĐỘI VÀ SỨC MẠNH TẬP THỂ",
        description: "Giải bóng đá thường niên GP.Invest Cup đã chính thức khai mạc với sự tham gia của 8 đội bóng đến từ các phòng ban và công ty thành viên. Đây là sân chơi bổ ích giúp cán bộ nhân viên rèn luyện sức khỏe và thắt chặt tình đoàn kết...",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
      }
    ]
  ];

  const slides = [
    {
      // Matches Image 1: Low angle glass building
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
      subtitle: "NHÀ PHÁT TRIỂN BẤT ĐỘNG SẢN CHẤT LƯỢNG HÀNG ĐẦU VIỆT NAM"
    },
    {
      // Matches Image 2: White residential towers
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070",
      subtitle: "NHÀ PHÁT TRIỂN BẤT ĐỘNG SẢN CHẤT LƯỢNG HÀNG ĐẦU VIỆT NAM"
    },
    {
      // Matches Image 3: Blue glass skyscraper in city
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2070",
      subtitle: "NHÀ PHÁT TRIỂN BẤT ĐỘNG SẢN CHẤT LƯỢNG HÀNG ĐẦU VIỆT NAM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const projects = [
    {
      title: "PALM MANOR",
      location: "Việt Trì, Phú Thọ",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070",
      category: "Khu đô thị",
      description: "Palm Manor là dự án khu đô thị kiểu mẫu đầu tiên tại Việt Trì, Phú Thọ, mang đến không gian sống hiện đại, tiện nghi và đẳng cấp cho cư dân."
    },
    {
      title: "EVERGREEN ESTATE",
      location: "Bắc Giang",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
      category: "Khu đô thị",
      description: "Tận dụng tối đa địa hình đồi núi tự nhiên, Evergreen Estate kiến tạo một không gian sống độc đáo, hài hòa với thiên nhiên và đầy cảm hứng, hình thành một tổng thể đô thị kiến trúc đặc sắc. Đặc biệt, Dự án là công trình đầu tiên tại Việt Nam và khu vực Đông Nam Á theo đuổi chứng chỉ LEED for Communities (LfC) – hệ [...]"
    },
    {
      title: "ECOLIFE",
      location: "Hà Nội",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2070",
      category: "Căn hộ cao cấp",
      description: "EcoLife mang đến phong cách sống xanh giữa lòng thủ đô, với thiết kế thông minh và tiện ích vượt trội, thân thiện với môi trường."
    },
    {
      title: "CỤM CÔNG NGHIỆP THÁI TÂN",
      location: "Hải Dương",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
      category: "Bất động sản công nghiệp",
      description: "Cụm công nghiệp Thái Tân là điểm đến lý tưởng cho các nhà đầu tư với hạ tầng đồng bộ, vị trí giao thông thuận tiện và chính sách ưu đãi hấp dẫn."
    },
    {
      title: "TRÀNG AN COMPLEX",
      location: "Cầu Giấy, Hà Nội",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2070",
      category: "Khu phức hợp",
      description: "Tràng An Complex là tổ hợp căn hộ cao cấp, văn phòng và trung tâm thương mại hiện đại, tọa lạc tại vị trí đắc địa của quận Cầu Giấy."
    },
    {
      title: "Nam Đô Complex",
      location: "Hoàng Mai, Hà Nội",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
      category: "Khu phức hợp",
      description: "Nam Đô Complex mang đến không gian sống tiện nghi cho cư dân với đầy đủ các dịch vụ tiện ích, trường học và khu vui chơi giải trí."
    },
    {
      title: "Minori Village",
      location: "Hai Bà Trưng, Hà Nội",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070",
      category: "Biệt thự & Liền kề",
      description: "Minori Village lấy cảm hứng từ kiến trúc Nhật Bản, mang đến không gian sống thanh bình, tinh tế và sang trọng giữa lòng Hà Nội."
    }
  ];

  const stats = [
    { label: "Năm kinh nghiệm", value: "15+", icon: <Award className="w-6 h-6" /> },
    { label: "Dự án hoàn thành", value: "20+", icon: <Building2 className="w-6 h-6" /> },
    { label: "Gia đình hạnh phúc", value: "5000+", icon: <Users className="w-6 h-6" /> },
    { label: "Vị trí chiến lược", value: "5+", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="GP Invest Development" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </AnimatePresence>
        
        {/* Red Graphic Overlay (Ribbon Fold Element) */}
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-[60%] z-10 pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-full w-full relative"
          >
            <svg className="h-full w-full" viewBox="0 0 600 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="redRibbonFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#800d11" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#800d11" stopOpacity="0" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                  <feOffset dx="5" dy="5" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* Top Solid Red Part */}
              <path 
                d="M150 100 L250 100 L250 350 L50 450 L150 450 Z" 
                fill="#ed1c24" 
                filter="url(#shadow)"
              />
              
              {/* Bottom Fading Part */}
              <path 
                d="M50 450 L150 450 L250 550 L250 750 L50 550 Z" 
                fill="url(#redRibbonFade)" 
              />
              
              {/* Fold Shadow Detail */}
              <path 
                d="M150 450 L50 450 L50 550 Z" 
                fill="#4a0408" 
                fillOpacity="0.8"
              />
            </svg>
          </motion.div>
        </div>

        <div className="container-custom relative z-20 text-white h-full flex items-center justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-left"
            >
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase leading-[1.05] drop-shadow-2xl tracking-tight">
                  <span className="block">NHÀ PHÁT TRIỂN</span>
                  <span className="block">BẤT ĐỘNG SẢN</span>
                  <span className="block">CHẤT LƯỢNG</span>
                  <span className="block">HÀNG ĐẦU</span>
                  <span className="block">VIỆT NAM</span>
                </h1>
              </div>
              
              <div className="mt-8">
                <button className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-sm overflow-hidden group hover:bg-white/20 transition-all shadow-xl">
                  <span className="px-10 py-4 text-sm font-bold text-white uppercase tracking-widest">Tìm hiểu nhanh</span>
                  <div className="bg-brand-red p-4 group-hover:bg-brand-red/80 transition-colors">
                    <ChevronRight size={24} className="text-white" />
                  </div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Bottom Progress Bars */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="container-custom flex space-x-4">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "h-1 flex-1 transition-all duration-500",
                  idx === currentSlide ? "bg-white" : "bg-white/30"
                )}
              ></div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 right-12 z-20 flex space-x-0.5">
          <button 
            onClick={prevSlide}
            className="bg-brand-red p-4 hover:bg-brand-red/80 transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-brand-red p-4 hover:bg-brand-red/80 transition-colors"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-4">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-brand-blue-dark">
            <Phone size={20} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-brand-blue-dark">
            <Mail size={20} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-brand-blue-dark">
            <MessageSquare size={20} />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-blue-dark py-12 border-b border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="text-brand-red mb-3">{stat.icon}</div>
                <div className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-brand-blue-dark overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full z-0"></div>
              <img 
                src="https://picsum.photos/seed/gpinvest-about/800/1000" 
                alt="GP Invest Office" 
                className="relative z-10 w-full rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 text-white z-20 max-w-xs hidden md:block">
                <p className="font-serif italic text-xl">"Sự xuất sắc không phải là một hành động, mà là một thói quen."</p>
                <p className="text-brand-red font-bold mt-4 text-sm">— Ban lãnh đạo GP Invest</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Câu chuyện của chúng tôi</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                  Di sản của sự xuất sắc <br /> trong kiến trúc
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Được thành lập với tầm nhìn thay đổi cảnh quan đô thị Việt Nam, GP Invest đã liên tục mang đến những dự án kết hợp giữa thẩm mỹ hiện đại và không gian sống tiện nghi. Cam kết về chất lượng và sự chính trực đã giúp chúng tôi trở thành cái tên đáng tin cậy trong lĩnh vực bất động sản.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="font-serif font-bold text-white text-lg">Sứ mệnh</h5>
                  <p className="text-sm text-gray-400">Tạo ra giá trị bền vững cho khách hàng và cộng đồng thông qua các giải pháp bất động sản sáng tạo.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-serif font-bold text-white text-lg">Chính trực</h5>
                  <p className="text-sm text-gray-400">Chúng tôi hoạt động với sự minh bạch và trung thực trong mọi tương tác và mọi dự án chúng tôi thực hiện.</p>
                </div>
              </div>
              <Link to="/about" className="inline-block bg-brand-red text-white px-8 py-4 rounded-sm font-bold hover:bg-opacity-90 transition-all">
                TÌM HIỂU THÊM VỀ CHÚNG TÔI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="section-padding bg-brand-blue-dark relative overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/30 rounded-full blur-[150px] z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="mb-20">
            <h2 className="text-white text-sm font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-4 inline-block">
              Lĩnh vực hoạt động
            </h2>
          </div>

          <div className="relative py-20">
            {/* Center Logo - Highly Prominent */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white font-bold text-[12vw] md:text-[10vw] lg:text-[150px] tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] select-none"
              >
                GP.INVEST
              </motion.h2>
            </div>

            {/* Cards Grid with Staggered Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-48 gap-y-12 md:gap-y-32 relative z-10 max-w-6xl mx-auto">
              {/* Card 1: Phát triển Bất động sản */}
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 74, 153, 0.6)" }}
                className="bg-brand-blue/40 backdrop-blur-md p-10 border border-white/10 relative group cursor-pointer md:-translate-x-8 md:-translate-y-8 overflow-hidden"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Phát triển</p>
                    <h3 className="text-xl font-bold">Bất động sản</h3>
                  </div>
                  <ArrowRight className="text-white/50 -rotate-45 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex justify-start">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <path d="M32 4L8 18V46L32 60L56 46V18L32 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M32 16L18 24V40L32 48L46 40V24L32 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M32 24L26 28V36L32 40L38 36V28L32 24Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Red Glow Effect on Hover - Intensified */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-brand-red/90 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Card 2: Kinh doanh Cho thuê mặt bằng */}
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 74, 153, 0.6)" }}
                className="bg-brand-blue/40 backdrop-blur-md p-10 border border-white/10 relative group cursor-pointer md:translate-x-8 md:-translate-y-8 overflow-hidden"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Kinh doanh</p>
                    <h3 className="text-xl font-bold">Cho thuê mặt bằng</h3>
                  </div>
                  <ArrowRight className="text-white/50 -rotate-45 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex justify-end">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <rect x="12" y="8" width="40" height="48" stroke="currentColor" strokeWidth="2"/>
                    <rect x="20" y="16" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="38" y="16" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="20" y="28" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="38" y="28" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="20" y="40" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="38" y="40" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                {/* Red Glow Effect on Hover - Intensified */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-brand-red/90 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Card 3: Dịch vụ Quản lý vận hành */}
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 74, 153, 0.6)" }}
                className="bg-brand-blue/40 backdrop-blur-md p-10 border border-white/10 relative group cursor-pointer md:-translate-x-8 md:translate-y-8 overflow-hidden"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Dịch vụ</p>
                    <h3 className="text-xl font-bold">Quản lý vận hành</h3>
                  </div>
                  <ArrowRight className="text-white/50 -rotate-45 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex justify-start">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <circle cx="32" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 32V52M32 52H40M32 44H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M26 20H38M32 14V26" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
                {/* Red Glow Effect on Hover - Intensified */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-brand-red/90 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Card 4: Hệ sinh thái Đa tiện ích */}
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 74, 153, 0.6)" }}
                className="bg-brand-blue/40 backdrop-blur-md p-10 border border-white/10 relative group cursor-pointer md:translate-x-8 md:translate-y-8 overflow-hidden"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Hệ sinh thái</p>
                    <h3 className="text-xl font-bold">Đa tiện ích</h3>
                  </div>
                  <ArrowRight className="text-white/50 -rotate-45 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex justify-end">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <circle cx="44" cy="44" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M44 38V50M38 44H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 20H26M20 14V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M32 32L32 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                {/* Red Glow Effect on Hover - Intensified */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-brand-red/90 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      <section className="section-padding bg-brand-blue-dark relative overflow-hidden">
        {/* Background blurred image for atmosphere */}
        <div className="absolute inset-0 z-0 opacity-20 blur-3xl">
          <img 
            src={projects[activeProjectIndex].image} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Danh mục dự án</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Dự án tiêu biểu</h2>
              <div className="w-20 h-1 bg-brand-red mt-4"></div>
            </div>
            <button className="text-white font-bold flex items-center gap-2 hover:text-brand-red transition-colors">
              XEM TẤT CẢ DỰ ÁN <ArrowRight size={18} />
            </button>
          </div>

          {/* Main Featured Content Box */}
          <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
            {/* Left: Project Details */}
            <div className="w-full md:w-[40%] p-12 flex flex-col justify-center">
              <h4 className="text-brand-blue-dark font-bold tracking-widest uppercase mb-6 text-xs">DỰ ÁN TIÊU BIỂU</h4>
              <motion.h3 
                key={`title-${activeProjectIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-serif font-bold text-brand-blue-dark mb-2"
              >
                {projects[activeProjectIndex].title}
              </motion.h3>
              <motion.p 
                key={`loc-${activeProjectIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-brand-red font-bold text-sm mb-6 flex items-center gap-1 uppercase tracking-wider"
              >
                <MapPin size={14} /> {projects[activeProjectIndex].location}
              </motion.p>
              <motion.p 
                key={`desc-${activeProjectIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 leading-relaxed mb-10"
              >
                {projects[activeProjectIndex].description}
              </motion.p>
              <Link to="/projects" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Xem thêm <ArrowRight size={18} className="-rotate-45" />
              </Link>
            </div>

            {/* Right: Project Image */}
            <div className="w-full md:w-[60%] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeProjectIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  src={projects[activeProjectIndex].image} 
                  alt={projects[activeProjectIndex].title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnail Slider Controls */}
          <div className="mt-12 relative">
            <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
              <button 
                onClick={() => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-sm text-white transition-colors flex-shrink-0"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-4">
                {projects.map((project, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveProjectIndex(idx)}
                    className="flex-shrink-0 group"
                  >
                    <div className={cn(
                      "w-48 h-28 rounded-sm overflow-hidden border-2 transition-all duration-300",
                      activeProjectIndex === idx ? "border-brand-red scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    )}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className={cn(
                      "mt-2 text-[10px] font-bold uppercase tracking-wider text-center transition-colors",
                      activeProjectIndex === idx ? "text-white" : "text-gray-500"
                    )}>
                      {project.title}
                    </p>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setActiveProjectIndex((prev) => (prev + 1) % projects.length)}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-sm text-white transition-colors flex-shrink-0"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="section-padding bg-brand-blue-dark relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-brand-red/20 to-transparent -rotate-12 transform translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Tin tức sự kiện</h2>
            <Link to="/events" className="flex items-center bg-white/5 backdrop-blur-md border border-white/20 rounded-sm overflow-hidden group hover:bg-white/10 transition-all">
              <span className="px-6 py-3 text-xs font-bold text-white uppercase tracking-widest">Tìm hiểu thêm</span>
              <div className="bg-brand-red p-3 group-hover:bg-brand-red/80 transition-colors">
                <ChevronRight size={18} className="text-white" />
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            {newsTabs.map((tab, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveNewsTab(idx)}
                className={cn(
                  "px-6 py-2 border rounded-sm text-xs font-bold uppercase tracking-widest transition-all",
                  idx === activeNewsTab ? "bg-white text-brand-blue-dark border-white" : "text-white border-white/30 hover:border-white"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeNewsTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:col-span-2"
              >
                {newsData[activeNewsTab].map((news, idx) => (
                  <Link to={`/events/${activeNewsTab}-${idx}`} key={idx} className="group flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">{news.category}</span>
                        <span className="text-[10px] text-gray-500">{news.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-red transition-colors line-clamp-3 uppercase">
                        {news.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {news.description}
                      </p>
                    </div>
                    <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-sm">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-16 flex justify-center items-center space-x-4 text-sm font-bold text-gray-500">
            <span className="text-white border-b-2 border-brand-red pb-1">1</span>
            <button className="hover:text-white transition-colors">2</button>
            <button className="hover:text-white transition-colors">3</button>
            <span>...</span>
            <button className="hover:text-white transition-colors">21</button>
            <button className="hover:text-white transition-colors uppercase tracking-widest ml-4">Sau</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-blue-dark py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif font-bold text-white">Cập nhật thông tin cùng GP Invest</h2>
            <p className="text-gray-300">Đăng ký nhận bản tin của chúng tôi để nhận tin tức mới nhất, cập nhật dự án và các ưu đãi độc quyền.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Địa chỉ email của bạn" 
                className="flex-1 bg-white/5 border border-white/10 rounded-sm px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red text-white px-10 py-4 rounded-sm font-bold hover:bg-opacity-90 transition-all">
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const MapPin = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default Home;
