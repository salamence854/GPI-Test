import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users, Coffee, Heart, GraduationCap, TrendingUp, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
  const benefits = [
    { title: "Phát triển chuyên môn", desc: "Tiếp cận các chương trình đào tạo và phát triển liên tục để thăng tiến trong sự nghiệp.", icon: <TrendingUp size={24} /> },
    { title: "Môi trường năng động", desc: "Làm việc trong không gian văn phòng hiện đại, cộng tác, thúc đẩy sự sáng tạo và đổi mới.", icon: <Coffee size={24} /> },
    { title: "Phúc lợi toàn diện", desc: "Gói lương cạnh tranh, bảo hiểm y tế và tiền thưởng dựa trên hiệu suất.", icon: <Heart size={24} /> },
    { title: "Cố vấn chuyên gia", desc: "Học hỏi từ các nhà lãnh đạo ngành và các chuyên gia giàu kinh nghiệm trong lĩnh vực bất động sản.", icon: <GraduationCap size={24} /> }
  ];

  const jobs = [
    { title: "Quản lý dự án cấp cao", department: "Xây dựng", location: "Hà Nội", type: "Toàn thời gian" },
    { title: "Chuyên viên kinh doanh bất động sản", department: "Kinh doanh & Tiếp thị", location: "TP.HCM", type: "Toàn thời gian" },
    { title: "Thiết kế kiến trúc", department: "Thiết kế", location: "Hà Nội", type: "Toàn thời gian" },
    { title: "Chuyên viên Tiếp thị kỹ thuật số", department: "Tiếp thị", location: "Hà Nội", type: "Toàn thời gian" },
    { title: "Đại diện dịch vụ khách hàng", department: "Vận hành", location: "TP.HCM", type: "Toàn thời gian" }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gpinvest-careers-header/1920/800" 
            alt="Careers at GP Invest" 
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Tuyển dụng</h1>
            <div className="w-20 h-1 bg-brand-red mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl">Gia nhập đội ngũ những người có tầm nhìn và giúp chúng tôi định hình tương lai của bất động sản tại Việt Nam.</p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Văn hóa của chúng tôi</h4>
                <h2 className="text-4xl font-serif font-bold text-white leading-tight">
                  Nơi tài năng hội tụ <br /> cùng cơ hội
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Tại GP Invest, chúng tôi tin rằng con người là tài sản lớn nhất của mình. Chúng tôi đã xây dựng một nền văn hóa coi trọng sự hợp tác, chính trực và nỗ lực không ngừng nghỉ để đạt được sự xuất sắc. Tại đây, bạn sẽ tìm thấy một môi trường thách thức bạn phát triển và đền đáp những đóng góp của bạn.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Chúng tôi không chỉ là một công ty bất động sản; chúng tôi là một cộng đồng các chuyên gia tận tâm tạo ra những biểu tượng trường tồn với thời gian.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-white">200+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Nhân viên</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-white">45%</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Lãnh đạo nữ</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-white">8+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Thâm niên trung bình</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/culture1/400/500" alt="Culture 1" className="rounded-sm shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/culture2/400/500" alt="Culture 2" className="rounded-sm shadow-lg mt-12" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Tại sao nên gia nhập cùng chúng tôi</h4>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Phúc lợi nhân viên</h2>
            <p className="text-gray-300">Chúng tôi đầu tư vào sự an lạc và thành công chuyên môn của đội ngũ nhân viên.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-brand-blue p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-b-4 border-transparent hover:border-brand-red">
                <div className="w-12 h-12 bg-brand-red/10 rounded-sm flex items-center justify-center text-brand-red mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-brand-blue-dark">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-brand-red font-semibold tracking-widest uppercase mb-2 text-sm">Cơ hội</h4>
              <h2 className="text-4xl font-serif font-bold text-white">Vị trí đang tuyển</h2>
              <div className="w-20 h-1 bg-brand-red mt-4"></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">Lọc theo:</span>
              <select className="bg-brand-blue border border-white/10 rounded-sm px-4 py-2 text-sm text-white focus:outline-none">
                <option>Tất cả các phòng ban</option>
                <option>Xây dựng</option>
                <option>Kinh doanh & Tiếp thị</option>
                <option>Thiết kế</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="group bg-brand-blue border-b-4 border-transparent p-6 md:p-8 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg hover:border-brand-red transition-all cursor-pointer"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-brand-red transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1"><Briefcase size={14} className="text-brand-red" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-brand-red" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} className="text-brand-red" /> {job.type}</span>
                  </div>
                </div>
                <button className="bg-brand-blue-dark text-white px-8 py-3 rounded-sm text-sm font-bold hover:bg-brand-red transition-all flex items-center justify-center gap-2 border border-white/10">
                  ỨNG TUYỂN NGAY <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Không thấy vị trí phù hợp? Gửi CV của bạn đến <span className="text-brand-red font-bold">hr@gpinvest.vn</span> để được xem xét trong tương lai.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-red py-20">
        <div className="container-custom text-center text-white space-y-8">
          <h2 className="text-4xl font-serif font-bold">Sẵn sàng xây dựng tương lai của bạn?</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Gia nhập công ty coi trọng chuyên môn của bạn và cung cấp nền tảng để bạn xuất sắc trong ngành bất động sản.
          </p>
          <button className="bg-brand-blue text-white px-12 py-4 rounded-sm font-bold hover:bg-opacity-90 transition-all shadow-xl">
            XEM TẤT CẢ CƠ HỘI
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
