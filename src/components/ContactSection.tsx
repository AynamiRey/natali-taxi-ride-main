import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const handleCall1 = () => {
    window.location.href = "tel:+79684181518";
  };

  const handleCall2 = () => {
    window.location.href = "tel:+79152186582";
  };

  const handleWhatsApp1 = (e: React.MouseEvent) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    window.location.href = "whatsapp://send?phone=79684181518";
    // Фоллбэк для веб-версии
    setTimeout(() => {
      window.open("https://wa.me/79684181518", "_blank");
    }, 500);
  };

  const handleWhatsApp2 = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = "whatsapp://send?phone=79152186582";
    setTimeout(() => {
      window.open("https://wa.me/79152186582", "_blank");
    }, 500);
  };

  const handleTelegram1 = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = "tg://resolve?domain=79684181518";
    setTimeout(() => {
      window.open("https://t.me/79684181518", "_blank");
    }, 500);
  };

  const handleTelegram2 = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = "tg://resolve?domain=79152186582";
    setTimeout(() => {
      window.open("https://t.me/79152186582", "_blank");
    }, 500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-taxi-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-taxi-dark mb-4 sm:mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Заказать такси просто! Звоните, пишите в WhatsApp или Telegram
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <Card className="bg-white shadow-card border-0">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-taxi-blue mr-3 sm:mr-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-taxi-dark">Номера телефонов</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Первый номер */}
                  <div className="text-center py-3 sm:py-4 bg-taxi-light rounded-lg cursor-pointer hover:bg-taxi-blue/5 transition-colors" onClick={handleCall1}>
                    <p className="text-2xl sm:text-3xl font-bold text-taxi-blue mb-3">
                      +7 (968) 418-15-18
                    </p>
                    <div className="flex justify-center space-x-3 mt-3">
                      <button
                        onClick={handleWhatsApp1}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </button>
                      <button
                        onClick={handleTelegram1}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <Send className="h-4 w-4" />
                        <span>Telegram</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Второй номер */}
                  <div className="text-center py-3 sm:py-4 bg-taxi-light rounded-lg cursor-pointer hover:bg-taxi-blue/5 transition-colors" onClick={handleCall2}>
                    <p className="text-2xl sm:text-3xl font-bold text-taxi-blue mb-3">
                      +7 (915) 218-65-82
                    </p>
                    <div className="flex justify-center space-x-3 mt-3">
                      <button
                        onClick={handleWhatsApp2}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </button>
                      <button
                        onClick={handleTelegram2}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <Send className="h-4 w-4" />
                        <span>Telegram</span>
                      </button>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="taxi" 
                  className="w-full mt-4 sm:mt-6 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-4 sm:py-5 bg-taxi-gold hover:bg-yellow-400 text-taxi-dark font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-taxi-gold hover:border-yellow-400 rounded-xl" 
                  size="lg" 
                  onClick={handleCall1}
                >
                  <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="font-bold tracking-normal">Заказать такси сейчас</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;