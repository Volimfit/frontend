import {
  Divider
} from '@nextui-org/react';
import Image from 'next/image';


interface TrainerSlideProps {
 
}

export default function SlideGeneratorSecond({

}: TrainerSlideProps) {


  return (
    <div className="relative w-full h-screen flex items-center justify-start ">
      {/* Фоновое изображение */}

<Image
        src="/para.jpg" // Убедитесь, что файл находится в папке public
        alt="Фоновое изображение"
        fill // Занимает весь контейнер
        className="object-cover object-[right_45%_bottom_50%] hidden md:block" // Настраиваем позицию через Tailwind
       
        sizes='100vw'
      />

<Image
        src="/para-mob.jpg" // Убедитесь, что файл находится в папке public
        alt="Фоновое изображение"
        fill // Занимает весь контейнер
        className="object-cover object-[right_45%_bottom_50%] block md:hidden" // Настраиваем позицию через Tailwind
        sizes='100vw'
      />

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
        {/* <Button as={Link} color='success' className='mt-4' href='#form'>
          Оставить заявку
        </Button> */}
        </div>
      </div>
    </div>
  );
}
