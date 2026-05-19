'use client';

import {
  IoHomeOutline,
  IoShareSocial,
  IoStatsChartSharp,
} from 'react-icons/io5';
import { FaEuroSign } from 'react-icons/fa';
import { useScroll } from '~/app/hooks/useScroll';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '~/app/utils/scroll';

import './styles.scss';
import { LiaUniversitySolid } from 'react-icons/lia';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const Menu = ({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const pathname = usePathname();
  const scrollPosition = useScroll(scrollRef);

  if (pathname !== '/') {
    return null;
  }

  const windowsHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  const percentageScrolled = windowsHeight
    ? (scrollPosition.y / windowsHeight) * 100
    : 0;
  const menuLeftPosition = Math.max(0, 50 - percentageScrolled);

  const menuContainerClasses =
    menuLeftPosition < 45
      ? 'menu-container'
      : 'menu-container menu-container--centered';

  // 2. CORRECTION SYNTAXE : Le return renvoie directement le JSX, sans accolades globales
  return (
    <nav className={menuContainerClasses}>
      <div className="menu-container__icons-wrapper">
        <IoHomeOutline
          className="menu-container__icons-wrapper__icon__main"
          onClick={() => scrollToSection('main')}
          title="Home"
        />
        <LiaUniversitySolid
          className="menu-container__icons-wrapper__icon__myself"
          onClick={() => scrollToSection('myself')}
          title="Myself"
        />
        <IoStatsChartSharp
          className="menu-container__icons-wrapper__icon__numbers"
          onClick={() => scrollToSection('numbers')}
          title="Numbers"
        />
        <FaHandshakeSimple
          className="menu-container__icons-wrapper__icon__services"
          onClick={() => scrollToSection('services')}
          title="Services"
        />
        <FaEuroSign
          className="menu-container__icons-wrapper__icon__prices"
          onClick={() => scrollToSection('prices')}
          title="Prices"
        />
        <HiOutlineChatBubbleLeftRight
          className="menu-container__icons-wrapper__icon__contact"
          onClick={() => scrollToSection('contact')}
          title="Contact"
        />
        <IoShareSocial
          className="menu-container__icons-wrapper__icon__contact"
          onClick={() => scrollToSection('social')}
          title="Social"
        />
      </div>
    </nav>
  );
};

export default Menu;
