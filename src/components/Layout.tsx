import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout relative min-h-screen flex flex-col">
      <Header />
      {/* Dropdown blur overlay - appears when nav dropdown is open */}
      <div className="nav-blur-overlay" aria-hidden="true" />
      <main className="main-content flex-grow">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
