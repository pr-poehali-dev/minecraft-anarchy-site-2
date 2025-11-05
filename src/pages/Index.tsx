import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Donate from '@/components/Donate';
import Banlist from '@/components/Banlist';
import Wiki from '@/components/Wiki';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-minecraft-darkgray">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'news' && <News />}
        {activeSection === 'donate' && <Donate />}
        {activeSection === 'banlist' && <Banlist />}
        {activeSection === 'wiki' && <Wiki />}
      </main>
      
      <footer className="bg-black/50 border-t-4 border-minecraft-green py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-minecraft-darkgreen text-xs">© 2025 ANARCHY SERVER</p>
          <p className="text-minecraft-gray text-xs mt-2">NO RULES. NO MERCY.</p>
        </div>
      </footer>
    </div>
  );
}