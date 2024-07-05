'use client';

export default function CarouselComponent() {
  return (
    <div className='relative w-full h-screen'>
      <img src={'fit.jpg'} alt='...' className='absolute w-full h-full object-cover blur-sm' />
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='text-center text-white p-4 bg-black bg-opacity-70 rounded-lg'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>Старт продаж с 13 июля</h2>
          <p className='text-lg md:text-2xl mb-2'>Успей купить абонемент со скидкой до 50%</p>
          <p className='text-sm md:text-lg'>Получить больше информации по тел.</p>
        </div>
      </div>
    </div>
  );
}
