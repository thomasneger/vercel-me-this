import { Text, Container, Spacer } from '@nextui-org/react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import { TodoList } from '../components/todo-list';
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
      <Section title="To-do list">
        <TodoList />
      </Section>

      <Suspense>
        {userProgress && (
          <Section title="Progress">
            <DynamicUserProgress />
          </Section>
        )}
      </Suspense>
    </Container>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Text h1 size="$2xl">
        {title}
      </Text>
      {children}
      <Spacer y={2} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const features = extractFeaturesCookie(context);

  return {
    props: { features },
  };
};
