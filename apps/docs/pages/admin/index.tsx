import {
  Container,
  Row,
  Spacer,
  Switch,
  Text,
  Tooltip,
  Badge,
} from '@nextui-org/react';
import { GetServerSideProps } from 'next';
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

      <Row align="center">
        <Switch
          initialChecked={userProgress}
          onChange={(event) => {
            const checked = event.target.checked;
            document.cookie = `userProgress=${checked}`;
          }}
        />
        <Spacer x={1} />
        <Text>Activate user progress feature</Text>
        <Spacer x={0.3} />
        <Tooltip
          content="this is currently saved in cookies as persistence is not implemented yet"
          rounded
          color="invert"
          placement="right"
        >
          <Badge color="default" size="sm">
            ℹ
          </Badge>
        </Tooltip>
      </Row>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const features = extractFeaturesCookie(context);

  return {
    props: { features },
  };
};
