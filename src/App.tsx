import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Rocket, 
  Code, 
  Gamepad2, 
  MousePointer2, 
  CheckCircle2, 
  Star, 
  Send,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  User
} from "lucide-react";

const CourseCard = ({ icon: Icon, title, description, level, color }: { icon: any, title: string, description: string, level: string, color: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
  >
    <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">{level}</span>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-emerald-600 transition-colors">
      Xem chi tiết <ChevronRight className="w-4 h-4" />
    </button>
  </motion.div>
);

const TestimonialCard = ({ name, role, content, image }: { name: string, role: string, content: string, image: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-emerald-50 p-8 rounded-3xl relative"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
    </div>
    <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{content}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900">STEAM<span className="text-emerald-600">ACADEMY</span></span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#courses" className="text-gray-600 hover:text-emerald-600 transition-colors">Khóa học</a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">Cảm nhận</a>
            <a href="#register" className="text-gray-600 hover:text-emerald-600 transition-colors">Liên hệ</a>
            <a href="#register" className="px-6 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
              Đăng ký ngay
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
          >
            <a href="#courses" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Khóa học</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Cảm nhận</a>
            <a href="#register" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Liên hệ</a>
            <a href="#register" onClick={() => setIsMenuOpen(false)} className="px-6 py-3 bg-emerald-600 text-white rounded-xl text-center font-bold">
              Đăng ký ngay
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px]" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6">
              🚀 Khai phá tiềm năng công nghệ
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              Hành trình trở thành <br />
              <span className="text-emerald-600">Nhà sáng chế nhí</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Chương trình giáo dục STEAM chuẩn quốc tế giúp trẻ phát triển tư duy logic, sáng tạo và làm chủ công nghệ tương lai.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#register" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-2">
                Đăng ký học thử <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/student${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">Hơn 2,000+ học viên đã tham gia</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                alt="STEAM Learning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-1">
                <CheckCircle2 className="w-5 h-5" /> 100% Thực hành
              </div>
              <p className="text-xs text-gray-500 leading-tight">Học viên được trực tiếp xây dựng dự án từ buổi đầu tiên.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Lộ trình học tập đa dạng</h2>
            <p className="text-gray-600">Chúng tôi thiết kế các khóa học phù hợp với từng độ tuổi và sở thích của trẻ.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard 
              icon={MousePointer2}
              title="Lập trình Scratch"
              description="Làm quen với tư duy lập trình thông qua kéo thả khối lệnh sinh động. Phù hợp cho trẻ từ 7-10 tuổi."
              level="Cơ bản"
              color="bg-orange-500"
            />
            <CourseCard 
              icon={Code}
              title="Phát triển Web"
              description="Xây dựng trang web cá nhân với HTML, CSS và JavaScript. Khám phá thế giới Internet rộng lớn."
              level="Nâng cao"
              color="bg-blue-500"
            />
            <CourseCard 
              icon={Gamepad2}
              title="Lập trình Game"
              description="Tự tay thiết kế và lập trình các trò chơi 2D/3D hấp dẫn. Biến ý tưởng thành hiện thực."
              level="Chuyên sâu"
              color="bg-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Phụ huynh và học viên nói gì về chúng tôi?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Sự tiến bộ của các em là niềm tự hào và động lực lớn nhất để chúng tôi không ngừng hoàn thiện.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">98%</div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Hài lòng</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">5,000+</div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Dự án hoàn thành</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <TestimonialCard 
                name="Chị Minh Anh"
                role="Phụ huynh bé Gia Bảo (9 tuổi)"
                content="Bé nhà mình từ lúc học Scratch trở nên tự tin hẳn. Bé luôn hào hứng khoe những trò chơi nhỏ tự tay làm được."
                image="https://picsum.photos/seed/parent1/100/100"
              />
              <TestimonialCard 
                name="Anh Hoàng Nam"
                role="Phụ huynh bé Thùy Chi (12 tuổi)"
                content="Chương trình học rất thực tế, các thầy cô nhiệt tình. Con tôi đã có thể tự thiết kế được trang web giới thiệu bản thân."
                image="https://picsum.photos/seed/parent2/100/100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-24 px-6 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Đăng ký nhận tư vấn lộ trình học tập</h2>
            <p className="text-emerald-50 text-xl mb-10">
              Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ để tư vấn khóa học phù hợp nhất với năng khiếu của bé.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-emerald-50">
                <CheckCircle2 className="w-6 h-6" /> Kiểm tra năng lực miễn phí
              </li>
              <li className="flex items-center gap-3 text-emerald-50">
                <CheckCircle2 className="w-6 h-6" /> Học thử 1 buổi không mất phí
              </li>
              <li className="flex items-center gap-3 text-emerald-50">
                <CheckCircle2 className="w-6 h-6" /> Giảm ngay 20% học phí khóa đầu tiên
              </li>
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký thành công!</h3>
                <p className="text-gray-600">Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ tới.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên phụ huynh</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn A" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      required
                      type="email" 
                      placeholder="example@gmail.com" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      required
                      type="tel" 
                      placeholder="0901 234 567" 
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <button type="submit" className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-2 group">
                  Gửi thông tin ngay <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400">Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Rocket className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-black tracking-tighter">STEAM<span className="text-emerald-500">ACADEMY</span></span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8">
                Khơi nguồn đam mê công nghệ và sáng tạo cho thế hệ trẻ Việt Nam thông qua giáo dục STEAM hiện đại.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-emerald-500 uppercase tracking-widest text-xs">Khám phá</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Khóa học Scratch</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Khóa học Web</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Khóa học Game</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-emerald-500 uppercase tracking-widest text-xs">Hỗ trợ</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Liên hệ hợp tác</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center">
            <p>© 2024 STEAM ACADEMY. All rights reserved.</p>
            <p>Thiết kế bởi STEAM Hub Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
