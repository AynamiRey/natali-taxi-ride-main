import { Button } from "@/components/ui/button";
import { Phone, Car, Users, Star } from "lucide-react";
import taxiHeroImage from "@/assets/taxi-hero.jpg";

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+7XXXXXXXXXX";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${taxiHeroImage})` }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Такси <span className="text-taxi-gold">Натали</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-medium drop-shadow-md">
            Такси по всей России и новым территориям
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-taxi-gold font-semibold drop-shadow-md">
            Опытные водители • Надёжный сервис • Доступные цены
          </p>

          <div className="flex justify-center items-center mb-12">
            <Button variant="taxi" size="lg" className="text-lg px-8 py-4" onClick={handleCall}>
              <Phone className="mr-2 h-5 w-5" />
              Заказать такси
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-float">
              <Users className="h-12 w-12 text-taxi-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Опытные водители</h3>
              <p className="text-white/90">Профессиональные водители с большим стажем</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-float" style={{ animationDelay: '1s' }}>
              <Car className="h-12 w-12 text-taxi-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Современный парк</h3>
              <p className="text-white/90">Комфортабельные автомобили в отличном состоянии</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-float" style={{ animationDelay: '2s' }}>
              <Star className="h-12 w-12 text-taxi-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Высокий рейтинг</h3>
              <p className="text-white/90">Множество довольных клиентов по всей России</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;