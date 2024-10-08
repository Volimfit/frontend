import FadeInSection from "@/app/components/IntersectionObserver";
import Layout from "@/app/components/layout";
import Maps from "@/app/components/maps";
import SectionForm from "@/app/components/SectionForm";
import { trainers } from "@/app/data/constant";
import { BreadcrumbItem, Breadcrumbs, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";




const TrainersPage = ({ }) => {
  return (
    <>
      <Head>
        <title>Тренеры VOLIMFIT – Профессиональные тренировки для всей семьи в Москве</title>
        <meta name="description" content="Тренеры фитнес-клуба VOLIMFIT в Москве: персональные программы, профессиональный подход и тренировки для всей семьи. Присоединяйтесь к нам и достигайте своих целей!" />
        <meta name="keywords" content="тренеры фитнес, персональные тренировки, семейный фитнес, тренеры Москва, фитнес-тренер, Crossfit, фитнес клуб у дома" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VOLIMFIT" />

        <meta property="og:title" content="VOLIMFIT – Тренеры фитнес-клуба в Москве" />
        <meta property="og:description" content="Познакомьтесь с тренерами VOLIMFIT – профессиональные тренировки и индивидуальный подход для всей семьи. Присоединяйтесь к нам!" />
        <meta property="og:url" content="https://volimfit.ru/trainers" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://volimfit.ru/logo.png" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Тренеры VOLIMFIT – Ваши проводники к успеху" />
        <meta name="twitter:description" content="Познакомьтесь с нашими тренерами и начните путь к здоровью и силе с профессионалами VOLIMFIT." />
        <meta name="twitter:image" content="https://volimfit.ru/logo.png" />


        <link rel="canonical" href="https://volimfit.ru/trainers" />

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
                <Link key={index} href={`/trainers/${item.link}`} className="mb-4">
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed")}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <CardBody className="overflow-visible p-0 z-0  justify-end ">
                        <CardHeader className="absolute bg-[#000000c4] z-20 flex-col !items-start min-h-[80px]">
                          <h4 className="text-white font-medium text-large">
                          {item.name.split(' ').map((el,index)=> <p key={index}>{el}</p>)}
                          </h4>
                        </CardHeader>
                        <Image
                          shadow="sm"
                          radius="lg"
                          alt={item.title}
                          className="w-full object-cover"
                          src={item.imageSrc}
                        />
                      </CardBody>
                    </div>
                    <CardFooter className="flex-col content-start items-start flex-grow min-h-[40px]">
                      <p className="text-default-500 text-left">
                        {item.title}
                      </p>
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