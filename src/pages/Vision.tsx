import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Zap, Recycle, Globe2, BarChart3 } from 'lucide-react';

const Vision = () => {
  const strategies = [
    {
      title: "Kiến trúc xanh",
      desc: "Tích hợp thiên nhiên vào cuộc sống đô thị với các thiết kế tiết kiệm năng lượng và vật liệu bền vững.",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Công nghệ thông minh",
      desc: "Tận dụng AI và IoT để tạo ra những ngôi nhà thông minh tối ưu hóa mức tiêu thụ năng lượng và an ninh.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Kinh tế tuần hoàn",
      desc: "Triển khai các chương trình giảm thiểu chất thải và tái chế tại tất cả các công trường xây dựng và bất động sản được quản lý.",
      icon: <Recycle className="w-8 h-8" />
    },
    {
      title: "Trách nhiệm xã hội",
      desc: "Đầu tư vào cơ sở hạ tầng cộng đồng và hỗ trợ các sáng kiến giáo dục và y tế địa phương.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gpinvest-vision-header/1920/800" 
            alt="Vision & Strategy" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Tầm nhìn & Chiến lược</h1>
            <div className="w-20 h-1 bg-brand-red mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl">Xây dựng tương lai bền vững thông qua đổi mới, chính trực và trách nhiệm xã hội.</p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h4 className="text-brand-red font-semibold tracking-widest uppercase text-sm">Mục tiêu của chúng tôi</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              "Trở thành nhà phát triển bất động sản đáng tin cậy nhất, tạo ra những biểu tượng kiến trúc định nghĩa tương lai của cuộc sống đô thị."
            </h2>
            <p className="text-lg text-gray-400 italic">
              — Tuyên bố Tầm nhìn GP Invest
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Strategy */}
      <section className="section-padding bg-brand-blue-dark text-white overflow-hidden border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Bền vững</h4>
                <h2 className="text-4xl font-serif font-bold leading-tight">
                  Chiến lược Phát triển Bền vững <br /> 2025-2030
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tại GP Invest, bền vững không chỉ là một từ ngữ thời thượng; đó là cốt lõi trong mô hình kinh doanh của chúng tôi. Chúng tôi tin rằng giá trị lâu dài được tạo ra khi chúng ta cân bằng giữa tăng trưởng kinh tế với bảo vệ môi trường và tiến bộ xã hội.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <Globe2 className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-lg mb-1">Quản lý môi trường</h5>
                    <p className="text-sm text-gray-400">Giảm dấu chân carbon thông qua các chứng nhận công trình xanh (LEED, EDGE) và tích hợp năng lượng tái tạo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shrink-0">
                    <BarChart3 className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-lg mb-1">Khả năng phục hồi kinh tế</h5>
                    <p className="text-sm text-gray-400">Duy trì sự ổn định tài chính và mang lại lợi nhuận nhất quán cho các bên liên quan thông qua đầu tư thận trọng.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
              <img 
                src="https://picsum.photos/seed/gpinvest-strategy/800/800" 
                alt="Sustainable City" 
                className="relative z-10 rounded-sm shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Cách tiếp cận của chúng tôi</h4>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Các trụ cột chiến lược</h2>
            <p className="text-gray-300">Sự tăng trưởng của chúng tôi được xây dựng trên bốn trụ cột cơ bản đảm bảo sự xuất sắc trong mọi dự án.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((item, idx) => (
              <div key={idx} className="bg-brand-blue p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-red">
                <div className="text-brand-red mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="bg-brand-blue p-12 md:p-20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -mr-32 -mt-32"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Triển vọng tương lai</h2>
                <p className="text-gray-300">
                  Khi hướng tới thập kỷ tới, GP Invest sẵn sàng mở rộng sự hiện diện của mình khắp Đông Nam Á. Chúng tôi đang khám phá những biên giới mới trong phát triển thành phố thông minh và khách sạn cao cấp, luôn trung thành với các giá trị cốt lõi về chất lượng và sự chính trực.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                    Mở rộng sang các thị trường khu vực
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                    Tiên phong trong các dự án phát triển carbon ròng bằng không
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                    Chuyển đổi số các dịch vụ bất động sản
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/future1/400/400" alt="Future 1" className="rounded-sm shadow-md" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/future2/400/400" alt="Future 2" className="rounded-sm shadow-md mt-8" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
