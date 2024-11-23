import {
  Button,
  Divider
} from '@nextui-org/react';
import Link from 'next/link';


interface TrainerSlideProps {

}

export default function SlideGenerator({

}: TrainerSlideProps) {


  return (
    <div className="relative w-full h-screen flex items-center justify-start">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat  "
        style={{ backgroundImage: `url(gantelya.jpg)`,backgroundPosition: 'right 35% bottom 45%' }}
      ></div>

      {/* Затемнение */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Контент */}
      <div className="relative z-10 flex flex-col items-start justify-start h-full space-y-1 px-14 pb-60 pt-20">
        {/* Заголовок */}
        <h2 className="text-4xl font-bold text-[#00e4d9]">
          Дневная карта 
        </h2>
        <h2 className="text-4xl font-bold text-[#00e4d9]">
           ВЫГОДА 30%
        </h2>
        <Divider/>
        
        <h2 className="text-2xl md:text-5xl font-bold ">
        Начни путь  к новому <br/>  телу  
        в VOLIMFIT
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
