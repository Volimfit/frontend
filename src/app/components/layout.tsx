// components/Layout.tsx
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import HeaderAdd from '@/app/components/headerAdd';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header>
        <HeaderAdd />
        <Header />
      </header>
      <main className="mb-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
