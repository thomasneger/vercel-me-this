import { Container, Spacer } from '@nextui-org/react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { extractFeaturesCookie, Features } from '../lib/features';

interface Props {
  features: Features;
}

const DynamicUserProgress = dynamic(() =>
  import('../components/user-progress').then((mod) => mod.UserProgress)
);

export default function Docs({ features }: Props) {
  const { userProgress } = features;
  return (
    <Container>
      <Spacer />
      <Suspense>{userProgress && <DynamicUserProgress />}</Suspense>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const features = extractFeaturesCookie(context);

  return {
    props: { features },
  };
};
