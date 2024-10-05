import EmblaTrainers from "@/app/components/EmblaTrainers";
import FadeInSection from "@/app/components/IntersectionObserver";
import Layout from "@/app/components/layout";
import Maps from "@/app/components/maps";
import SectionForm from "@/app/components/SectionForm";
import TrainerSlide from "@/app/components/TrainerSlide";
import { trainers } from "@/app/data/constant";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter,Divider,Image } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";




const TrainersPage = ({  }) => {
  return (
    <>
    <Head>
      <title>VOLIMFIT - Фитнес-клуб у дома</title>
      <meta name="description" content="Фитнес-клуб, где каждая деталь продумана до мелочей. Тренировки для всей семьи в Москве!" />
      <meta name="keywords" content="фитнес, спортзал, тренировки, Crossfit, семейный фитнес, Москва" />
      <meta property="og:title" content="VOLIMFIT - Фитнес-клуб у дома" />
      <meta property="og:description" content="Тренировки для всей семьи в Москве! Присоединяйтесь к нашему фитнес-клубу и получите абонемент со скидкой!" />
      <meta property="og:url" content="https://volimfit.ru" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://volimfit.ru/logo.png" />
    </Head>
    <Layout>
      <FadeInSection>
      <div className='container mx-auto p-4 max-w-7xl'>
      <h4 className='text-large font-medium'>Тренеры</h4>
      <Breadcrumbs className="m-4">
      <BreadcrumbItem><Link href={'/'}>Главная</Link></BreadcrumbItem>
      <BreadcrumbItem><Link href={'/trainers'}>Тренеры </Link></BreadcrumbItem>
      
    </Breadcrumbs>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
      
      {trainers.map((item, index) => (
        <Link  key={index} href={`/trainers/${item.link}`} className="mb-4">
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              
              alt={item.title}
              className="w-full object-cover "
              src={item.imageSrc}
            />
          </CardBody>
          <CardFooter className="flex-col content-start items-start">
            <b className="text-left">{item.name}</b>
            <p className="text-default-500 text-left">{item.title}</p>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </div>
    </div>
      </FadeInSection>
      <FadeInSection>
        <SectionForm />
      </FadeInSection>

      <FadeInSection>
        <Maps />
      </FadeInSection>
    </Layout>
  </>
  );
};

export default TrainersPage;