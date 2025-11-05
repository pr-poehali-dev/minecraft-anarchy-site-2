import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [online, setOnline] = useState(1337);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnline(Math.floor(Math.random() * 500) + 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText('play.anarchy.ru');
  };

  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-block animate-float">
            <div className="w-32 h-32 bg-minecraft-green flex items-center justify-center pixel-border mx-auto">
              <span className="text-7xl">⚔</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-minecraft-green text-shadow-pixel mb-4 leading-tight">
            ANARCHY SERVER
          </h1>
          
          <p className="text-minecraft-darkgreen text-sm md:text-base max-w-2xl mx-auto">
            NO RULES • NO ADMINS • PURE CHAOS
          </p>

          <Card className="bg-black/60 border-4 border-minecraft-green max-w-2xl mx-auto p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Icon name="Users" className="text-minecraft-green" size={24} />
                <div>
                  <p className="text-xs text-minecraft-darkgreen">ОНЛАЙН</p>
                  <p className="text-2xl text-minecraft-green font-bold">{online}</p>
                </div>
              </div>

              <div className="bg-minecraft-darkgray border-2 border-minecraft-darkgreen p-4 flex items-center justify-between">
                <code className="text-minecraft-green text-sm md:text-base">
                  play.anarchy.ru
                </code>
                <Button
                  onClick={copyIP}
                  size="sm"
                  className="bg-minecraft-gold text-black hover:bg-minecraft-yellow border-2 border-black"
                >
                  <Icon name="Copy" size={16} />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-minecraft-darkgray border-2 border-minecraft-darkgreen p-3">
                  <p className="text-xs text-minecraft-darkgreen mb-1">VERSION</p>
                  <p className="text-minecraft-green text-sm">1.20.4</p>
                </div>
                <div className="bg-minecraft-darkgray border-2 border-minecraft-darkgreen p-3">
                  <p className="text-xs text-minecraft-darkgreen mb-1">UPTIME</p>
                  <p className="text-minecraft-green text-sm">24/7</p>
                </div>
                <div className="bg-minecraft-darkgray border-2 border-minecraft-darkgreen p-3">
                  <p className="text-xs text-minecraft-darkgreen mb-1">WORLD</p>
                  <p className="text-minecraft-green text-sm">250K</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-minecraft-red text-white hover:bg-minecraft-darkred text-base border-4 border-black pixel-border py-6"
              >
                <Icon name="Gamepad2" size={20} className="mr-2" />
                НАЧАТЬ ИГРАТЬ
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12">
            <Card className="bg-black/40 border-2 border-minecraft-darkgreen p-6 hover:border-minecraft-green transition-all">
              <Icon name="Sword" className="text-minecraft-red mx-auto mb-3" size={32} />
              <h3 className="text-minecraft-green text-sm mb-2">PVP БЕЗ ОГРАНИЧЕНИЙ</h3>
              <p className="text-minecraft-gray text-xs">Сражайся где угодно</p>
            </Card>
            <Card className="bg-black/40 border-2 border-minecraft-darkgreen p-6 hover:border-minecraft-green transition-all">
              <Icon name="Pickaxe" className="text-minecraft-gold mx-auto mb-3" size={32} />
              <h3 className="text-minecraft-green text-sm mb-2">ГРИФ РАЗРЕШЁН</h3>
              <p className="text-minecraft-gray text-xs">Ломай и строй что хочешь</p>
            </Card>
            <Card className="bg-black/40 border-2 border-minecraft-darkgreen p-6 hover:border-minecraft-green transition-all">
              <Icon name="Flame" className="text-minecraft-purple mx-auto mb-3" size={32} />
              <h3 className="text-minecraft-green text-sm mb-2">ВЫЖИВАЙ ИЛИ УМРИ</h3>
              <p className="text-minecraft-gray text-xs">Только хардкор</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
