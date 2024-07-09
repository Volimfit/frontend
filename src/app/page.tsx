'use client';
import { Divider } from '@nextui-org/divider';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import AboutCompany from './components/about';
import Activity from './components/activity';
import EmblaCarousel from './components/emblaCarousel';
import Footer from './components/footer';
import MyForm from './components/form';
import Header from './components/header';
import HeaderAdd from './components/headerAdd';
import FadeInSection from './components/IntersectionObserver';
import Maps from './components/maps';
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
                    <div className='relative w-full h-screen flex items-center justify-center'>
                      <div
                        className='absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-right-bottom md:bg-right-bottom'
                        style={{ backgroundImage: `url(monya_app.png)` }}></div>
                      <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-50 bg-opacity-70'></div>
                      <div className='relative z-10 text-center text-white'>
                        <div className='flex flex-col items-center justify-center h-full'>
                          <Image
                            className='mt-4 w-64 md:w-72 lg:w-96 mb-40  md:mb-4'
                            src='logo.png'
                            alt='Logo'
                          />
                          <h2 className='text-success text-4xl md:text-6xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            Скоро открытие
                          </h2>
                          <h2 className='text-2xl md:text-4xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            Старт продаж с 20 июля
                          </h2>

                          <div className='flex flex-wrap justify-center items-center mb-4'>
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
                          <Button as={Link} color='success' className='mt-4' href='#form'>
                            Оставить заявку
                          </Button>
                        </div>
                      </div>
                    </div>
                  ),
                },

                {
                  id: 2,
                  data: (
                    <div className='relative w-full h-screen flex items-center justify-center'>
                      <div
                        className='absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-right-bottom md:bg-right-bottom'
                        style={{ backgroundImage: `url(monya_app.png)` }}></div>
                      <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-50 bg-opacity-70'></div>
                      <div className='relative z-10 text-center text-white'>
                        <div className='flex flex-col items-center justify-center h-full'>
                          <Image
                            className=' w-64 md:w-72 lg:w-96  mb-40  md:mb-4'
                            src='logo.png'
                            alt='Logo'
                          />
                          <h2 className='text-success text-4xl md:text-6xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            Фитнес У дома
                          </h2>
                          <h2 className='text-2xl md:text-4xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            для Вашей семьи
                          </h2>

                          <div className='flex flex-wrap justify-center items-center mb-4'>
                            <div className='text-2xl md:text-4xl font-bold drop-shadow-lg'></div>
                            <div className='text-success text-2xl md:text-4xl font-bold ml-2 drop-shadow-lg'></div>
                            <div className='text-success text-2xl md:text-4xl font-bold ml-2 drop-shadow-lg'></div>
                          </div>
                          <Button as={Link} color='success' className='mt-4' href='#form'>
                            Оставить заявку
                          </Button>
                        </div>
                      </div>
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
              <p className='text-small text-default-400'>
                Фитнес-клуб, где каждая деталь продумана до мелочей!
              </p>
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

          <FadeInSection>
            <div className='min-h-96    '>
              <div className=' m-4 z-10' id='form'>
                <h4 className='text-large font-medium'>Присоединяйтесь к нам</h4>
                <Divider />
                <p className='text-small text-default-400'>
                  Успейте купить абонемент со скидкой до 50%
                </p>
              </div>
              <MyForm />
            </div>
          </FadeInSection>

          <FadeInSection>
            <Maps />
          </FadeInSection>
          {/* <ThemeSwitcher /> */}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </main>
  );
}
