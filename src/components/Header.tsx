import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'ГЛАВНАЯ', icon: 'Home' },
    { id: 'news', label: 'НОВОСТИ', icon: 'Newspaper' },
    { id: 'donate', label: 'ДОНАТ', icon: 'Wallet' },
    { id: 'banlist', label: 'БАНЛИСТ', icon: 'ShieldAlert' },
    { id: 'wiki', label: 'ВИКИ', icon: 'Book' },
  ];

  return (
    <header className="bg-black/80 border-b-4 border-minecraft-green sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-minecraft-green flex items-center justify-center pixel-border text-black">
              <span className="text-2xl">⛏</span>
            </div>
            <h1 className="text-minecraft-green text-xl md:text-2xl text-shadow-pixel">
              ANARCHY
            </h1>
          </div>

          <nav className="hidden md:flex gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                variant={activeSection === item.id ? 'default' : 'outline'}
                className={`text-xs ${
                  activeSection === item.id
                    ? 'bg-minecraft-green text-black hover:bg-minecraft-darkgreen'
                    : 'border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-black'
                } transition-all duration-200`}
              >
                <Icon name={item.icon as any} size={14} className="mr-1" />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-black"
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>

        <nav className="md:hidden mt-4 grid grid-cols-2 gap-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              variant={activeSection === item.id ? 'default' : 'outline'}
              className={`text-xs ${
                activeSection === item.id
                  ? 'bg-minecraft-green text-black hover:bg-minecraft-darkgreen'
                  : 'border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-black'
              } transition-all duration-200`}
            >
              <Icon name={item.icon as any} size={12} className="mr-1" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
