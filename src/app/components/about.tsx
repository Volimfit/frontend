/* eslint-disable react/no-unescaped-entities */
'use client';

import { Image } from '@nextui-org/react';

export default function AboutCompany() {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row items-stretch gap-4'>
        <div className='md:w-1/2 w-full'>
          <div>
            VOLIMFIT предлагает расширенный спектр спортивных услуг и подходит для тех, кто ищет
            продуманный до мелочей фитнес-клуб, сочетающий зоны для эффективных тренировок и
            полноценного отдыха.
            <br />
            Общая площадь клуба 560 кв. м.
            <br />В VOLIMFIT Вы найдете просторный тренажерный зал с панорамными окнами и
            супер-технологичным оборудованием от Foreman. Отдельно выделено зона crossfit, зал
            единоборств, зал групповых тренировок и массажный кабинет.
          </div>
        </div>
        <div className='md:w-1/2 w-full'>
          <Image
            src='fit.jpg'
            alt='Gym'
            width='100%'
            height='auto'
            style={{ borderRadius: '8px' }}
          />
        </div>
      </div>
    </div>
  );
}
