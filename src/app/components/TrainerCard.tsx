import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  Chip,
  Divider,
  Image
} from '@nextui-org/react';
import Link from 'next/link';


interface TrainerSlideProps {
  name: string;
  title: string;
  education: string;
  experience: string;
  specializations: string[];
  achievements: string[];
  imageSrc: string;
  roles: string[];
  category:string
}

export default function TrainerCard({
  name,
  title,
  education,
  experience,
  specializations,
  achievements,
  imageSrc,
  roles,
  category
}: TrainerSlideProps) {


  return (
    <div className='  container mx-auto flex w-full flex-col   max-w-7xl'>
      <Breadcrumbs className="m-4">
        <BreadcrumbItem><Link href={'/'}>Главная</Link></BreadcrumbItem>
        <BreadcrumbItem><Link href={'/trainers'}>Тренеры </Link></BreadcrumbItem>
        <BreadcrumbItem>{name}</BreadcrumbItem>
      </Breadcrumbs>
      <Card className='mb-4 bg-black'>
        <div className="block m-4 lg:hidden ">
          <h2 className="text-3xl text-white font-bold">{name}</h2>
          <p className=" text-white/60  font-bold">{title}</p>
         <div className='flex'>
         <div className="text-white/90   font-bold">
            Категория:
          </div> <div className='ml-1'>{category}</div>
         </div>
         
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='flex-none '>
            <Image
              removeWrapper
              alt="Card background"
              className="max-w-96  m-1"
              src={imageSrc}
            />
          </div>

          <div className=" p-4 flex-1  sm:min-w-[494px]" >
            <div className="hidden lg:block ">
              <p className="text-2xl text-white/60 uppercase font-bold">{title}</p>
              <h2 className="text-3xl text-white font-bold">{name}</h2>
            </div>
            <Divider className='mb-4' />
            <p className="text-2xl text-white/90   font-bold hidden lg:block ">
              Категория
            </p> <div className='mb-1'>{category}</div>
            <p className="text-2xl text-white/90   font-bold">
              Образование
            </p> <div className='mb-1'>{education}</div>

            <p className="text-2xl  font-bold">
              Опыт работы
            </p> <div className='mb-1'>{experience}</div>
            <p className="text-2xl text-white/90   font-bold">
              Специализация
            </p>
            <ul className="list-disc ml-4 className='mb-1'">
              {specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <p className="text-2xl text-white/90   font-bold">
              Достижения
            </p>
            <ul className="list-disc ml-4 className='mb-1'">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>

            {roles.map((role, index) => (
              <Chip key={index} color="primary" variant="solid" className="mt-2">
                {role}
              </Chip>
            ))}
          </div>




        </div>
      </Card>
    </div>
  );
}
