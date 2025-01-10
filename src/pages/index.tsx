'use client';
import AboutCompany from '@/app/components/about';
import Activity from '@/app/components/activity';
import EmblaCarousel from '@/app/components/emblaCarousel';
import MyForm from '@/app/components/form';
import FadeInSection from '@/app/components/IntersectionObserver';
import Layout from '@/app/components/layout';
import Maps from '@/app/components/maps';
import SlideGenerator from '@/app/components/slideGenerator';
import SlideGeneratorSecond from '@/app/components/slideGeneratorSecond';
import { trainers } from '@/app/data/constant';
import { Divider } from '@nextui-org/divider';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';
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
        <meta property="og:image" content="https://volimfit.ru/logo-shared.png" />
        <link rel="apple-touch-icon" sizes="300x300" href="https://volimfit.ru/logo-shared.png"></link>
        <link rel="image_src" href="https://volimfit.ru/logo-shared.png"></link>
        <link rel="icon" href="https://volimfit.ru/logo-shared.png"></link>
      </Head>
      <Layout>
        <main className='mb-auto '>
          <FadeInSection>
            <EmblaCarousel
              slides={[
                {
                  id: 1,
                  data: (
                    <SlideGenerator/>
                  ),
                },
                {
                  id: 2,
                  data: (
                    <SlideGeneratorSecond/>
                  ),
                },
                {
                  id: 3,
                  data: (
                    <div className='relative w-full h-screen flex items-center justify-center'>
                     
                           <Image
        src="/monya_app.png" // Убедитесь, что файл находится в папке public
        alt="Фоновое изображение"
        fill // Занимает весь контейнер
        className="object-cover object-[right_0%_bottom_0%]" // Настраиваем позицию через Tailwind
        sizes='100vw'
      />
                      <div className='absolute inset-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-50 bg-opacity-70'></div>
                      
                        <div className='flex flex-col items-center  h-full z-10    justify-start  '>
                        <Image
  className="mt-20 w-64 md:w-72 lg:w-96 mb-40 md:mb-40"
  src="/logo.png" // Путь к изображению (относительный путь из папки public)
  alt="Logo"
  width={384} // Ширина изображения (в пикселях, соответствует lg:w-96)
  height={384} // Высота изображения (задайте реальную пропорцию вашего лого)
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
  src="/dumbbell.png" // Путь к изображению в папке public
  alt="Icon 2"
  className="w-7 md:w-16"
  width={64} // Ширина изображения (подберите реальную ширину, соответствует md:w-16)
  height={64} // Высота изображения (сохраните пропорции)
  style={{ borderRadius: '0px' }} // Заменяет `radius="none"` на inline-стиль
/>
                              <p className='mt-2 text-xs md:text-xl'>
                                Тренажерный <br /> зал
                              </p>
                            </div>
                            <div className='flex flex-col items-center'>
                              <Image
                               
                                src='/martial-arts.png'
                                alt='Icon 3'
                                width={64} // Ширина изображения (подберите реальную ширину, соответствует md:w-16)
                                height={64} // Высота изображения (сохраните пропорции)
                                className='w-7 md:w-16'
                              />
                              <p className='mt-2  text-xs md:text-xl'>Единоборства</p>
                            </div>
                            <div className='flex flex-col items-center'>
                              <Image
                                width={64} // Ширина изображения (подберите реальную ширину, соответствует md:w-16)
                                height={64} // Высота изображения (сохраните пропорции)
                                src='/heart.png'
                                alt='Icon 4'
                                className='w-7 md:w-16'
                              />
                              <p className='mt-2 text-xs md:text-xl'>Crossfit</p>
                            </div>

                            <div className='flex flex-col items-center'>
                              <Image
                             
                                width={64} // Ширина изображения (подберите реальную ширину, соответствует md:w-16)
                                height={64} // Высота изображения (сохраните пропорции)
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
  <div className="m-4" id="trainers">
    <h2 className="text-large font-medium">Тренеры</h2>
    <Divider />
  </div>
  <div className="container mx-auto p-4 max-w-7xl">
    <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
      {trainers.map((item, index) => (
        <Link
          key={index}
          href={`/trainers/${item.link}`}
          className="mb-4 "
        >
          <Card
            shadow="sm"
            isPressable
            className="flex flex-col justify-between h-full w-full"
          >
           
              <CardBody className="overflow-visible p-0 z-0 flex-none justify-end  ">
                {/* Заголовок на изображении */}
                <CardHeader className="absolute bg-[#000000c4] z-20 flex-col items-start min-h-[80px] ">
                  <h4 className="text-white font-medium text-large">
                    {item.name.split(" ").map((el, i) => (
                      <p key={i}>{el}</p>
                    ))}
                  </h4>
                </CardHeader>
                {/* Исправленный блок с изображением */}
                <div className="relative w-full aspect-[3398/5097]">
                  <Image
                    src={item.imageSrc} // Динамический путь изображения
                    alt={item.title} // Альтернативный текст
                    fill // Автоматическая адаптация под размер контейнера
                    priority
                    className="object-cover rounded-lg"
                      sizes="25vw"
                  />
                </div>
              </CardBody>
           
            {/* Подвал карточки */}
            <CardFooter className="flex-col content-start items-start flex-grow min-h-[40px]">
              <p className="text-default-500 text-left">{item.title}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
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
                  backgroundColor: '#00e4d9',
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
