import {
  Button,
  Divider
} from '@nextui-org/react';
import Link from 'next/link';


interface TrainerSlideProps {
 
}

export default function SlideGeneratorSecond({

}: TrainerSlideProps) {


  return (
    <div className="relative w-full h-screen flex items-center justify-start ">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat hidden md:block "
        style={{ backgroundImage: `url(para.jpg)`,backgroundPosition: 'right 45% bottom 50%' }}
      ></div>
 <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat md:hidden "
        style={{ backgroundImage: `url(para-mob.jpg)`,backgroundPosition: 'right 45% bottom 50%' }}
      ></div>
      {/* Затемнение */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col items-start justify-start space-y-1 px-14 h-full pt-20">
        {/* Заголовок */}
        <h2 className="text-5xl md:text-5xl font-bold text-[#00e4d9] ">
        Акция -10%
        </h2>
        <Divider/>
        <h2 className="text-3xl md:text-5xl font-bold ">
 для близкого
        </h2>
        
       

        {/* Кнопка */}
        <div className='mt-6'>
        <Button as={Link} color='success' className='mt-4' href='#form'>
          Оставить заявку
        </Button>
        </div>
      </div>
    </div>
  );
}
