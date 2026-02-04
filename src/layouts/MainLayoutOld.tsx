import type { ReactNode } from "react";
import { useState } from "react";
import LstLogo from "../components/logos/LstLogo";
import { Link } from "react-router-dom";


interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  const currentYear = new Date().getFullYear();

  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(prev => !prev);

  return (
    <div className="body-container">
      <header className="header-container">
        <div className="left-content">
          <Link to="/" reloadDocument>
            <LstLogo color="white" width="50px" />
          </Link>
        </div>
        <div className="right-content"> {/* Needed to be fixed!!!*/}
          <nav className={`nav-menu ${isActive ? 'active' : ''}`}>
            <div className={`nav-menu-hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
              &#9776;
            </div>
            <ul>
              <li
                className={`nav-menu-close-button ${isActive ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                ✕
              </li>
              <li>
                <Link to="/news">最新消息 News</Link>
              </li>
              <li>
                <Link to="/events">語言學沙龍 Events</Link>
              </li>
              <li>
                <Link to="/members">團隊成員 Members</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        &copy; 2006-{currentYear} Student Committee, Linguistic Society of Taiwan. All Rights Reserved.
      </footer>
    </div>
  )
}

export default MainLayout;