import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User, MessageCircle } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewsSection = () => {
  const staticReviews: Review[] = [
    {
      id: '1',
      name: 'Анна Петрова',
      rating: 5,
      comment: 'Отличное такси! Водитель приехал быстро, машина чистая и комфортная. Обязательно воспользуюсь услугами еще раз.',
      date: ''
    },
    {
      id: '2', 
      name: 'Михаил Козлов',
      rating: 5,
      comment: 'Очень довольны сервисом! Вежливый водитель, адекватные цены. Рекомендую всем друзьям и знакомым.',
      date: ''
    },
    {
      id: '3',
      name: 'Елена Сидорова', 
      rating: 5,
      comment: 'Хорошее такси.',
      date: ''
    },
    {
      id: '4',
      name: 'Дмитрий Волков',
      rating: 5,
      comment: 'Пользуюсь услугами уже полгода. Всегда пунктуальны, машины в отличном состоянии. Спасибо за качественный сервис!',
      date: ''
    }
  ];

  // Переход в Telegram
  const handleTelegramRedirect = () => {
    window.open('https://t.me/+CZshSVW-0PYxMjQy', '_blank');
  };

  // Рендер звезд рейтинга
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating 
                ? 'text-taxi-gold fill-taxi-gold' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-taxi-dark mb-4 sm:mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Мы дорожим мнением каждого клиента и стремимся предоставить лучший сервис
          </p>
          
          {/* Кнопка перехода в Telegram */}
          <div className="bg-taxi-light rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-taxi-blue mr-3" />
              <h3 className="text-xl font-bold text-taxi-dark">Оставить отзыв</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Чтобы оставить отзыв или посмотреть больше отзывов, присоединяйтесь к нашей группе в Telegram
            </p>
            <Button 
              onClick={handleTelegramRedirect}
              className="w-full bg-taxi-gold hover:bg-yellow-400 text-taxi-dark font-bold text-lg py-3"
            >
              Перейти в Telegram
            </Button>
          </div>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {staticReviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-taxi-light p-2 rounded-full">
                      <User className="h-4 w-4 text-taxi-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-taxi-dark">{review.name}</h4>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  {renderStars(review.rating)}
                </div>

                <p className="text-gray-700 leading-relaxed flex-grow">
                  {review.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;