import { Button } from "@/components/ui/button";
import { Phone, Car, Users, Star, MapPin } from "lucide-react";
import taxiHeroImage from "@/assets/taxi-hero.jpg";
import taxiHeroMobile from "@/assets/taxi-hero-mobile.jpg";

const HeroSection = () => {
  const handleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Плавная прокрутка с кастомной анимацией
      const targetPosition = contactSection.offsetTop - 80; // Отступ сверху
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // 0.8 секунды для быстрого но плавного перехода
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function для красивой анимации (easeInOutCubic)
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          // После завершения прокрутки добавляем подсветку
          contactSection.classList.add('contact-highlight');
          setTimeout(() => {
            contactSection.classList.remove('contact-highlight');
          }, 400);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      {/* Desktop background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 hidden sm:block"
        style={{ backgroundImage: `url(${taxiHeroImage})` }}
      ></div>
      {/* Mobile background - мобильное изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 sm:hidden"
        style={{ backgroundImage: `url(${taxiHeroMobile})` }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20 sm:pt-16 lg:pt-0">
        <div className="animate-fadeIn">
          <div className="mb-8 sm:mb-10">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl"></div>
              <div className="relative px-6 py-4 sm:px-8 sm:py-6">
                <h1 className="text-center leading-tight">
                  <span className="block text-white font-light tracking-[0.25em] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 opacity-90 drop-shadow-lg">
                    ТАКСИ
                  </span>
                  <span className="block bg-gradient-to-r from-taxi-gold via-yellow-300 to-taxi-gold bg-clip-text text-transparent drop-shadow-2xl font-black tracking-wider transform hover:scale-105 transition-transform duration-300 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    НАТАЛИ
                  </span>
                </h1>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-taxi-gold"></div>
              <div className="w-3 h-3 bg-taxi-gold rounded-full shadow-lg"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-taxi-gold"></div>
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-md text-white/95">
              По всей России и новым территориям
            </p>
            
            {/* Важная информация о минимальной дистанции */}
            <div className="bg-taxi-gold/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 mx-4 sm:mx-8 border-2 border-yellow-300 shadow-2xl">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-taxi-dark" />
                <div className="text-center">
                  <p className="text-taxi-dark font-bold text-lg sm:text-xl md:text-2xl">
                    Поездки от 100 км
                  </p>
                  <p className="text-taxi-dark/80 font-medium text-sm sm:text-base">
                    Межгород и дальние расстояния
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg text-taxi-gold font-semibold">
              <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">Опытные водители</span>
              <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">Надёжный сервис</span>
              <span className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">Доступные цены</span>
            </div>
          </div>

          <div className="flex justify-center items-center mb-12 sm:mb-16">
            <Button 
              variant="taxi" 
              size="lg" 
              className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 w-full sm:w-auto max-w-sm bg-taxi-gold hover:bg-yellow-400 text-taxi-dark font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-taxi-gold hover:border-yellow-400 rounded-xl" 
              onClick={handleCall}
            >
              <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-bold tracking-normal">Заказать такси</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-2 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 animate-float mx-2 sm:mx-0">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-taxi-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Опытные водители</h3>
              <p className="text-white/90 text-sm sm:text-base">Профессиональные водители с большим стажем</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 animate-float mx-2 sm:mx-0" style={{ animationDelay: '1s' }}>
              <Car className="h-10 w-10 sm:h-12 sm:w-12 text-taxi-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Современный парк</h3>
              <p className="text-white/90 text-sm sm:text-base">Комфортабельные автомобили в отличном состоянии</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 animate-float mx-2 sm:mx-0" style={{ animationDelay: '2s' }}>
              <Star className="h-10 w-10 sm:h-12 sm:w-12 text-taxi-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Высокий рейтинг</h3>
              <p className="text-white/90 text-sm sm:text-base">Множество довольных клиентов по всей России</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;