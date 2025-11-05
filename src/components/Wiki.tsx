import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Wiki() {
  const wikiSections = [
    {
      id: 'rules',
      title: 'Правила сервера',
      icon: 'ScrollText',
      color: 'minecraft-red',
      items: [
        {
          question: 'Какие правила на сервере?',
          answer: 'На анархия сервере почти нет правил. Можно грифить, убивать, красть. Запрещены только читы и дюпы.'
        },
        {
          question: 'Можно ли использовать читы?',
          answer: 'НЕТ. Любые читы (флай, килка, рентген, хак-клиенты) ведут к перманентному бану. Античит работает 24/7.'
        },
        {
          question: 'Можно ли грифить?',
          answer: 'ДА. Можно ломать любые постройки, даже чужие базы. Прячь свою базу подальше от спавна.'
        }
      ]
    },
    {
      id: 'survival',
      title: 'Гайд по выживанию',
      icon: 'Heart',
      color: 'minecraft-gold',
      items: [
        {
          question: 'Как выжить на спавне?',
          answer: 'Спавн - самое опасное место. Беги в случайную сторону минимум 10K блоков. Не стройся близко к спавну и дорогам.'
        },
        {
          question: 'Где строить базу?',
          answer: 'Строй базу в Незере на высоте Y=100-120 или в Крае. Используй обсидиан и лаву для защиты. Скрывай координаты.'
        },
        {
          question: 'Как прятать вещи?',
          answer: 'Используй несколько тайников. Закапывай сундуки под землю на разных координатах. Не храни всё в одном месте.'
        }
      ]
    },
    {
      id: 'pvp',
      title: 'PvP механики',
      icon: 'Swords',
      color: 'minecraft-purple',
      items: [
        {
          question: 'Какая версия PvP?',
          answer: 'На сервере используется новая механика боя (1.9+). Урон зависит от перезарядки оружия.'
        },
        {
          question: 'Лучшее оружие для PvP?',
          answer: 'Топовый меч (Острота 5, Откат 2), тотемы бессмертия, зелья силы и регенерации, щит.'
        },
        {
          question: 'Как не умереть?',
          answer: 'Всегда носи тотемы, не доверяй никому, держи EnderChest с запасными вещами, используй /kill при крите.'
        }
      ]
    },
    {
      id: 'economy',
      title: 'Экономика и торговля',
      icon: 'Coins',
      color: 'minecraft-green',
      items: [
        {
          question: 'Есть ли валюта на сервере?',
          answer: 'Официальной валюты нет. Игроки торгуют алмазами, незеритом, шалкерами и другими ресурсами.'
        },
        {
          question: 'Где торговать безопасно?',
          answer: 'Нигде. Любая сделка - риск. Требуй предоплату или используй посредников с репутацией.'
        },
        {
          question: 'Что ценнее всего?',
          answer: 'Незерит, шалкеры с вещами, элитры, сердца моря, головы игроков, древние обломки.'
        }
      ]
    }
  ];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-minecraft-green text-shadow-pixel mb-4">
            ВИКИ
          </h2>
          <p className="text-minecraft-darkgreen text-sm">
            Всё что нужно знать для выживания
          </p>
        </div>

        <div className="space-y-6">
          {wikiSections.map((section) => (
            <Card 
              key={section.id}
              className="bg-black/60 border-4 border-minecraft-darkgreen hover:border-minecraft-green transition-all overflow-hidden"
            >
              <div className={`bg-${section.color} p-4 flex items-center gap-3`}>
                <div className="w-12 h-12 bg-black/30 flex items-center justify-center pixel-border">
                  <Icon name={section.icon as any} size={24} className="text-black" />
                </div>
                <h3 className="text-black text-lg md:text-xl">
                  {section.title}
                </h3>
              </div>

              <div className="p-6">
                <Accordion type="single" collapsible className="space-y-3">
                  {section.items.map((item, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`${section.id}-${idx}`}
                      className="border-2 border-minecraft-darkgreen bg-minecraft-darkgray/50"
                    >
                      <AccordionTrigger className="px-4 text-minecraft-green hover:text-minecraft-darkgreen text-left text-sm">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-minecraft-darkgreen text-sm">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-black/60 border-4 border-minecraft-aqua mt-8 p-6">
          <div className="flex items-start gap-4">
            <Icon name="MessageCircle" className="text-minecraft-aqua flex-shrink-0" size={24} />
            <div>
              <h3 className="text-minecraft-aqua text-lg mb-2">
                Есть вопросы?
              </h3>
              <p className="text-minecraft-darkgreen text-sm mb-3">
                Не нашёл ответ в вики? Спроси в Discord сообществе или у опытных игроков на сервере.
              </p>
              <p className="text-minecraft-gray text-xs">
                Помни: доверяй только проверенным людям
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
