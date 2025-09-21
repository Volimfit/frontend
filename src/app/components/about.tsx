/* eslint-disable react/no-unescaped-entities */
'use client';

import FadeCarousel from './fadeCarousel';

export default function AboutCompany() {
  return (
    <div className='container mx-auto p-4 max-w-7xl'>
      <div className='flex flex-col md:flex-row items-stretch gap-4'>
        <div className='md:w-1/2 w-full'>
          <div className='text-large text-default-600 space-y-4'>
            <p>
              VOLIMFIT — это современное фитнес-пространство площадью 560 м², созданное для тех, кто
              ценит продуманность, эффективность и комфорт в каждой детали.
            </p>
            <p>
              Мы предлагаем расширенный спектр спортивных услуг и подходим как для интенсивных
              тренировок, так и для полноценного восстановления.
            </p>

            <div className='mt-6'>
              <h3 className='text-xl font-semibold text-default-800 mb-4'>
                Что вас ждет в VOLIMFIT:
              </h3>

              <ul className='space-y-4'>
                <li className='flex flex-col'>
                  <span className='font-semibold text-default-800 text-lg'> Тренажёрный зал</span>
                  <span className='text-default-600 mt-1'>
                    Светлое помещение с панорамными окнами, оснащённое высокотехнологичным
                    оборудованием от Foreman и Hoist — мировых лидеров в индустрии фитнеса.
                  </span>
                </li>

                <li className='flex flex-col'>
                  <span className='font-semibold text-default-800 text-lg'> Зона CrossFit</span>
                  <span className='text-default-600 mt-1'>
                    Отдельно выделенное пространство для функциональных и высокоинтенсивных
                    тренировок.
                  </span>
                </li>

                <li className='flex flex-col'>
                  <span className='font-semibold text-default-800 text-lg'> Зал единоборств</span>
                  <span className='text-default-600 mt-1'>
                    Полноценная площадка для занятий боксом и другими боевыми дисциплинами.
                  </span>
                </li>

                <li className='flex flex-col'>
                  <span className='font-semibold text-default-800 text-lg'>
                     Зал групповых программ
                  </span>
                  <span className='text-default-600 mt-1'>
                    Функциональные тренировки, растяжка и другие направления — под руководством
                    опытных инструкторов.
                  </span>
                </li>

                <li className='flex flex-col'>
                  <span className='font-semibold text-default-800 text-lg'>
                     Массажный кабинет
                  </span>
                  <span className='text-default-600 mt-1'>
                    Зона восстановления и релаксации — идеальное завершение продуктивной тренировки.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 '>
          <FadeCarousel
            slides={Array.from(Array(17).keys())}
            options={{ loop: true, duration: 30 }}
          />
        </div>
      </div>
    </div>
  );
}
