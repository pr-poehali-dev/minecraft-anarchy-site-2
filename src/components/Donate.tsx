import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Donate() {
  const donatePackages = [
    {
      id: 1,
      name: 'VIP',
      price: '199₽',
      color: 'minecraft-gold',
      features: [
        'Цветной ник',
        'Приоритет в очереди',
        '/fly в мирном мире',
        '3 точки дома',
      ],
      icon: 'Star'
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: '499₽',
      color: 'minecraft-aqua',
      features: [
        'Всё из VIP',
        'Личный варп',
        '/god на 5 минут в день',
        '10 точек дома',
      ],
      icon: 'Crown'
    },
    {
      id: 3,
      name: 'LEGEND',
      price: '999₽',
      color: 'minecraft-purple',
      popular: true,
      features: [
        'Всё из PREMIUM',
        'Кастомный префикс',
        '/repair раз в час',
        'Безлимит точек дома',
      ],
      icon: 'Sparkles'
    }
  ];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-minecraft-green text-shadow-pixel mb-4">
            ДОНАТ
          </h2>
          <p className="text-minecraft-darkgreen text-sm">
            Поддержи сервер и получи крутые плюшки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donatePackages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`bg-black/60 border-4 ${
                pkg.popular 
                  ? 'border-minecraft-purple scale-105' 
                  : 'border-minecraft-darkgreen'
              } hover:border-${pkg.color} transition-all p-6 relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-minecraft-purple text-white text-xs border-2 border-black">
                    ПОПУЛЯРНОЕ
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-${pkg.color} flex items-center justify-center pixel-border mx-auto mb-4`}>
                  <Icon name={pkg.icon as any} size={40} className="text-black" />
                </div>
                
                <h3 className={`text-${pkg.color} text-2xl mb-2`}>
                  {pkg.name}
                </h3>
                
                <div className="text-minecraft-green text-3xl font-bold mb-2">
                  {pkg.price}
                </div>
                
                <p className="text-minecraft-gray text-xs">
                  навсегда
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Icon 
                      name="Check" 
                      size={16} 
                      className={`text-${pkg.color} flex-shrink-0 mt-0.5`}
                    />
                    <span className="text-minecraft-darkgreen text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full bg-${pkg.color} text-black hover:opacity-80 border-4 border-black pixel-border py-6`}
              >
                КУПИТЬ
              </Button>
            </Card>
          ))}
        </div>

        <Card className="bg-black/60 border-4 border-minecraft-red mt-12 p-8">
          <div className="flex items-start gap-4">
            <Icon name="AlertTriangle" className="text-minecraft-red flex-shrink-0" size={32} />
            <div>
              <h3 className="text-minecraft-red text-lg mb-2">
                ВАЖНО!
              </h3>
              <p className="text-minecraft-darkgreen text-sm">
                Донат не даёт неуязвимости или читов. Это лишь косметика и удобства. 
                Тебя всё равно могут убить и разграбить. Анархия есть анархия.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
