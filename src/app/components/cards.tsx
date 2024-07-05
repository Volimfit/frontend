import { Card, CardHeader, Image } from '@nextui-org/react';

export default function CardList() {
  return (
    <div className=' gap-2 grid grid-cols-12 grid-rows-1 px-8'>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Тренажеры</p>
          <h4 className='text-white font-medium text-large'>много прикольных</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0  object-cover bg-cyan-400  '
          src={'weights.png'}
        />
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Групповые</p>
          <h4 className='text-white font-medium text-large'>Занятия</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0  object-cover bg-cyan-500  '
          src={'training.png'}
        />
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Составление </p>
          <h4 className='text-white font-medium text-large'>индивидуального питания</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0  object-cover bg-cyan-600  '
          src={'diet.png'}
        />
      </Card>
    </div>
  );
}
