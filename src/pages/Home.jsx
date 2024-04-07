import { useEffect, useRef, useState } from 'react';
import Features from '../Features';
import Footer from '../Footer';
import Form from '../Form';
import { Header } from '../Header';
import Nav from '../Nav';
import Optimize from '../Optimize';
import { Pricing } from '../Pricing';
import Questions from '../Questions';
import Sidebar from '../Sidebar';
import Views from '../Views';

function Home() {
  const nav = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  // Scroll Function
  function scrollToView(e, id) {
    e.preventDefault();
    if (!id) return;
    const element = document.querySelector(`#${id}`);
    const navHeight = nav.current.getBoundingClientRect().height;
    const fixedNav = nav.current.classList.contains('sticky');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }

    // if (sidebar.classList.contains('show')) sidebar.classList.remove('show');

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Nav
        scrollToView={scrollToView}
        nav={nav}
        onSidebarOpen={handleOpenSidebar}
        sidebarOpen={sidebarOpen}
      />
      <Header />
      <Views />
      <Features />
      <Pricing />
      <Form />
      <Questions />
      <Optimize />
      <Footer />
      <Sidebar
        sidebarOpen={sidebarOpen}
        onSidebarClose={handleCloseSidebar}
        scrollToView={scrollToView}
      />
    </>
  );
}

export default Home;
