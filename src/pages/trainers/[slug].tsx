import FadeInSection from '@/app/components/IntersectionObserver';
import Layout from '@/app/components/layout';
import Maps from '@/app/components/maps';
import SectionFormTrainer from '@/app/components/SectionFormTrainer';
import TrainerCard from '@/app/components/TrainerCard';
import {
  getAllTrainerSlugs,
  getTrainerBySlug,
  TRAINERS_REVALIDATE_SECONDS,
  type Trainer,
} from '@/lib/trainers';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type TrainerPageProps = {
  trainer: Trainer;
};

export default function TrainerPage({ trainer }: TrainerPageProps) {
  return (
    <>
      <Head>
        <title>{`VOLIMFIT | Тренер ${trainer.name}`}</title>
        <meta name='description' content={trainer.title} />
        <meta name='keywords' content={trainer.roles.join(', ')} />
        <meta property='og:title' content={`VOLIMFIT: Тренер ${trainer.name}`} />
        <meta property='og:description' content={`VOLIMFIT: Тренер ${trainer.name}`} />
        <meta property='og:url' content={`https://volimfit.ru/trainers/${trainer.link}`} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={trainer.imageSrc} />
      </Head>
      <Layout>
        <FadeInSection>
          <TrainerCard {...trainer} />
        </FadeInSection>
        <FadeInSection>
          <SectionFormTrainer name={trainer.name} />
        </FadeInSection>
        <FadeInSection>
          <Maps />
        </FadeInSection>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllTrainerSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<TrainerPageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  if (!slug) {
    return { notFound: true };
  }

  const trainer = await getTrainerBySlug(slug);

  if (!trainer) {
    return { notFound: true, revalidate: TRAINERS_REVALIDATE_SECONDS };
  }

  return {
    props: { trainer },
    revalidate: TRAINERS_REVALIDATE_SECONDS,
  };
};
