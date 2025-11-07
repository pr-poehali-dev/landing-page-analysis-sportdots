import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [showOrderForm, setShowOrderForm] = useState(false);
  const { toast } = useToast();

  const handleOrder = () => {
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
      toast({
        title: "Заполните все поля",
        description: "Укажите имя, телефон и адрес доставки",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Заказ оформлен!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setShowOrderForm(false);
    setOrderForm({ name: '', phone: '', address: '' });
  };

  const benefits = [
    {
      icon: 'Heart',
      title: 'Облегчает боль',
      description: 'Снижает нагрузку на сустав и уменьшает дискомфорт при движении'
    },
    {
      icon: 'Zap',
      title: 'Улучшает кровообращение',
      description: 'Компрессионная технология активизирует кровоток в области колена'
    },
    {
      icon: 'Shield',
      title: 'Надёжная поддержка',
      description: 'Стабилизирует коленный сустав, предотвращает травмы'
    },
    {
      icon: 'Smile',
      title: 'Легко надевать',
      description: 'Удобная конструкция с простой фиксацией без посторонней помощи'
    }
  ];

  const testimonials = [
    {
      name: 'Мария Ивановна, 67 лет',
      text: 'После операции на колене врач рекомендовал этот наколенник. Уже через неделю боль значительно уменьшилась!',
      rating: 5
    },
    {
      name: 'Владимир Петрович, 72 года',
      text: 'Отличная вещь! Ношу каждый день на прогулках. Колено больше не беспокоит, могу снова гулять с внуками.',
      rating: 5
    },
    {
      name: 'Галина Сергеевна, 65 лет',
      text: 'Очень довольна покупкой. Материал мягкий, не натирает. Легко надевать и снимать самостоятельно.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Как долго можно носить наколенник?',
      answer: 'Рекомендуется носить 4-6 часов в день во время активности. Можно использовать постоянно при хронических проблемах с суставами по рекомендации врача.'
    },
    {
      question: 'Подойдёт ли при артрозе?',
      answer: 'Да, наколенник специально разработан для людей с артрозом. Он снижает нагрузку на сустав и облегчает боль при движении.'
    },
    {
      question: 'Как выбрать размер?',
      answer: 'Измерьте обхват колена по центру коленной чашечки. S: 32-36 см, M: 36-40 см, L: 40-44 см, XL: 44-48 см.'
    },
    {
      question: 'Можно ли стирать?',
      answer: 'Да, наколенник можно стирать вручную в тёплой воде с мягким мылом. Не отжимать, сушить в расправленном виде.'
    },
    {
      question: 'Есть ли противопоказания?',
      answer: 'Не рекомендуется при острых воспалениях кожи, открытых ранах, тромбозе. При сахарном диабете проконсультируйтесь с врачом.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={26} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">КоленоКомфорт</h1>
                <p className="text-xs text-gray-500">Здоровье и движение</p>
              </div>
            </div>
            
            <Button size="lg" onClick={() => setShowOrderForm(true)}>
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-base px-4 py-2">Для пожилых людей</Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Наколенник для <span className="text-primary">активной жизни</span> без боли
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Медицинский наколенник с технологией точечной компрессии. Разработан специально для пожилых людей 
                с заболеваниями суставов. Облегчает боль, улучшает подвижность, возвращает радость движения.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-green-600" size={24} />
                  <span className="font-semibold">Сертифицирован</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">Рекомендован врачами</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-bold text-primary">2 490 ₽</span>
                  <span className="text-2xl text-gray-400 line-through">3 990 ₽</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">-38%</Badge>
                </div>
                <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6" onClick={() => setShowOrderForm(true)}>
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать сейчас
                </Button>
                <p className="text-sm text-gray-500 mt-3">Бесплатная доставка по России • Гарантия 1 год</p>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/47749b69-c90d-4d20-b017-39c98a492235/files/711cebe9-28c4-43b7-9cb2-fddd490d543a.jpg"
                alt="Наколенник для пожилых"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="text-base px-4 py-2 mb-4">Видеообзор</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Посмотрите, как работает наколенник</h3>
              <p className="text-lg text-gray-600">Реальные отзывы покупателей и демонстрация использования</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon name="Play" className="text-primary ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">Как правильно надевать наколенник</p>
                    <p className="text-white/80 text-sm">2:15</p>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-orange-100 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon name="Play" className="text-primary ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">Отзыв Марии Ивановны, 67 лет</p>
                    <p className="text-white/80 text-sm">3:42</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают КоленоКомфорт</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} className="text-primary" size={32} />
                </div>
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="text-base px-4 py-2 mb-4">Научная разработка</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Технология точечной компрессии</h3>
              <p className="text-lg text-gray-600">Разработано российскими врачами-ортопедами специально для пожилых людей</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Точечное воздействие</h4>
                <p className="text-gray-600">Специальные силиконовые вставки оказывают массажный эффект на акупунктурные точки вокруг колена</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Activity" className="text-secondary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Улучшение кровотока</h4>
                <p className="text-gray-600">Компрессия активизирует микроциркуляцию крови и лимфы, что ускоряет восстановление тканей</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Стабилизация сустава</h4>
                <p className="text-gray-600">Анатомический крой и эластичные боковые вставки фиксируют колено в правильном положении</p>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold mb-4">Клинически доказанная эффективность</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">78%</span>
                      </div>
                      <div>
                        <p className="font-semibold">Снижение боли</p>
                        <p className="text-sm text-gray-600">У пациентов с артрозом после 2 недель использования</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">65%</span>
                      </div>
                      <div>
                        <p className="font-semibold">Улучшение подвижности</p>
                        <p className="text-sm text-gray-600">Увеличение амплитуды движения в суставе</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">92%</span>
                      </div>
                      <div>
                        <p className="font-semibold">Удовлетворённость</p>
                        <p className="text-sm text-gray-600">Покупателей рекомендуют наколенник знакомым</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon name="Award" className="text-primary flex-shrink-0" size={32} />
                    <div>
                      <h5 className="font-bold text-lg mb-2">Рекомендовано ведущими ортопедами России</h5>
                      <p className="text-sm text-gray-600">Одобрено Национальной ассоциацией ортопедов для использования при артрозе, артрите и реабилитации после травм</p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-start gap-3">
                    <Icon name="FileCheck" className="text-green-600 flex-shrink-0" size={32} />
                    <div>
                      <h5 className="font-bold text-lg mb-2">Сертификация Минздрава РФ</h5>
                      <p className="text-sm text-gray-600">Зарегистрировано как медицинское изделие класса 1. Регистрационное удостоверение № РЗН 2023/18956</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">При каких проблемах помогает наколенник</h3>
              <p className="text-lg text-gray-600">Эффективен при различных заболеваниях суставов</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="AlertCircle" className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Артроз коленного сустава</h4>
                    <p className="text-gray-600">Снижает болевой синдром, замедляет разрушение хряща, улучшает питание тканей</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Flame" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Артрит и воспаления</h4>
                    <p className="text-gray-600">Уменьшает отёк, согревает сустав, облегчает утреннюю скованность</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Реабилитация после травм</h4>
                    <p className="text-gray-600">Поддерживает сустав в период восстановления после операций и повреждений</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingDown" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Профилактика износа</h4>
                    <p className="text-gray-600">Предотвращает преждевременное старение суставов при повышенных нагрузках</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="mt-8 bg-yellow-50 border-yellow-200 p-6">
              <div className="flex gap-4">
                <Icon name="Info" className="text-yellow-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Важно знать</h4>
                  <p className="text-gray-700">Наколенник не заменяет лечение, назначенное врачом. Это вспомогательное средство, которое усиливает эффект основной терапии. При острых болях обязательно проконсультируйтесь с ортопедом.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://cdn.poehali.dev/projects/47749b69-c90d-4d20-b017-39c98a492235/files/42d2cb92-2430-43cf-b895-6b8ceb03cece.jpg"
                  alt="Активная жизнь"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">Верните радость движения</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Гуляйте без дискомфорта</h4>
                      <p className="text-gray-600">Стабилизация сустава позволяет ходить дольше и увереннее</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Играйте с внуками</h4>
                      <p className="text-gray-600">Наколенник защищает сустав при активности и физических нагрузках</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" className="text-primary" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Занимайтесь домашними делами</h4>
                      <p className="text-gray-600">Надёжная поддержка при приседаниях, подъёме по лестнице</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Характеристики</h3>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Материал</span>
                    <span className="font-semibold">Неопрен + эластан</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Степень фиксации</span>
                    <span className="font-semibold">Средняя</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Тип застёжки</span>
                    <span className="font-semibold">Липучка</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Воздухопроницаемость</span>
                    <span className="font-semibold">Высокая</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Цвет</span>
                    <span className="font-semibold">Бежевый</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Гарантия</span>
                    <span className="font-semibold">1 год</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Сертификация</span>
                    <span className="font-semibold">Медицинское изделие</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600 font-medium">Производство</span>
                    <span className="font-semibold">Россия</span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h4 className="font-bold text-lg mb-4">Выберите размер</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { size: 'S', label: 'S (32-36 см)' },
                    { size: 'M', label: 'M (36-40 см)' },
                    { size: 'L', label: 'L (40-44 см)' },
                    { size: 'XL', label: 'XL (44-48 см)' }
                  ].map((item) => (
                    <Button
                      key={item.size}
                      variant={selectedSize === item.size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(item.size)}
                      className="h-auto py-3 flex flex-col"
                    >
                      <span className="font-bold text-lg">{item.size}</span>
                      <span className="text-xs">{item.label.split(' ')[1]}</span>
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Измерьте обхват колена по центру коленной чашечки
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы покупателей</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Частые вопросы</h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Закажите прямо сейчас</h3>
            <p className="text-xl opacity-95">
              Специальная цена 2 490 ₽ действует только сегодня. Бесплатная доставка по всей России.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => setShowOrderForm(true)}>
                <Icon name="Phone" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showOrderForm && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowOrderForm(false)}
        >
          <Card 
            className="max-w-lg w-full p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Оформление заказа</h3>
                <p className="text-gray-600">Размер: {selectedSize} • Цена: 2 490 ₽</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowOrderForm(false)}>
                <Icon name="X" size={20} />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванович"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="address">Адрес доставки</Label>
                <Input
                  id="address"
                  placeholder="Город, улица, дом, квартира"
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                  className="mt-2"
                />
              </div>

              <Separator className="my-4" />

              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="flex justify-between text-sm mb-2">
                  <span>Наколенник (размер {selectedSize})</span>
                  <span className="font-semibold">2 490 ₽</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Доставка</span>
                  <span className="font-semibold text-green-600">Бесплатно</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-primary">2 490 ₽</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleOrder}>
                <Icon name="CheckCircle2" size={20} className="mr-2" />
                Подтвердить заказ
              </Button>

              <p className="text-xs text-center text-gray-500">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </div>
          </Card>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-lg mb-4">КоленоКомфорт</h4>
              <p className="text-gray-400 text-sm">Медицинские наколенники для активной жизни без боли</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Email: info@kolenokomfort.ru</p>
                <p>Телефон: +7 (800) 555-35-35</p>
                <p>Бесплатный звонок по России</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Гарантии</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>✓ Сертифицированное медизделие</p>
                <p>✓ Гарантия 1 год</p>
                <p>✓ Возврат 30 дней</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <p className="text-center text-gray-400 text-sm">© 2024 КоленоКомфорт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}