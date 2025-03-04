'use client';

import { Divider,  } from '@nextui-org/react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className=' text-center text-surface-75 dark:text-white-75 lg:text-left'
      >
      <Divider />
      <div className='mx-6 py-5 text-center md:text-left'>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className=''>
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              <span className='me-3 [&>svg]:h-4 [&>svg]:w-4'>
                <Image  src={'/logo_only.png'} alt='ff' width={100}   height={100}/>
              </span>
              
              VOLIMFIT
            </h6>
            <span>Фитнес-клуб, где каждая деталь продумана до мелочей!</span>
          </div>

          <div>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Время работы
            </h6>

            <p className='mb-4'>
              <a href='#about'>пн-пт с 7:00 до 23:00</a>
            </p>
            <p className='mb-4'>
              <a href='#section'>сб-вс c 9:00 до 22:00</a>
            </p>
          
            <div className='mb-4 flex justify-center flex-col  md:justify-start'>
            <h6 className='  flex justify-center  font-semibold uppercase md:justify-start'>
            Публичная оферта
              </h6>
              <Divider className='mt-2 mb-2'/>
              <a  target='_blank' href="./several-condition.pdf">Общие условия</a>
              <a  target='_blank' href="./several-condition-1.pdf">Заявление</a>
              <a  target='_blank' href="./several-condition-2.pdf">Прейскурант</a>
              <a  target='_blank' href="./several-condition-3.pdf">Правила клуба</a>
            </div>
            
          </div>

          <div className='flex flex-col justify-center items-center sm:items-start  sm:justify-start'>
            <h6 className='mb-4  flex justify-center font-semibold uppercase md:justify-start'>
              Социальные сети
            </h6>
            <div className='w-32 '>
              <div className='mb-4 flex items-center justify-start sm:items-start sm:justify-start'>
                <a href='https://t.me/VOLIMFIT_FITNESS' target='_blank'>
                  <Image src={'/social/telegram.png'} alt='ff' width={30}   height={30} />{' '}
                </a>
                <a href='https://t.me/VOLIMFIT_FITNESS' target='_blank' className='ml-2'>
                  Telegram
                </a>
              </div>
              <div className='mb-4 flex items-center justify-start sm:items-start sm:justify-start'>
                <a href='https://taplink.cc/volimfit' target='_blank'>
                  <Image src={'/social/taplink.png'} alt='ff' width={30}  height={30}  />
                </a>
                <a href='https://taplink.cc/volimfit' target='_blank' className='ml-2'>
                  Taplink
                </a>
              </div>
              <div className='mb-4 flex items-center justify-start  sm:items-start  sm:justify-start'>
                <a href='https://wa.me/+79197742220' target='_blank'>
                  <Image src={'/social/whatsapp.png'} alt='ff' width={30}  height={30}  />
                </a>
                <a href='https://wa.me/+79197742220' target='_blank' className='ml-2'>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div id='contact'>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Контакты
            </h6>

            <p className='mb-4 flex items-center justify-center md:justify-start'>
              <span className='me-3 [&>svg]:h-5 [&>svg]:w-5'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                  <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
                </svg>
              </span>

              <a href='mailto:Volimfit@yandex.ru'>Volimfit@yandex.ru</a>
            </p>
            <p className='mb-4 flex items-center justify-center md:justify-start'>
              <span className='me-3 [&>svg]:h-5 [&>svg]:w-5'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>

              <a href='tel:+7(926)074-22-20'>+7 (926) 074-22-20</a>
            </p>
            <p className='flex items-center justify-center md:justify-start mb-3'>
              <span className='me-3 [&>svg]:h-5 [&>svg]:w-5'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>

              <a href='tel:+7(919)774-22-20'>+7 (919) 774-22-20</a>
            </p>

            <p className=' flex items-center justify-center md:justify-start '>
              <span className='me-3 [&>svg]:h-5 [&>svg]:w-5'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
                  <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
                </svg>
              </span>
              <span className=''>
                Москва,
                <br /> Каширский проезд,
                <br /> д.25, корп.4, пом.13Н
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=' text-center'>
        <span>ИП Виданович Момчило ИНН 505013961540</span>
      </div>
    </footer>
  );
}
