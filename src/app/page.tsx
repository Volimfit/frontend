import CardList from './components/cards';
import CarouselComponent from './components/carousel';
import Footer from './components/footer';
import Header from './components/header';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col h-screen justify-between'>
        <header>
          {' '}
          <Header />
        </header>
        <main className='mb-auto '>
          <CarouselComponent />
          <div className='flex justify-center m-4'>
            <p> Преимущества</p>
          </div>
          <CardList />

          <ThemeSwitcher />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </main>
  );
}
