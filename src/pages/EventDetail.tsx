import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Share2, Facebook, Linkedin, Link as LinkIcon, Phone, Mail, Clock, MapPin } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();

  // Mock data for the post
  const post = {
    title: "GIỮA LÀN SÓNG TÁI CẤU TRÚC, GP.INVEST KHẲNG ĐỊNH CHIẾN LƯỢC PHÁT TRIỂN ĐÔ THỊ BỀN VỮNG",
    category: "HOẠT ĐỘNG DOANH NGHIỆP",
    date: "18.02.2026",
    author: "ADMIN",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    lead: "Trong bối cảnh Chính phủ thúc đẩy thị trường bất động sản phát triển theo hướng an toàn và lành mạnh, yêu cầu đặt ra đối với các doanh nghiệp ngày càng rõ nét và khắt khe hơn. Chia sẻ với Diễn đàn Doanh nghiệp nhân dịp xuân Bính Ngọ 2026, ông Nguyễn Trí Dũng...",
    sections: [
      {
        id: "tai-dinh-nghia",
        title: "TÁI ĐỊNH NGHĨA GIÁ TRỊ CỐT LÕI CỦA BẤT ĐỘNG SẢN",
        content: "Trong bối cảnh Chính phủ thúc đẩy thị trường bất động sản phát triển theo hướng an toàn và lành mạnh, yêu cầu đặt ra đối với các doanh nghiệp ngày càng rõ nét và khắt khe hơn. Chia sẻ với Diễn đàn Doanh nghiệp nhân dịp xuân Bính Ngọ 2026, ông Nguyễn Trí Dũng – Phó Tổng Giám đốc GP.Invest – đã có những trao đổi thẳng thắn về xu thế phát triển bất động sản xanh và chiến lược dài hạn của doanh nghiệp."
      },
      {
        id: "tien-phong",
        title: "TIÊN PHONG THEO ĐUỔI CHỨNG CHỈ LEED FOR COMMUNITIES",
        content: "Evergreen Estate là dự án tiên phong theo đuổi chứng chỉ LEED for Communities tại Việt Nam và Đông Nam Á. Đây là hệ tiêu chuẩn đánh giá toàn diện một đô thị như một chỉnh thể, từ hiệu quả năng lượng, giao thông, sinh thái đến chất lượng sống của cư dân.\n\nTheo đại diện GP.Invest, thách thức lớn nhất khi áp dụng LEED for Communities không chỉ nằm ở chi phí đầu tư hay công nghệ, mà ở tư duy quy hoạch tổng thể ngay từ giai đoạn đầu. Doanh nghiệp đã chủ động hợp tác với các đơn vị tư vấn trong và ngoài nước, thực hiện nghiên cứu chuyên sâu về khí hậu, địa hình và sinh thái nhằm đảm bảo dự án đáp ứng các tiêu chuẩn khắt khe."
      },
      {
        id: "dau-tu-xanh",
        title: "ĐẦU TƯ XANH – GIÁ TRỊ DÀI HẠN CHO THỊ TRƯỜNG",
        content: "Việc theo đuổi tiêu chuẩn xanh khiến tổng mức đầu tư tăng thêm khoảng 7%. Tuy nhiên, GP.Invest cho rằng đây không phải là chi phí tăng thêm, mà là khoản đầu tư cho giá trị dài hạn. Các đô thị được quy hoạch bài bản, tiết kiệm năng lượng và thân thiện môi trường thường có chi phí vận hành thấp hơn, chất lượng sống cao hơn và khả năng gia tăng giá trị bền vững theo thời gian."
      },
      {
        id: "phat-trien-vi-con-nguoi",
        title: "PHÁT TRIỂN VÌ CON NGƯỜI VÀ TƯƠNG LAI BỀN VỮNG",
        content: "Từ hành trình gần 20 năm phát triển, GP.Invest khẳng định bất động sản xanh không phải là xu hướng nhất thời, mà là con đường tất yếu của thị trường trong dài hạn. Doanh nghiệp muốn phát triển bền vững cần tuân thủ pháp lý, đầu tư nghiêm túc vào chất lượng sản phẩm, minh bạch trong quản trị và có trách nhiệm với xã hội."
      }
    ]
  };

  return (
    <div className="bg-brand-blue-dark min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.heroImage} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/20 via-brand-blue-dark/60 to-brand-blue-dark"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight mb-8 max-w-5xl mx-auto">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold tracking-widest uppercase">
              <span className="border border-white/30 px-4 py-2 rounded-sm">{post.category}</span>
              <span className="border border-white/30 px-4 py-2 rounded-sm">{post.date}</span>
              <span className="border border-white/30 px-4 py-2 rounded-sm">{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl italic text-gray-300 leading-relaxed font-light">
              "{post.lead}"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="sticky top-32">
                <div className="bg-white/5 backdrop-blur-sm border-l-4 border-brand-red p-8 rounded-sm">
                  <div className="inline-block border border-white/30 px-4 py-1 text-[10px] font-bold tracking-widest uppercase mb-6">
                    NỘI DUNG
                  </div>
                  <nav className="space-y-4">
                    {post.sections.map((section) => (
                      <a 
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase leading-snug"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Social Share */}
                <div className="mt-8 flex flex-col gap-4">
                  <button className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm hover:bg-brand-red hover:border-brand-red transition-all">
                    <LinkIcon size={18} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm hover:bg-brand-red hover:border-brand-red transition-all">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm hover:bg-brand-red hover:border-brand-red transition-all">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </aside>

            {/* Content Body */}
            <main className="lg:col-span-8 space-y-16">
              {post.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-8 border-b border-white/10 pb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-300 leading-loose text-lg whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* Contact Box */}
              <div className="mt-24 bg-brand-blue p-12 rounded-sm border-t-4 border-brand-red">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-12 leading-tight">
                  CÔNG TY CỔ PHẦN ĐẦU TƯ<br />BẤT ĐỘNG SẢN TOÀN CẦU
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">ĐỊA CHỈ</div>
                      <p className="text-sm leading-relaxed">
                        Tầng 5, tòa Trường Thịnh – Tràng An Complex, số 01 phố Phùng Chí Kiên, phường Nghĩa Đô, quận Cầu Giấy, TP. Hà Nội, Việt Nam.
                      </p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">EMAIL</div>
                      <p className="text-sm">info@gpinvest.vn</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">SỐ ĐIỆN THOẠI</div>
                      <p className="text-sm">024 6288 3868</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">THỜI GIAN LÀM VIỆC</div>
                      <p className="text-sm">
                        8h00 - 17h00 hàng ngày.<br />
                        Nghỉ thứ 7, Chủ nhật
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
