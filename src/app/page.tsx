'use client';
import { Divider } from '@nextui-org/divider';
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image } from '@nextui-org/react';
import Link from 'next/link';
import AboutCompany from './components/about';
import Activity from './components/activity';
import EmblaCarousel from './components/emblaCarousel';
import EmblaTrainers from './components/EmblaTrainers';
import Footer from './components/footer';
import MyForm from './components/form';
import Header from './components/header';
import HeaderAdd from './components/headerAdd';
import FadeInSection from './components/IntersectionObserver';
import Maps from './components/maps';
import TrainerSlide from './components/TrainerSlide';
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
            <div className=' m-4' id='about'>
              <h1 className='text-large font-medium'>
                Тренера
              </h1>
              <Divider />
              {/* <p className='text-small text-default-400'></p> */}
            </div>
            <div className='container mx-auto p-4 max-w-7xl'>
            <EmblaTrainers
             slides={[
              {
                id: 1,
                data: (
       
                  <TrainerSlide
                  name="Виданович Момчило"
                  title="Основатель фитнес-клуба VOLIMFIT"
                  education="Высшее физкультурное (БАГСУ), Школа олимпийского резерва при ВВА"
                  experience="10 лет"
                  specializations={[
                    "Коррекция фигуры, жиросжигание и набор мышечной массы",
                    "Функциональный и силовой тренинг",
                    "Подготовка к ГТО и соревнованиям",
                    "Реабилитация после травм",
                    "ОФП для детей"
                  ]}
                  achievements={[
                    "ТОП-5 в категории Men’s Physique на чемпионате МО по бодибилдингу (2017)",
                    "Чемпион России по регби (2009)"
                  ]}
                  imageSrc="/trainer_1.jpg"
                  roles={["Персональный тренер", "Тренер групповых программ"]}
                />
                ),
              },

              {
                id: 2,
                data: (
                  <TrainerSlide
                  name="Каширский Артём"
                  title="Персональный тренер / Тренер групповых детских программ"
                  education="Училище олимпийского резерва"
                  experience="6 лет"
                  specializations={[
                    "Коррекция фигуры, снижение веса и набор мышечной массы",
                    "Составление плана тренировок",
                    "Силовой тренинг, функциональные тренировки, развитие выносливости",
                    "Реабилитация после травм",
                    "Нутрициология, составление рациона питания под цели клиента",
                    "Тэг-регби",
                    "ОФП для детей",
                    "Стретчинг"
                  ]}
                  achievements={[
                    "Мастер спорта по регби",
                    "3-х кратный Чемпион Европы по регби",
                    "Чемпион России по регби"
                  ]}
                  imageSrc="/trainer_2.jpg"  // Замените на правильный путь к изображению
                  roles={["Персональный тренер", "Тренер групповых программ", "Мастер-тренер 💪"]}
                />
                
                ),
              },
              {
                id: 3,
                data: (
                  <TrainerSlide
                  name="Морозова Ольга"
                  title="Персональный тренер / Тренер групповых программ"
                  education="Высшее физкультурное"
                  experience="20 лет"
                  specializations={[
                    "Коррекция нарушений осанки (работа со сколиозами у детей и взрослых)",
                    "Коррекция веса и фигуры",
                    "TRX",
                    "Pilates",
                    "Мастер тайского массажа (с 2010)"
                  ]}
                  achievements={[
                    "2 взрослый разряд по спортивной гимнастике",
                    "Выпускница института Сеченова по специализации «Антиэйджинг» (2023)",
                    "Выпускница Национального института здоровья по направлению «инструктор йоги» (2009)",
                    "Сертифицированный тренер Института Пилатса (2007)",
                    "Сертифицированный мастер-тренер FPA (2006)",
                    "Сертифицированный тренер по бодибилдингу и фитнесу FPA (2004)",
                    "Сертификат «Традиционный тайский массаж: СПА-мастер»"
                  ]}
                  imageSrc="/trainer_3.jpg"  // Замените на правильный путь к изображению
                  roles={["Персональный тренер", "Тренер групповых программ", "Мастер-тренер 💪"]}
                />
                
                ),
              },
              {
                id: 4,
                data: (
                  <TrainerSlide
                  name="Костенко Дарья"
                  title="Персональный тренер / Тренер групповых программ"
                  education="Высшее педагогическое"
                  experience="12 лет"
                  specializations={[
                    "Тренировки во время беременности",
                    "Восстановление после беременности и родов",
                    "Intensive training",
                    "BodyStrong",
                    "Хореография",
                    "Стретчинг",
                    "ОФП для детей"
                  ]}
                  achievements={[
                    "Призер Всероссийских соревнований по фитнес-аэробике",
                    "В составе шоу-балета победителей всероссийских танцевальных конкурсов",
                    "Участница фитнес конвенций",
                    "Сертификат «Особенности фитнес-тренировок беременных», Ассоциация профессионалов фитнеса FPA (2019)",
                    "Сертифицированный тренер BODYPUMP от Les Mills (2018)",
                    "Сертификат «Group trainer course TRXtraining» (2018)",
                    "Сертификат «Тренер TRX», Анатомия фитнеса (2017)",
                    "Сертификат «Инструктор по функциональным тренировкам и тренировкам на тренажере SYNRGY», семинар по программе международной академии Life Fitness (2017)",
                    "Сертификат «Тренер групповых программ», ITS Варвары Медведевой (2016)"
                  ]}
                  imageSrc="/trainer_4.jpg"  // Замените на правильный путь к изображению
                  roles={["Персональный тренер", "Тренер групповых программ", "Тренер 💪"]}
                />
                
                ),
              },
              {
                id: 5,
                data: (
                  <TrainerSlide
                  name="Костенко Дарья"
                  title="Персональный тренер / Тренер групповых программ"
                  education="Высшее педагогическое"
                  experience="12 лет"
                  specializations={[
                    "Тренировки во время беременности",
                    "Восстановление после беременности и родов",
                    "Intensive training",
                    "BodyStrong",
                    "Хореография",
                    "Стретчинг",
                    "ОФП для детей"
                  ]}
                  achievements={[
                    "Призер Всероссийских соревнований по фитнес-аэробике",
                    "В составе шоу-балета победителей всероссийских танцевальных конкурсов",
                    "Участница фитнес конвенций",
                    "Сертификат «Особенности фитнес-тренировок беременных», Ассоциация профессионалов фитнеса FPA (2019)",
                    "Сертифицированный тренер BODYPUMP от Les Mills (2018)",
                    "Сертификат «Group trainer course TRXtraining» (2018)",
                    "Сертификат «Тренер TRX», Анатомия фитнеса (2017)",
                    "Сертификат «Инструктор по функциональным тренировкам и тренировкам на тренажере SYNRGY», семинар по программе международной академии Life Fitness (2017)",
                    "Сертификат «Тренер групповых программ», ITS Варвары Медведевой (2016)"
                  ]}
                  imageSrc="/trainer_5.jpg"  // Замените на правильный путь к изображению
                  roles={["Персональный тренер", "Тренер групповых программ", "Тренер 💪"]}
                />
                
                ),
              },
              {
                id: 6,
                data: (
                  <TrainerSlide
                  name="Хижняков Владислав"
                  title="Персональный тренер / Тренер групповых программ"
                  education="Спортивная школа олимпийского резерва (МГФСО)"
                  experience="3 года"
                  specializations={[
                    "Бокс: групповые и индивидуальные занятия по боксу"
                  ]}
                  achievements={[
                    "КМС по кикбоксингу",
                    "2 место на чемпионате России по кикбоксингу (2024)",
                    "3 место на кубке Москвы по кикбоксингу (2024)",
                    "1 место на кубке Москвы по боксу (2023)",
                    "3 место на чемпионате и первенстве Москвы по боксу (2023)"
                  ]}
                  imageSrc="/trainer_6.jpg"  // Замените на правильный путь к изображению
                  roles={["Персональный тренер", "Тренер групповых программ", "Тренер 💪"]}
                />
                
                
                
                ),
              },
              {
                id: 7,
                data: (
                  <TrainerSlide
                  name="Шаляпина Ксения"
                  title="Персональный тренер / Тренер групповых программ"
                  education="Училище Олимпийского резерва Москомспорта"
                  experience="3 года"
                  specializations={[
                    "Постановка техники выполнения упражнений",
                    "Силовые тренировки, направленные на жиросжигание/набор мышечной массы",
                    "Функциональный тренинг и упражнения на выносливость",
                    "Коррекция фигуры, гармонизация пропорций тела",
                    "Реабилитационный фитнес, ЛФК",
                    "BodyPump, BodyFight",
                    "Подготовка к ГТО"
                  ]}
                  achievements={[
                    "КМС по Карате Киокушинкай",
                    "Многократный победитель городских и областных соревнований по спарринговой технике Кумитэ и Кихон Ката в Карате Киокушинкай"
                  ]}
                  imageSrc="/trainer_7.jpg"  // Замените на правильный путь к изображению
                  roles={["Персональный тренер", "Тренер групповых программ", "Тренер 💪"]}
                />
                
                
                
                
                ),
              },
            ]}
            options={{ loop: true, duration: 30 }}
          />
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
        <footer>
          <Footer />
        </footer>
      </div>
    </main>
  );
}
