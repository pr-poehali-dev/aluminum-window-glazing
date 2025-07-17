import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Home" size={24} className="text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">ПрофСтройПрестиж</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">О нас</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Виды остекления</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-roboto">
              Остекление коттеджей<br />
              <span className="text-blue-600">алюминиевыми окнами</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-open-sans">
              Энергоэффективные решения для вашего дома. Индивидуальные размеры, быстрый монтаж и гарантия качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg">
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Thermometer" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Энергоэффективность</h3>
              <p className="text-gray-600">Высокая теплоизоляция для экономии на отоплении</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ruler" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Индивидуальные размеры</h3>
              <p className="text-gray-600">Любые формы и конфигурации под ваш проект</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрый монтаж</h3>
              <p className="text-gray-600">Профессиональная установка в кратчайшие сроки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-gray-600">5 лет гарантии на все виды работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-roboto">О нашей компании</h2>
              <p className="text-gray-600 mb-6">
                Мы специализируемся на остеклении частных коттеджей алюминиевыми окнами уже более 10 лет. 
                Наша команда профессионалов обладает глубокими знаниями в области энергоэффективных решений 
                и современных технологий остекления.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Более 500 успешно реализованных проектов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Собственное производство алюминиевых конструкций</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Команда сертифицированных специалистов</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-gray-600">Лет гарантии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-roboto">Наши работы</h2>
            <p className="text-xl text-gray-600">Примеры остекления частных коттеджей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/b69dd328-905e-43e0-97c2-244c60f063b6.jpg" 
                    alt="Установка алюминиевых окон в коттедже"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Установка в коттедже</h3>
                  <p className="text-gray-600 mb-4">Профессиональная установка энергоэффективных алюминиевых окон</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span>Москва и область</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/2b192033-e7bb-442b-9b8b-ddf4c3eb97af.jpg" 
                    alt="Панорамное остекление в гостиной"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Панорамное остекление</h3>
                  <p className="text-gray-600 mb-4">Большие алюминиевые окна от пола до потолка</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span>Москва и область</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/d9b08df2-0652-400e-bfe2-ba36016ccfc5.jpg" 
                    alt="Производство алюминиевых профилей"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Качественные профили</h3>
                  <p className="text-gray-600 mb-4">Собственное производство алюминиевых конструкций</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    <span>Москва и область</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {[4, 5, 6].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-gray-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Проект {item}</h3>
                    <p className="text-gray-600 mb-4">Остекление коттеджа в современном стиле</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="MapPin" size={16} className="mr-1" />
                      <span>Москва и область</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-roboto">Виды остекления</h2>
            <p className="text-xl text-gray-600">Различные профили и стеклопакеты для любых задач</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Square" size={20} className="text-blue-600 mr-2" />
                  Холодное остекление
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Идеально для террас, веранд и балконов. Защита от осадков и ветра.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Одинарное остекление</li>
                  <li>• Раздвижные системы</li>
                  <li>• Минимальная теплоизоляция</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Layers" size={20} className="text-blue-600 mr-2" />
                  Тёплое остекление
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Для жилых помещений. Высокая теплоизоляция и энергоэффективность.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Двойные стеклопакеты</li>
                  <li>• Терморазрыв в профиле</li>
                  <li>• Отличная теплоизоляция</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Maximize" size={20} className="text-blue-600 mr-2" />
                  Панорамное остекление
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Остекление от пола до потолка. Максимум света и обзора.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Большие площади остекления</li>
                  <li>• Структурное остекление</li>
                  <li>• Современный внешний вид</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-roboto">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для консультации</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <Icon name="Phone" size={24} className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (926) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="Mail" size={24} className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@profstroyprestig.ru</p>
                  <p className="text-gray-600">sales@profstroyprestig.ru</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" size={24} className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-gray-600">Офис 456</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Заказать звонок</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Комментарий"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Home" size={24} className="text-blue-400 mr-2" />
                <span className="text-xl font-bold">ПрофСтройПрестиж</span>
              </div>
              <p className="text-gray-400">
                Профессиональное остекление коттеджей алюминиевыми окнами
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Холодное остекление</li>
                <li>Тёплое остекление</li>
                <li>Панорамное остекление</li>
                <li>Установка и монтаж</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Портфолио</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@profstroyprestig.ru</p>
                <p>г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПрофСтройПрестиж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;