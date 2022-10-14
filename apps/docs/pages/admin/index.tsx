import { Container, Text } from '@nextui-org/react';
import { GetServerSideProps } from 'next';
import { ToggleSection } from '../../components/toggle-section';
import { extractFeaturesCookie, Features } from '../../lib/features';

interface Props {
  features: Features;
}

export default function Admin({ features }: Props) {
  const { userProgress } = features;

  return (
    <Container>
      <Text h1>Admin</Text>
      <Text h2>Manage user progress</Text>

      <ToggleSection
        text="Display user progress in home page"
        checked={userProgress}
        onChange={(checked) => {
          document.cookie = `userProgress=${checked}`;
        }}
      />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const features = extractFeaturesCookie(context);

  return {
    props: { features },
  };
};
