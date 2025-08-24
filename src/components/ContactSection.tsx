import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+7XXXXXXXXXX";
  };

  return (
    <section className="py-20 bg-taxi-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-taxi-dark mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Заказать такси просто! Звоните по номерам ниже
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <Card className="bg-white shadow-card border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-8 w-8 text-taxi-blue mr-4" />
                  <h3 className="text-2xl font-bold text-taxi-dark">Номера телефонов</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center py-4 bg-taxi-light rounded-lg cursor-pointer hover:bg-taxi-blue/5 transition-colors" onClick={handleCall}>
                    <p className="text-sm text-muted-foreground mb-2">Основной номер</p>
                    <p className="text-3xl font-bold text-taxi-blue">
                      +7 (XXX) XXX-XX-XX
                    </p>
                  </div>
                  
                  <div className="text-center py-4 bg-taxi-light rounded-lg cursor-pointer hover:bg-taxi-blue/5 transition-colors" onClick={handleCall}>
                    <p className="text-sm text-muted-foreground mb-2">Дополнительный номер</p>
                    <p className="text-3xl font-bold text-taxi-blue">
                      +7 (XXX) XXX-XX-XX
                    </p>
                  </div>
                </div>

                <Button variant="taxi" className="w-full mt-6" size="lg" onClick={handleCall}>
                  <Phone className="mr-2 h-5 w-5" />
                  Заказать такси сейчас
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