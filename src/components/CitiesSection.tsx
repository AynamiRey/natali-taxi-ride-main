import { Card, CardContent } from "@/components/ui/card";
import moscowImage from "@/assets/moscow.jpg";
import saintPetersburgImage from "@/assets/saint-petersburg.jpg";
import kazanImage from "@/assets/kazan.jpg";

const CitiesSection = () => {
  const cities = [
    {
      name: "Москва",
      description: "Столица России с её величественными достопримечательностями",
      image: moscowImage
    },
    {
      name: "Санкт-Петербург",
      description: "Культурная столица с имперской архитектурой",
      image: saintPetersburgImage
    },
    {
      name: "Казань",
      description: "Город с уникальным сочетанием культур",
      image: kazanImage
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-taxi-dark mb-4 sm:mb-6">
            Работаем по всей <span className="text-taxi-blue">России</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Наши услуги доступны в крупнейших городах России и новых территориях. 
            Высокое качество обслуживания и безопасность поездок.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cities.map((city, index) => (
            <Card 
              key={city.name} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:transform hover:-translate-y-2 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={city.image}
                  alt={`${city.name} с достопримечательностями`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{city.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{city.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-taxi-blue font-semibold px-4">
            И во многих других городах России и новых территорий
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;