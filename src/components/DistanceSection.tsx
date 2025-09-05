import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, Clock, Shield, Phone } from "lucide-react";

const DistanceSection = () => {
  const handleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-taxi-blue to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-taxi-gold/20 rounded-full mb-6">
            <Route className="h-8 w-8 text-taxi-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Поездки от 100 км
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Специализируемся на междугородних и дальних поездках. 
            Комфортно и безопасно доставим вас в любую точку России.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка - основная информация */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-8 w-8 text-taxi-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Минимальное расстояние
                    </h3>
                    <p className="text-blue-100">
                      Принимаем заказы на поездки от 100 километров. 
                      Идеально подходит для междугородних поездок, 
                      поездок в аэропорт, на дачу или к родственникам.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-taxi-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Комфортное время в пути
                    </h3>
                    <p className="text-blue-100">
                      Опытные водители знают оптимальные маршруты. 
                      Регулярные остановки для отдыха на дальних расстояниях. 
                      Вы доедете отдохнувшими и в хорошем настроении.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-taxi-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Безопасность превыше всего
                    </h3>
                    <p className="text-blue-100">
                      Все автомобили проходят техосмотр. 
                      Водители имеют большой стаж вождения. 
                      Страхование пассажиров и соблюдение ПДД.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - преимущества и призыв к действию */}
          <div className="space-y-8">
            <div className="bg-taxi-gold/20 backdrop-blur-sm rounded-2xl p-8 border border-taxi-gold/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Почему выбирают нас для дальних поездок?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-taxi-gold rounded-full"></div>
                  <span className="text-white">Фиксированная цена без скрытых доплат</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-taxi-gold rounded-full"></div>
                  <span className="text-white">Возможность оплаты наличными или картой</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-taxi-gold rounded-full"></div>
                  <span className="text-white">Помощь с багажом и грузом</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-taxi-gold rounded-full"></div>
                  <span className="text-white">Отслеживание поездки в реальном времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-taxi-gold rounded-full"></div>
                  <span className="text-white">Возможность бронирования заранее</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold text-taxi-gold mb-2">
                  Готовы к дальней поездке?
                </h4>
                <p className="text-blue-100 mb-4">
                  Свяжитесь с нами для расчета стоимости и бронирования
                </p>
                <Button 
                  variant="taxi" 
                  size="lg" 
                  className="bg-taxi-gold hover:bg-yellow-400 text-taxi-dark font-bold text-lg px-8 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  onClick={handleCall}
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Заказать поездку от 100 км
                </Button>
              </div>
              
              <p className="text-blue-200 text-sm">
                Работаем круглосуточно • Принимаем заказы 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistanceSection;