import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Banlist() {
  const [search, setSearch] = useState('');

  const bannedPlayers = [
    {
      id: 1,
      nickname: 'xXHackerXx',
      reason: 'Использование читов (KillAura)',
      admin: 'SystemAuto',
      date: '05.11.2025',
      permanent: true
    },
    {
      id: 2,
      nickname: 'Dupe_Master',
      reason: 'Дюп предметов (шалкеры)',
      admin: 'SystemAuto',
      date: '03.11.2025',
      permanent: true
    },
    {
      id: 3,
      nickname: 'GriefKing777',
      reason: 'Использование багов мира',
      admin: 'SystemAuto',
      date: '01.11.2025',
      permanent: false,
      days: 30
    },
    {
      id: 4,
      nickname: 'NoobDestroyer',
      reason: 'Fly-хак',
      admin: 'SystemAuto',
      date: '28.10.2025',
      permanent: true
    },
    {
      id: 5,
      nickname: 'AutoMiner2024',
      reason: 'Авто-клик бот для фарма',
      admin: 'SystemAuto',
      date: '25.10.2025',
      permanent: true
    }
  ];

  const filteredPlayers = bannedPlayers.filter(player =>
    player.nickname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-minecraft-red text-shadow-pixel mb-4">
            БАНЛИСТ
          </h2>
          <p className="text-minecraft-darkgreen text-sm">
            Список забаненных игроков
          </p>
        </div>

        <Card className="bg-black/60 border-4 border-minecraft-darkgreen p-6 mb-6">
          <div className="flex items-center gap-3">
            <Icon name="Search" className="text-minecraft-green" size={20} />
            <Input
              placeholder="Поиск по нику..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-minecraft-darkgray border-2 border-minecraft-darkgreen text-minecraft-green placeholder:text-minecraft-gray"
            />
          </div>
        </Card>

        <div className="space-y-4">
          {filteredPlayers.map((player) => (
            <Card 
              key={player.id}
              className="bg-black/60 border-4 border-minecraft-darkgreen hover:border-minecraft-red transition-all p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-minecraft-gray flex items-center justify-center pixel-border flex-shrink-0">
                    <Icon name="UserX" size={28} className="text-minecraft-darkgray" />
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-minecraft-red text-lg">
                        {player.nickname}
                      </h3>
                      <Badge 
                        className={`text-xs border-2 ${
                          player.permanent 
                            ? 'bg-minecraft-red border-black' 
                            : 'bg-minecraft-gold border-black'
                        }`}
                      >
                        {player.permanent ? 'ПЕРМАНЕНТ' : `${player.days} ДНЕЙ`}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-minecraft-darkgreen text-sm flex items-center gap-2">
                        <Icon name="AlertCircle" size={14} />
                        <span className="text-minecraft-gray">Причина:</span> {player.reason}
                      </p>
                      <p className="text-minecraft-darkgreen text-sm flex items-center gap-2">
                        <Icon name="Shield" size={14} />
                        <span className="text-minecraft-gray">Забанил:</span> {player.admin}
                      </p>
                      <p className="text-minecraft-darkgreen text-sm flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        <span className="text-minecraft-gray">Дата:</span> {player.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {filteredPlayers.length === 0 && (
            <Card className="bg-black/60 border-4 border-minecraft-darkgreen p-12 text-center">
              <Icon name="Search" className="text-minecraft-gray mx-auto mb-4" size={48} />
              <p className="text-minecraft-gray">
                Игрок не найден в банлисте
              </p>
            </Card>
          )}
        </div>

        <Card className="bg-black/60 border-4 border-minecraft-gold mt-8 p-6">
          <div className="flex items-start gap-4">
            <Icon name="Info" className="text-minecraft-gold flex-shrink-0" size={24} />
            <div className="text-sm">
              <p className="text-minecraft-darkgreen mb-2">
                На анархия сервере банят только за читы и дюпы. Всё остальное разрешено.
              </p>
              <p className="text-minecraft-gray text-xs">
                Если ты забанен по ошибке, пиши в Discord
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
