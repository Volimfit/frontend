/* eslint-disable react/no-unescaped-entities */
'use client';

import FadeCarousel from './fadeCarousel';

export default function AboutCompany() {
  return (
    <div className='container mx-auto p-4 max-w-7xl'>
      <div className='flex flex-col md:flex-row items-stretch gap-4'>
        <div className='md:w-1/2 w-full'>
          <div className='text-large text-default-600'>
            VOLIMFIT предлагает расширенный спектр спортивных услуг и подходит для тех, кто ищет
            продуманный до мелочей фитнес-клуб, сочетающий зоны для эффективных тренировок и
            полноценного отдыха.
            <br />
            Общая площадь клуба 560 кв. м. <br />
            <br />В VOLIMFIT Вы найдете просторный тренажерный зал с панорамными окнами и
            супер-технологичным оборудованием от Foreman. Отдельно выделено зона crossfit, зал
            единоборств, зал групповых тренировок и массажный кабинет.
          </div>
        </div>
        <div className='md:w-1/2 '>
          <FadeCarousel
            slides={Array.from(Array(2).keys())}
            options={{ loop: true, duration: 30 }}
          />
        </div>
      </div>
    </div>
  );
}
