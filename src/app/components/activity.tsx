import { Card, CardBody, CardFooter, Image, Tab, Tabs } from '@nextui-org/react';

export default function Activity() {
  const adultActivities = [
    {
      title: 'Intensive training',
      description: 'Тренировки для повышения выносливости и силы ',
      img: 'intensive.png',
    },
    {
      title: 'TABATA',
      description: 'Интервальные тренировки высокой интенсивности ',
      img: 'tabata.png',
    },
    {
      title: 'BodyStrong',
      description: 'Тренировки для укрепления мышц',
      img: 'strong-bod.png',
    },
    // {
    //   title: 'Cardio + Stretching',
    //   description: 'Кардио тренировки с элементами растяжки.',
    //   img: 'cardio-stretching.png',
    // },
    {
      title: 'Бокс',
      description: 'Тренировки для всех уровней',
      img: 'boxing.png',
    },
    {
      title: 'Pilates',
      description: 'Укрепление мышц и улучшение гибкости',
      img: 'pilates.png',
    },
    {
      title: 'Yoga',
      description: 'Практика йоги для всех уровней',
      img: 'yoga.png',
    },
    {
      title: 'Джиу-Джитсу',
      description: 'Боевые искусства и самооборона',
      img: 'jiu-jitsu.png',
    },
    // {
    //   title: 'Full body',
    //   description: 'Тренировки на все группы мышц.',
    //   img: 'full-body.png',
    // },
    // {
    //   title: 'Functional training',
    //   description: 'Функциональные тренировки для всего тела.',
    //   img: 'functional-training.png',
    // },
    // {
    //   title: 'Body fight',
    //   description: 'Тренировки с элементами боевых искусств.',
    //   img: 'body-fight.png',
    // },
    // {
    //   title: 'Interval training',
    //   description: 'Интервальные тренировки для сжигания жира.',
    //   img: 'interval-training.png',
    // },
    {
      title: 'Stretching',
      description: 'Тренировки на растяжку для всех уровней',
      img: 'stretching.png',
    },
    {
      title: 'BodyPump',
      description: 'Силовые тренировки с использованием штанг и гантелей',
      img: 'pump.png',
    },
    // {
    //   title: 'Здоровая спина',
    //   description: 'Тренировки для укрепления мышц спины и улучшения осанки.',
    //   img: 'healthy-back.png',
    // },
  ];

  const kidsActivities = [
    {
      title: 'Детское ОФП',
      description: 'Комплексный подход к физической подготовке',
      img: 'kids-fitness.png',
    },
    {
      title: 'Джиу-Джитсу',
      description: 'Боевые искусства и самооборона для детей',
      img: 'kids-jiu-jitsu.png',
    },
    {
      title: 'Художественная гимнастика',
      description: 'Развитие координации движений и гибкости  у детей',
      img: 'kids-gymnastics.png',
    },
    {
      title: 'Бокс',
      description: 'Тренировки для детей',
      img: 'kids-boxing.png',
    },
    // {
    //   title: 'Степ-аэробика',
    //   description: 'Веселые и динамичные тренировки для детей.',
    //   img: 'aerobics.png',
    // },
    // {
    //   title: 'Танцы',
    //   description: 'Танцевальные занятия для детей.',
    //   img: 'kids-dance.jpeg',
    // },
    {
      title: 'Тэг-регби',
      description: 'Безопасная версия регби для детей',
      img: 'kids-tag-rugby.png',
    },
  ];

  return (
    <Tabs aria-label='Options' color='success'>
      <Tab key='photos' title='Групповые занятия ' className='text-white/50'>
        <div className=' flex items-center justify-center'>
          <div className='gap-2 grid grid-cols-2 sm:grid-cols-4 max-w-screen-2xl'>
            {adultActivities.map((activity, index) => (
              <Card shadow='sm' key={index} isPressable onPress={() => console.log(activity.title)}>
                <CardBody className='overflow-visible p-0'>
                  <Image
                    shadow='sm'
                    radius='lg'
                    width='100%'
                    alt={activity.title}
                    className='w-full object-contain h-[140px]'
                    src={activity.img}
                  />
                </CardBody>
                <CardFooter className='div-small justify-center '>
                  <div>
                    <div className='text-large font-medium text-white mb-1'>{activity.title}</div>
                    <div className='text-default-600'>{activity.description}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Tab>
      <Tab key='music' title='Занятия для детей'>
        <div className=' flex items-center justify-center'>
          <div className='gap-2 grid grid-cols-2 sm:grid-cols-4 max-w-screen-2xl '>
            {kidsActivities.map((activity, index) => (
              <Card shadow='sm' key={index} isPressable onPress={() => console.log(activity.title)}>
                <CardBody className='overflow-visible p-0 '>
                  <Image
                    shadow='sm'
                    radius='lg'
                    width='100%'
                    alt={activity.title}
                    className='w-full object-contain h-[140px]'
                    src={activity.img}
                  />
                </CardBody>
                <CardFooter className='div-small justify-center'>
                  <div>
                    <div className='text-large font-medium text-white mb-1'>{activity.title}</div>
                    <div className='text-default-600'>{activity.description}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}
