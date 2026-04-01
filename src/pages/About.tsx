import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, History, Target, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2007", event: "GP Invest chính thức được thành lập tại Hà Nội." },
    { year: "2010", event: "Ra mắt dự án nhà ở lớn đầu tiên tại Quận Đống Đa." },
    { year: "2014", event: "Hoàn thành Trang An Complex, một dự án khu phức hợp biểu tượng." },
    { year: "2018", event: "Mở rộng sang thị trường miền Nam với các dự án tại TP. Hồ Chí Minh." },
    { year: "2021", event: "Được vinh danh 'Top 10 Nhà phát triển Bất động sản uy tín' tại Việt Nam." },
    { year: "2024", event: "Triển khai các sáng kiến công trình xanh bền vững trên tất cả các dự án mới." }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gpinvest-about-header/1920/800" 
            alt="About GP Invest" 
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Giới thiệu</h1>
            <div className="w-20 h-1 bg-brand-red mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl">Khám phá hành trình, giá trị và cam kết của chúng tôi đối với sự xuất sắc trong kiến trúc.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h4 className="text-brand-red font-semibold tracking-widest uppercase text-sm">Tổng quan công ty</h4>
              <h2 className="text-4xl font-serif font-bold text-white leading-tight">
                Nhà lãnh đạo tầm nhìn trong <br /> phát triển bất động sản
              </h2>
              <p className="text-gray-300 leading-relaxed">
                GP Invest (Công ty Cổ phần Đầu tư Bất động sản Toàn cầu) là nhà phát triển bất động sản hàng đầu tại Việt Nam. Kể từ khi thành lập, chúng tôi đã được thúc đẩy bởi một sứ mệnh duy nhất: tạo ra những không gian sống không chỉ là những công trình, mà là những tổ ấm truyền cảm hứng và bền vững.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Với danh mục đầu tư bao gồm các tòa tháp căn hộ cao cấp, khu phức hợp thương mại và khu đô thị, chúng tôi mang đến cái nhìn tỉ mỉ đến từng chi tiết và niềm đam mê đổi mới cho mọi dự án. Các dự án của chúng tôi được đặc trưng bởi vị trí chiến lược, tiện ích đẳng cấp thế giới và cam kết tăng trưởng bền vững.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  <span className="font-semibold text-white">Chất lượng hàng đầu</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  <span className="font-semibold text-white">Lấy khách hàng làm trung tâm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  <span className="font-semibold text-white">Đổi mới sáng tạo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  <span className="font-semibold text-white">Bền vững</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/gpinvest-overview/800/600" 
                alt="GP Invest Team" 
                className="rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-red p-10 text-white hidden md:block">
                <div className="text-5xl font-serif font-bold mb-1">15+</div>
                <div className="text-sm uppercase tracking-widest font-bold">Năm xuất sắc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Nền tảng của chúng tôi</h4>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Giá trị cốt lõi</h2>
            <p className="text-gray-300">Những nguyên tắc này dẫn dắt mọi quyết định chúng tôi đưa ra và mọi dự án chúng tôi xây dựng.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-blue p-10 rounded-sm shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red transition-colors">
                <History className="text-brand-red group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Chính trực</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Chúng tôi xây dựng niềm tin thông qua sự minh bạch, trung thực và các hoạt động kinh doanh đạo đức trong mọi việc chúng tôi làm.</p>
            </div>
            <div className="bg-brand-blue p-10 rounded-sm shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red transition-colors">
                <Target className="text-brand-red group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Xuất sắc</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Chúng tôi nỗ lực đạt được các tiêu chuẩn cao nhất về chất lượng và đổi mới kiến trúc trong tất cả các dự án phát triển của mình.</p>
            </div>
            <div className="bg-brand-blue p-10 rounded-sm shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red transition-colors">
                <Heart className="text-brand-red group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Cộng đồng</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Chúng tôi tận tâm tạo ra tác động xã hội tích cực và nâng cao chất lượng cuộc sống cho cư dân của mình.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Hành trình của chúng tôi</h4>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Các mốc son</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((item, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`bg-brand-blue p-8 rounded-sm border border-white/5 ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <span className="text-brand-red font-serif font-bold text-2xl mb-2 block">{item.year}</span>
                      <p className="text-gray-300 text-sm">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-red rounded-full relative z-10 my-4 md:my-0">
                    <div className="absolute inset-0 bg-brand-red rounded-full animate-ping opacity-20"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
