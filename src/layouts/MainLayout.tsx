import type { ReactNode } from "react";
import LstLogo from "../components/logos/LstLogo";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="body-container">
      <header className="header-container">
        <div className="left-content">
          <Link to="/" reloadDocument>
            <LstLogo color="white" width="50px" />
          </Link>
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