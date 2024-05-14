import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Layout.module.scss";

import Container from "../Container/Container";
import clsx from "clsx";

const Layout = () => {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.link, { [css.active]: isActive });

  return (
    <>
      <header className={css.header}>
        <Container className={css.container}>
          <NavLink to="/" className={css.logo}>
            Events
          </NavLink>
          <nav>
            <ul className={css.navList}>
              <li>
                <NavLink to="/" className={getNavLinkClassName}>
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink>Add Event</NavLink>
              </li> */}
            </ul>
          </nav>
        </Container>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
