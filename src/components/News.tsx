import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'ВАЙП СЕРВЕРА 15 ЯНВАРЯ',
      date: '05.11.2025',
      category: 'Важное',
      content: 'Готовьтесь к полному вайпу! Все базы будут удалены. Новый старт для всех игроков.',
      icon: 'Trash2',
      color: 'minecraft-red'
    },
    {
      id: 2,
      title: 'Новый дюп найден и пофикшен',
      date: '03.11.2025',
      category: 'Обновление',
      content: 'Дюп с шалкерами был исправлен. Игроки использовавшие его получили бан.',
      icon: 'Shield',
      color: 'minecraft-gold'
    },
    {
      id: 3,
      title: 'База ТОП клана уничтожена',
      date: '01.11.2025',
      category: 'События',
      content: 'Легендарная база клана "Империя" была полностью разгромлена группой рейдеров.',
      icon: 'Bomb',
      color: 'minecraft-purple'
    },
    {
      id: 4,
      title: 'Обновление до версии 1.20.4',
      date: '28.10.2025',
      category: 'Техническое',
      content: 'Сервер обновлён до последней версии Minecraft. Новые блоки и механики доступны.',
      icon: 'Wrench',
      color: 'minecraft-aqua'
    }
  ];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-minecraft-green text-shadow-pixel mb-4">
            НОВОСТИ
          </h2>
          <p className="text-minecraft-darkgreen text-sm">
            Последние события на сервере
          </p>
        </div>

        <div className="space-y-6">
          {news.map((item) => (
            <Card 
              key={item.id}
              className="bg-black/60 border-4 border-minecraft-darkgreen hover:border-minecraft-green transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 bg-${item.color} flex items-center justify-center pixel-border flex-shrink-0`}>
                  <Icon name={item.icon as any} size={28} className="text-black" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge className={`bg-${item.color} text-black text-xs border-2 border-black`}>
                      {item.category}
                    </Badge>
                    <span className="text-minecraft-gray text-xs flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className="text-minecraft-green text-lg md:text-xl mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-minecraft-darkgreen text-sm">
                    {item.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
