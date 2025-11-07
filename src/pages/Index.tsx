import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

interface CartItem extends Product {
  quantity: number;
  size?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Наколенник спортивный Pro',
    price: 2490,
    image: 'https://cdn.poehali.dev/projects/47749b69-c90d-4d20-b017-39c98a492235/files/ff462507-4eb0-43e4-aabe-9e838243afdf.jpg',
    category: 'Наколенники',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Налокотник компрессионный',
    price: 1890,
    image: 'https://cdn.poehali.dev/projects/47749b69-c90d-4d20-b017-39c98a492235/files/45f89934-c972-4211-82a6-eef10571f2c6.jpg',
    category: 'Налокотники',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Бандаж для запястья',
    price: 1490,
    image: 'https://cdn.poehali.dev/projects/47749b69-c90d-4d20-b017-39c98a492235/files/aa460868-646a-4fc3-98aa-e8805096e1f2.jpg',
    category: 'Бандажи',
    rating: 4.9
  }
];

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const { toast } = useToast();

  const addToCart = (product: Product, size: string) => {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1, size }]);
    }

    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${size})`,
    });
  };

  const removeFromCart = (productId: number, size?: string) => {
    setCart(cart.filter(item => !(item.id === productId && item.size === size)));
  };

  const updateQuantity = (productId: number, size: string | undefined, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId, size);
    } else {
      setCart(cart.map(item => 
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Activity" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SportGear
              </h1>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-secondary text-white">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">Корзина</SheetTitle>
                  <SheetDescription>
                    {cartItemsCount > 0 ? `Товаров в корзине: ${cartItemsCount}` : 'Ваша корзина пуста'}
                  </SheetDescription>
                </SheetHeader>
                
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Icon name="ShoppingBag" size={64} className="text-gray-300 mb-4" />
                      <p className="text-gray-500 text-lg">Добавьте товары в корзину</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                        {cart.map((item) => (
                          <Card key={`${item.id}-${item.size}`} className="p-4">
                            <div className="flex gap-4">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">Размер: {item.size}</p>
                                <p className="text-primary font-bold mt-1">{item.price} ₽</p>
                                
                                <div className="flex items-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                  >
                                    <Icon name="Minus" size={14} />
                                  </Button>
                                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                  >
                                    <Icon name="Plus" size={14} />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="ml-auto text-destructive"
                                    onClick={() => removeFromCart(item.id, item.size)}
                                  >
                                    <Icon name="Trash2" size={16} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Итого:</span>
                          <span className="text-primary">{cartTotal.toLocaleString()} ₽</span>
                        </div>
                        
                        <Button className="w-full" size="lg">
                          <Icon name="CreditCard" size={20} className="mr-2" />
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Профессиональная спортивная экипировка
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Бандажи, наколенники и спортивные аксессуары для надёжной защиты и максимальной производительности
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-left">
              <div className="flex items-start gap-3">
                <Icon name="Shield" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-semibold">Надёжная защита</p>
                  <p className="text-sm text-gray-600">Сертифицированное качество</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Truck" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-semibold">Быстрая доставка</p>
                  <p className="text-sm text-gray-600">По всей России</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Award" className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-semibold">Гарантия 1 год</p>
                  <p className="text-sm text-gray-600">Возврат 30 дней</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Наш каталог</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">{product.category}</Badge>
                  <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">Рейтинг</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <Card 
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">{selectedProduct.category}</Badge>
                  <h2 className="text-3xl font-bold mb-3">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center">
                      <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                      <span className="ml-1 font-semibold">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">152 отзыва</span>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-6">{selectedProduct.price} ₽</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-lg mb-3">Описание</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Профессиональный наколенник разработан специально для спортсменов и активных людей. 
                    Обеспечивает надёжную поддержку коленного сустава при физических нагрузках.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Характеристики</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Материал:</span>
                      <span className="font-semibold">Неопрен + эластан</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Степень фиксации:</span>
                      <span className="font-semibold">Средняя</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Тип застёжки:</span>
                      <span className="font-semibold">Липучка</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Страна производства:</span>
                      <span className="font-semibold">Россия</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Выберите размер</h3>
                  <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'default' : 'outline'}
                        onClick={() => setSelectedSize(size)}
                        className="flex-1"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1" 
                    size="lg"
                    onClick={() => {
                      addToCart(selectedProduct, selectedSize);
                      setSelectedProduct(null);
                    }}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold text-lg mb-4">SportGear</h4>
              <p className="text-gray-400">Профессиональная спортивная экипировка для достижения ваших целей</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@sportgear.ru</p>
                <p>Телефон: +7 (800) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Соцсети</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Icon name="Instagram" className="hover:text-secondary transition-colors cursor-pointer" size={24} />
                <Icon name="Facebook" className="hover:text-secondary transition-colors cursor-pointer" size={24} />
                <Icon name="Youtube" className="hover:text-secondary transition-colors cursor-pointer" size={24} />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <p className="text-center text-gray-400">© 2024 SportGear. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
