import { useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { links } from './data';

function Sidebar({ sidebarOpen, onSidebarClose, scrollToView }) {
  const sidebar = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', checkSidebar);
    return () => {
      window.removeEventListener('resize', checkSidebar);
    };
  });

  const checkSidebar = () => {
    const minWidth = 950;
    if (window.innerWidth < minWidth) return;
    if (window.innerWidth >= minWidth) {
      if (!sidebar.current.classList.contains('show')) return;
      sidebar.current.classList.remove('show');
      onSidebarClose();
    }
  };

  function clickSidebarLink(e, link) {
    sidebar.current.classList.remove('show');
    onSidebarClose();
    scrollToView(e, link);
  }

  return (
    <div ref={sidebar} className={`sidebar ${sidebarOpen && 'show'}`}>
      <div className='sidebar-center'>
        <button className='sidebar-close-btn' onClick={onSidebarClose}>
          <FaXmark fontSize={32} />
        </button>

        <ul className='sidebar-links'>
          {links.map((link, id) => (
            <li key={id} onClick={(e) => clickSidebarLink(e, link.href)}>
              <a className={`sidebar-link `} href={`#${link.href}`}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
