'use client';
import AboutCompany from '@/app/components/about';
import Activity from '@/app/components/activity';
import EmblaCarousel from '@/app/components/emblaCarousel';
import EmblaTrainers from '@/app/components/EmblaTrainers';
import Footer from '@/app/components/footer';
import MyForm from '@/app/components/form';
import Header from '@/app/components/header';
import HeaderAdd from '@/app/components/headerAdd';
import FadeInSection from '@/app/components/IntersectionObserver';
import Layout from '@/app/components/layout';
import Maps from '@/app/components/maps';
import TrainerSlide from '@/app/components/TrainerSlide';
import { trainers } from '@/app/data/constant';
import { Divider } from '@nextui-org/divider';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>VOLIMFIT - Фитнес-клуб у дома</title>
        <meta name="description" content="Фитнес-клуб, где каждая деталь продумана до мелочей. Тренировки для всей семьи в Москве!" />
        <meta name="keywords" content="фитнес, спортзал, тренировки, Crossfit, семейный фитнес, Москва" />
        <meta property="og:title" content="VOLIMFIT - Фитнес-клуб у дома" />
        <meta property="og:description" content="Тренировки для всей семьи в Москве! Присоединяйтесь к нашему фитнес-клубу и получите абонемент со скидкой!" />
        <meta property="og:url" content="https://volimfit.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://volimfit.ru/logo.png" />
      </Head>
      <Layout>
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
                              Скоро официально открытие
                            </h2>
                            {/* <h2 className='text-2xl md:text-4xl font-bold mb-4 font-Montserrat drop-shadow-lg'>
                            Старт продаж с 20 июля
                          </h2> */}

                            <div className='flex flex-wrap justify-center items-center mb-4'>
                              <div className='text-2xl md:text-4xl font-bold drop-shadow-lg'>
                                Успей купить абонемент со
                              </div>
                              <div className='text-success text-2xl md:text-4xl font-bold ml-2 drop-shadow-lg'>
                                скидкой
                              </div>
                              {/* <div className='text-success text-2xl md:text-4xl font-bold ml-2 drop-shadow-lg'>
                              50%
                            </div> */}
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
                              Фитнес у дома
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
                <h1 className='text-large font-medium'>
                  Фитнес-клуб, где каждая деталь продумана до мелочей!
                </h1>
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
                  <h2 className='text-large text-default-600 mb-4'>
                    Концепция VOLIMFIT разработана для всей семьи и направлена на персональные и
                    групповые тренировки для взрослых, подростков и детей от 5-ти лет.
                  </h2>

                  <Activity />
                </div>
              </div>
              <FadeInSection>
                <div className=' m-4' id='trainers'>
                  <h2 className='text-large font-medium'>
                    Тренеры
                  </h2>
                  <Divider />

                </div>
                <div className='container mx-auto p-4 max-w-7xl'>
                <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
                {trainers.map((item, index) => (
        <Link  key={index} href={`/trainers/${item.link}`} className="mb-4">
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              
              alt={item.title}
              className="w-full object-cover "
              src={item.imageSrc}
            />
          </CardBody>
          <CardFooter className="flex-col content-start items-start">
            <b className="text-left">{item.name}</b>
            <p className="text-default-500 text-left">{item.title}</p>
          </CardFooter>
        </Card>
        </Link>
      ))}   </div>
                </div>
              </FadeInSection>
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
                    Оставьте заявку и получите абонемент со скидкой
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
          
          </Layout>
      
    </>
  );
}
