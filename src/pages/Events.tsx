import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const categories = ['Tất cả', 'Tin tức doanh nghiệp', 'Ra mắt dự án', 'Sự kiện CSR', 'Giải thưởng'];

  const newsItems = [
    {
      id: 1,
      title: "GP Invest được vinh danh 'Top 10 Nhà phát triển Bất động sản uy tín 2024'",
      date: "15 tháng 3, 2024",
      category: "Giải thưởng",
      image: "https://picsum.photos/seed/news1/800/500",
      excerpt: "GP Invest một lần nữa được ghi nhận vì những đóng góp nổi bật cho ngành bất động sản và cam kết về chất lượng."
    },
    {
      id: 2,
      title: "Khai trương nhà mẫu dự án The Nine Tower",
      date: "28 tháng 2, 2024",
      category: "Ra mắt dự án",
      image: "https://picsum.photos/seed/news2/800/500",
      excerpt: "Hàng trăm khách hàng tiềm năng đã tham dự buổi khai trương nhà mẫu dự án căn hộ cao cấp mới nhất của chúng tôi tại Quận Cầu Giấy."
    },
    {
      id: 3,
      title: "GP Invest triển khai sáng kiến cộng đồng 'Sống Xanh'",
      date: "20 tháng 1, 2024",
      category: "Sự kiện CSR",
      image: "https://picsum.photos/seed/news3/800/500",
      excerpt: "Chương trình trách nhiệm xã hội mới của doanh nghiệp chúng tôi nhằm thúc đẩy thói quen sống bền vững trong cộng đồng cư dân."
    },
    {
      id: 4,
      title: "Ký kết hợp tác chiến lược với công ty kiến trúc toàn cầu",
      date: "12 tháng 1, 2024",
      category: "Tin tức doanh nghiệp",
      image: "https://picsum.photos/seed/news4/800/500",
      excerpt: "GP Invest tự hào thông báo về mối quan hệ hợp tác mới sẽ mang lại chuyên môn thiết kế đẳng cấp thế giới cho các dự án sắp tới của chúng tôi."
    },
    {
      id: 5,
      title: "Đạt cột mốc xây dựng tại Palm City Giai đoạn 2",
      date: "05 tháng 12, 2023",
      category: "Ra mắt dự án",
      image: "https://picsum.photos/seed/news5/800/500",
      excerpt: "Chúng tôi vui mừng thông báo rằng công tác kết cấu cho Palm City Giai đoạn 2 đã hoàn thành trước thời hạn."
    },
    {
      id: 6,
      title: "Giải chạy marathon từ thiện thường niên gây quỹ 50.000 USD cho các trường học địa phương",
      date: "18 tháng 11, 2023",
      category: "Sự kiện CSR",
      image: "https://picsum.photos/seed/news6/800/500",
      excerpt: "Đội ngũ GP Invest và các thành viên cộng đồng đã cùng nhau tham gia giải chạy thường niên để hỗ trợ giáo dục tại các khu vực khó khăn."
    }
  ];

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[40vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gpinvest-events-header/1920/600" 
            alt="News & Events" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue-dark/60"></div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Tin tức & Sự kiện</h1>
            <div className="w-20 h-1 bg-brand-red mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl">Cập nhật thông tin về các dự án mới nhất, tin tức công ty và các hoạt động cộng đồng của chúng tôi.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-brand-blue-dark border-b border-white/5 py-8 sticky top-[72px] z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-brand-red text-white shadow-md' 
                    : 'bg-brand-blue text-white hover:bg-brand-blue/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Tìm kiếm tin tức..." 
                className="w-full bg-brand-blue border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-400"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-blue rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-blue-dark/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Tag size={10} className="text-brand-red" /> {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <Calendar size={14} className="text-brand-red" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 line-clamp-2 hover:text-brand-red transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <button className="text-brand-red font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    ĐỌC THÊM <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg italic">Không tìm thấy tin tức nào trong danh mục này.</p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-sm font-bold text-white hover:bg-brand-red hover:text-white transition-all bg-brand-blue">1</button>
            <button className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-brand-red hover:text-white transition-all bg-brand-blue">2</button>
            <button className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-brand-red hover:text-white transition-all bg-brand-blue">3</button>
            <button className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-brand-red hover:text-white transition-all bg-brand-blue">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
