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
                            className='mt-4 w-64 md:w-72 lg:w-96 mb-20  md:mb-4'
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
                            className=' w-64 md:w-72 lg:w-96  mb-20  md:mb-4'
                            src='logo.png'
                            alt='Logo'
                          />
                          <h2 className='text-success text-4xl md:text-6xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            Фитнес У дома
                          </h2>
                          <h2 className='text-2xl md:text-4xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            для Вашей семьи
                          </h2>
                          <div className='flex flex-wrap justify-center items-start mb-4 space-x-4'>
                            <div className='flex flex-col items-center'>
                              <Image
                                radius='none'
                                src='/dumbbell.png'
                                alt='Icon 2'
                                className='w-7 md:w-16'
                              />
                              <p className='mt-2 text-xs md:text-xl'>
                                Тренажерный <br /> зал
                              </p>
                            </div>
                            <div className='flex flex-col items-center'>
                              <Image
                                radius='none'
                                src='/martial-arts.png'
                                alt='Icon 3'
                                className='w-7 md:w-16'
                              />
                              <p className='mt-2  text-xs md:text-xl'>Единоборства</p>
                            </div>
                            <div className='flex flex-col items-center'>
                              <Image
                                radius='none'
                                src='/heart.png'
                                alt='Icon 4'
                                className='w-7 md:w-16'
                              />
                              <p className='mt-2 text-xs md:text-xl'>Crossfit</p>
                            </div>

                            <div className='flex flex-col items-center'>
                              <Image
                                radius='none'
                                src='/facial-treatment.png'
                                alt='Icon 1'
                                className='w-7 md:w-16'
                              />
                              <p className='mt-2 text-xs md:text-xl'>Массаж</p>
                            </div>
                          </div>
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
              <h4 className='text-large font-medium'>
                Фитнес-клуб, где каждая деталь продумана до мелочей!
              </h4>
              <Divider />
              {/* <p className='text-small text-default-400'></p> */}
            </div>
            <AboutCompany />
          </FadeInSection>
          <FadeInSection>
            <div className='    ' id='section'>
              <div className='  container mx-auto flex w-full flex-col   max-w-7xl'>
                <h4 className='text-large font-medium'>Концепция</h4>
                <Divider />
                <p className='text-large text-default-600 mb-4'>
                  Концепция VOLIMFIT разработана для всей семьи и направлена на персональные и
                  групповые тренировки для взрослых, подростков и детей от 5-ти лет. VOLIMFIT
                  предлагает широкий спектр групповых тренировок для взрослых и детей.
                </p>

                <Activity />
              </div>
            </div>
            {/* </FadeInSection>

          <FadeInSection> */}
            <div className='min-h-96   inset-0 w-full h-full     '>
              <div
                className='min-h-32 md:min-h-48 container mx-auto max-w-7xl  p-4  animate-wave rounded-lg'
                id='form'
                style={{
                  backgroundImage: `url(/wave1.svg)`,
                  backgroundRepeat: 'no-repeat',

                  backgroundAttachment: 'local',
                  backgroundColor: '#3bc9db',
                }}>
                <h4 className='text-2xl font-medium '>Присоединяйтесь к нам</h4>
                <Divider className='bg-sky-950 mb-4 md:mb-0' />
                <p className='text-large text-default-500'>
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
