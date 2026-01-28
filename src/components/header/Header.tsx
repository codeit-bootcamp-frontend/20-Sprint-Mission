import { Link, useLocation } from 'react-router-dom';
import { headerContainer, navItem, profileImage } from './header.styles';
import { cn } from '@shared/utils/cn';

import LogoPc from '../header/svgs/logo/logo.svg';
import LogoMobile from '../header/svgs/logo/logo-mobile.svg';
import ProfileIcon from '../header/svgs/profile/profile.svg';

export function Header() {
  const { pathname } = useLocation();
  const isFreePage = pathname === '/';
  const isItemsPage = pathname === '/items';

  return (
    <header className={headerContainer()}>
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={LogoPc}
            alt="logo"
            className="hidden md:block h-[52px] w-[156px] object-contain cursor-pointer"
          />
          <img
            src={LogoMobile}
            alt="logo"
            className="block md:hidden h-[40px] w-[84px] object-contain cursor-pointer"
          />
        </Link>

        <nav className="ml-8" aria-label="주요 메뉴">
          <ul className="flex items-center gap-4 list-none p-0 m-0">
            <li>
              <Link
                to="/"
                className={cn(navItem({ active: isFreePage }))}
                aria-current={isFreePage ? 'page' : undefined}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                to="/items"
                className={cn(navItem({ active: isItemsPage }))}
                aria-current={isItemsPage ? 'page' : undefined}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <img src={ProfileIcon} alt="profile" className={profileImage()} />
    </header>
  );
}
