import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const packages = [
    {
      id: 1,
      amount: '400',
      price: '299',
      popular: false,
      icon: 'Coins',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 2,
      amount: '800',
      price: '549',
      popular: true,
      icon: 'Trophy',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      amount: '1700',
      price: '999',
      popular: false,
      icon: 'Crown',
      color: 'from-orange-500 to-purple-600'
    },
    {
      id: 4,
      amount: '4500',
      price: '2499',
      popular: false,
      icon: 'Gem',
      color: 'from-purple-500 to-orange-600'
    },
    {
      id: 5,
      amount: '10000',
      price: '4999',
      popular: false,
      icon: 'Sparkles',
      color: 'from-orange-400 to-purple-500'
    },
  ];

  const paymentMethods = [
    { name: 'Банковская карта', icon: 'CreditCard' },
    { name: 'СБП', icon: 'Smartphone' },
    { name: 'Яндекс.Касса', icon: 'Wallet' },
    { name: 'QIWI', icon: 'Banknote' },
    { name: 'WebMoney', icon: 'Globe' },
    { name: 'Криптовалюта', icon: 'Bitcoin' }
  ];

  const handleBuyClick = (amount: string, price: string) => {
    toast({
      title: "Товар добавлен!",
      description: `${amount} Robux за ${price}₽ добавлено в корзину`,
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C] to-[#2D1F3D]">
      <nav className="fixed top-0 w-full bg-[#1A1F2C]/95 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">RoboShop</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
                { id: 'payment', label: 'Оплата', icon: 'CreditCard' },
                { id: 'contact', label: 'Контакты', icon: 'MessageSquare' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" className="text-white" />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                <Icon name="Zap" size={14} className="mr-1" />
                Мгновенная доставка
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Robux по лучшей цене
              </h1>
              <p className="text-xl text-gray-300">
                Пополни свой Roblox аккаунт быстро и безопасно. Тысячи довольных клиентов уже с нами!
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('catalog')}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 hover-scale"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить Robux
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold text-lg px-8"
                >
                  Связаться
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-gray-400">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-gray-400">Поддержка</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-gray-400">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-3xl animate-float"></div>
              <div className="relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">🎮</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Online
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Популярный пакет</div>
                    <div className="text-5xl font-bold text-white mb-2">800 Robux</div>
                    <div className="text-3xl font-bold text-primary">549₽</div>
                  </div>
                  <Button 
                    onClick={() => handleBuyClick('800', '549')}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold py-6 text-lg"
                  >
                    <Icon name="Zap" size={20} className="mr-2" />
                    Купить сейчас
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Icon name="Shield" size={16} className="text-green-400" />
                    Безопасная оплата
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
              <Icon name="Star" size={14} className="mr-1" />
              Выбери свой пакет
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Каталог товаров
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Разные пакеты Robux на любой вкус и бюджет
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className={`bg-card border-white/10 hover:border-primary/50 transition-all duration-300 hover-scale relative overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      Популярное
                    </Badge>
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5`}></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-4 animate-float`}>
                    <Icon name={pkg.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">
                    {pkg.amount} Robux
                  </CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {pkg.price}₽
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Icon name="Check" size={18} className="text-green-400" />
                      <span>Мгновенная доставка</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Icon name="Check" size={18} className="text-green-400" />
                      <span>Гарантия безопасности</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Icon name="Check" size={18} className="text-green-400" />
                      <span>Поддержка 24/7</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleBuyClick(pkg.amount, pkg.price)}
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold`}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="payment" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <Icon name="Wallet" size={14} className="mr-1" />
              Удобная оплата
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Способы оплаты
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Выбери удобный для тебя способ оплаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card 
                key={method.name}
                className="bg-card border-white/10 hover:border-secondary/50 transition-all duration-300 hover-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center">
                      <Icon name={method.icon as any} className="text-secondary" size={24} />
                    </div>
                    <span className="text-lg font-semibold text-white">{method.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-card border-white/10 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon name="Shield" className="text-green-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">Безопасные платежи</h3>
                </div>
                <p className="text-gray-300">
                  Все платежи проходят через защищённые каналы. Мы не храним данные ваших карт.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-4">
                <Icon name="MessageSquare" size={14} className="mr-1" />
                Свяжись с нами
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Контакты
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Есть вопросы? Напиши нам, и мы поможем!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div className="text-gray-300">support@roboshop.ru</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Telegram</div>
                    <div className="text-gray-300">@roboshop_support</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Время работы</div>
                    <div className="text-gray-300">24/7 - всегда на связи</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-white/10 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Напиши нам</CardTitle>
                <CardDescription className="text-gray-400">
                  Заполни форму и мы ответим в течение 5 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Твоё имя" 
                      className="bg-background border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-background border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Твоё сообщение" 
                      rows={5}
                      className="bg-background border-white/10 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold"
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-white">RoboShop</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 RoboShop. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
