import FadeInSection from "@/app/components/IntersectionObserver";
import Layout from "@/app/components/layout";
import Maps from "@/app/components/maps";
import SectionForm from "@/app/components/SectionForm";
import TrainerCard from "@/app/components/TrainerCard";
import { findTrainerByLink } from "@/app/data/constant";
import Head from "next/head";
import { useRouter } from "next/router";

const MonyaPage = () => {
  const router = useRouter();
  const currentUrl = router.asPath.split('/'); // Текущий URL
  const link = currentUrl[currentUrl.length - 1]
  const data = findTrainerByLink(link)
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
          <TrainerCard
            {...data} />
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

export default MonyaPage;