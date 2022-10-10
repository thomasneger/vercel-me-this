import {
  Checkbox,
  Container,
  Row,
  Spacer,
  Switch,
  Text,
} from '@nextui-org/react';
import { GetStaticProps } from 'next';
import { loadFeatures, Features } from '../../lib/features';

interface Props {
  features: Features;
}

export default function Admin({ features }: Props) {
  const { userProgress } = features;
  return (
    <Container>
      <Text h1>Admin</Text>
      <Text h2>Manage user progress</Text>
      <Row align="center">
        <Switch checked={userProgress} /> <Spacer x={1} />
        <Text>Activate user progress feature</Text>
      </Row>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const features = loadFeatures();

  return {
    props: { features },
  };
};
