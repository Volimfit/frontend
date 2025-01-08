import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  Divider
} from '@nextui-org/react';
import Image from 'next/image';
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
  category: string;
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
    <div className="container mx-auto flex w-full flex-col max-w-7xl">
      <Breadcrumbs className="m-4">
        <BreadcrumbItem>
          <Link href={'/'}>Главная</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href={'/trainers'}>Тренеры</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{name}</BreadcrumbItem>
      </Breadcrumbs>

      <Card className="mb-4 bg-black">
        <div className="block m-4 lg:hidden">
          <h2 className="text-3xl text-white font-bold">{name}</h2>
          {roles.map((role, index) => (
            <p key={index} className="text-white/60 font-bold">
              {role} {index !== roles.length - 1 ? '/' : null}
            </p>
          ))}
          <div className="flex">
            <div className="text-white/90 font-bold">Категория:</div>
            <div className="ml-1">{category}</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
        
          <div className=' w-full sm:w-96 md:w-96 lg:w-96'>
          <div className="relative w-full aspect-[3648/5472] max-h-[800px]">
              <Image
                src={imageSrc} 
                alt={`${name}'s image`}
                
                className="object-cover"
                width={500}
                height={372}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>

        

          <div className="p-4 flex-1 sm:min-w-[494px]">
            <div className="hidden lg:block">
              {roles.map((role, index) => (
                <p key={index} className="text-2xl text-white/60 uppercase font-bold">
                  {role} {index !== roles.length - 1 ? '/' : null}
                </p>
              ))}

              <h2 className="text-3xl text-white font-bold">{name}</h2>
            </div>
            <Divider className="mb-4" />
            <div className="hidden lg:block">
              <p className="text-2xl text-white/90 font-bold hidden lg:block">
                Категория
              </p>
              <div className="mb-1">{category}</div>
            </div>
            <p className="text-2xl text-white/90 font-bold">Образование</p>
            <div className="mb-1">{education}</div>

            <p className="text-2xl font-bold">Опыт работы</p>
            <div className="mb-1">{experience}</div>

            <p className="text-2xl text-white/90 font-bold">Специализация</p>
            <ul className="list-disc ml-4 mb-1">
              {specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>

            <p className="text-2xl text-white/90 font-bold">Достижения</p>
            <ul className="list-disc ml-4 mb-1">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
