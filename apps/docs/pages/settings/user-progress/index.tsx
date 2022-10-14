import { Container, Text } from '@nextui-org/react';
import { UserProgress } from '../../../components/user-progress';

export default function SettingsUserProgress() {
  return (
    <Container>
      <Text h1>Edit user progress</Text>

      <UserProgress />
    </Container>
  );
}
