'use client';
import { Divider } from '@nextui-org/divider';
import { Button, Image } from '@nextui-org/react';
import AboutCompany from './components/about';
import Activity from './components/activity';
import CardList from './components/cards';
import EmblaCarousel from './components/emblaCarousel';
import Footer from './components/footer';
import Header from './components/header';
import HeaderAdd from './components/headerAdd';
import FadeInSection from './components/IntersectionObserver';
import Maps from './components/maps';
import { ThemeSwitcher } from './components/ThemeSwitcher';
export default function Home() {
  return (
    <main>
      <div className='flex flex-col h-screen justify-between'>
        <header>
          <HeaderAdd />
          <Header />
        </header>
        <main className='mb-auto '>
          <FadeInSection>
            <EmblaCarousel
              slides={[
                {
                  id: 1,
                  data: (
                    <div className='relative w-full h-screen'>
                      <div
                        className='absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-right-bottom md:bg-right-bottom '
                        style={{ backgroundImage: `url(monya_app.png)` }}></div>
                      <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-50 bg-opacity-70'></div>
                      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white '>
                        <img className='mt-4' src='logo.png' alt='Logo' width={200} />
                        <h2 className='text-success text-4xl md:text-6xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                          Скоро открытие
                        </h2>
                        <h2 className='text-2xl md:text-4xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                          Старт продаж с 20 июля
                        </h2>

                        <div className='flex flex-wrap justify-center items-center'>
                          <div className='text-2xl md:text-4xl font-bold drop-shadow-lg'>
                            Успей купить абонемент со
                          </div>
                          <div className='text-success text-2xl md:text-4xl font-bold ml-2 drop-shadow-lg'>
                            скидкой до
                          </div>
                          <div className='text-success text-2xl md:text-4xl font-bold ml-2 drop-shadow-lg'>
                            50%
                          </div>
                        </div>
                        <Button color='success' className='mt-4' href='#form'>
                          Оставить заявку
                        </Button>
                      </div>
                    </div>
                  ),
                },

                {
                  id: 2,
                  data: (
                    <div
                      className=' inset-0 flex items-center justify-start bg-black bg-opacity-50 flex-col'
                      style={{
                        backgroundImage: `url(monya_app.png)`,
                        width: '100%',
                        height: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom right 0',
                      }}>
                      <Image className='' radius='none' src={'logo.png'} alt='ff' width={200} />
                      <h2 className='text-success md:text-4xl font-bold mb-4'>Скоро открытие</h2>
                      <h2 className='text-2xl md:text-4xl font-bold mb-4 '>не будет старта</h2>

                      <div className='flex  justify-center items-center '>
                        <div className='flex wrap'>
                          <div className='text-2xl md:text-4xl font-bold  '>
                            Успей купить абонемент со
                          </div>
                          <div className='text-success md:text-4xl font-bold '>скидкой до</div>
                        </div>

                        <div className='text-success md:text-4xl font-bold '>50%</div>
                      </div>
                      {/* <div className='text-center text-white p-4 bg-black bg-opacity-70 rounded-lg'>
        <h2 className='text-2xl md:text-4xl font-bold mb-4 bg-success'>
          Старт продаж с {index + 1} июля
        </h2>
        <p className='text-lg md:text-2xl mb-2'>
          Успей купить абонемент со скидкой до 50%
        </p>
        <p className='text-sm md:text-lg'>Получить больше информации по тел.</p>
      </div> */}
                    </div>
                  ),
                },
              ]}
              options={{ loop: true }}
            />
          </FadeInSection>
          <FadeInSection>
            <div className=' m-4' id='about'>
              <h4 className='text-large font-medium'>О нас</h4>
              <Divider />
              <p className='text-small text-default-400'>тут не придумал текст</p>
            </div>
            <AboutCompany />
          </FadeInSection>
          <FadeInSection>
            <div className=' m-4' id='section'>
              <h4 className='text-large font-medium'>Секции</h4>
              <Divider />
              <p className='text-small text-default-400'>
                Концепция VOLIMFIT разработана для всей семьи и направлена на персональные и
                групповые тренировки для взрослых, подростков и детей от 5-ти лет. VOLIMFIT
                предлагает широкий спектр групповых тренировок для взрослых
              </p>
            </div>

            <Activity />
          </FadeInSection>
          <CardList />

          <FadeInSection>
            <Maps />
          </FadeInSection>
          <ThemeSwitcher />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </main>
  );
}
