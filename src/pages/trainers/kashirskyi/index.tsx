import FadeInSection from "@/app/components/IntersectionObserver";
import Layout from "@/app/components/layout";
import Maps from "@/app/components/maps";
import SectionFormTrainer from "@/app/components/SectionFormTrainer";
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
        <title>VOLIMFIT | Тренер {String(data.name)}</title>
        <meta name="description" content={data.title} />
        <meta name="keywords" content={data?.roles?.join()} />
        <meta property="og:title" content={`VOLIMFIT: Тренер ${data.name}`} />
        <meta property="og:description" content={`VOLIMFIT: Тренер ${data.name}`} />
        <meta property="og:url" content={`https://volimfit.ru/trainers/${link}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://volimfit.ru/${data.imageSrc}`} />
      </Head>
      <Layout>
        <FadeInSection>
          <TrainerCard
            {...data} />
        </FadeInSection>
        <FadeInSection>
          <SectionFormTrainer name={data.name} />
        </FadeInSection>

        <FadeInSection>
          <Maps />
        </FadeInSection>
      </Layout>
    </>
  );
};

export default MonyaPage;