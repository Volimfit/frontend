'use client';
import { Divider } from '@nextui-org/divider';
import AboutCompany from './components/about';
import Activity from './components/activity';
import CardList from './components/cards';
import EmblaCarousel from './components/emblaCarousel';
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
          <EmblaCarousel slides={Array.from(Array(5).keys())} options={{ loop: true }} />
          <div className=' m-4' id='about'>
            <h4 className='text-large font-medium'>О нас</h4>
            <Divider />
            <p className='text-small text-default-400'>тут не придумал текст</p>
          </div>
          <AboutCompany />
          <div className=' m-4' id='section'>
            <h4 className='text-large font-medium'>Секции</h4>
            <Divider />
            <p className='text-small text-default-400'>
              Концепция VOLIMFIT разработана для всей семьи и направлена на персональные и групповые
              тренировки для взрослых, подростков и детей от 5-ти лет. VOLIMFIT предлагает широкий
              спектр групповых тренировок для взрослых
            </p>
          </div>

          <Activity />

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
