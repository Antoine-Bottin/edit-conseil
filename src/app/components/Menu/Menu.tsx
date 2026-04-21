'use client';

import { IoHomeOutline, IoMailOutline } from 'react-icons/io5';
import { FaDollarSign } from 'react-icons/fa';
import { useScroll } from '~/app/hooks/useScroll';

import './styles.scss';
import { scrollToSection } from '~/app/utils/scroll';

const Menu = ({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const scrollPosition = useScroll(scrollRef);

  const windowsHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  const percentageScrolled = windowsHeight
    ? (scrollPosition.y / windowsHeight) * 100
    : 0;
  const menuLeftPosition = Math.max(0, 50 - percentageScrolled);

  const menuContainerClasses =
    menuLeftPosition < 45
      ? 'menu-container'
      : 'menu-container menu-container--centered';

  return (
    <nav className={menuContainerClasses}>
      <div className="menu-container__icons-wrapper">
        <IoHomeOutline
          className="menu-container__icons-wrapper__icon__main"
          onClick={() => scrollToSection('main')}
          title="Home"
        />
        <FaDollarSign
          className="menu-container__icons-wrapper__icon__myself"
          onClick={() => scrollToSection('myself')}
          title="Myself"
        />
        <IoMailOutline
          className="menu-container__icons-wrapper__icon__numbers"
          onClick={() => scrollToSection('numbers')}
          title="Numbers"
        />{' '}
        <IoMailOutline
          className="menu-container__icons-wrapper__icon__services"
          onClick={() => scrollToSection('services')}
          title="Services"
        />{' '}
        <IoMailOutline
          className="menu-container__icons-wrapper__icon__prices"
          onClick={() => scrollToSection('prices')}
          title="Prices"
        />
        <IoHomeOutline
          className="menu-container__icons-wrapper__icon__contact"
          onClick={() => scrollToSection('contact')}
          title="Contact"
        />
      </div>
    </nav>
  );
};

export default Menu;
