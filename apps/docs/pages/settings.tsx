import { useTheme as useNextTheme } from 'next-themes';
import {
  Container,
  Switch,
  useTheme,
  Text,
  Spacer,
  Row,
  Link,
} from '@nextui-org/react';
import NextLink from 'next/link';

export default function Profile() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Container>
      <Text h1>General</Text>
      <Text h2>Theme</Text>
      <Row align="center">
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          title="Toggle theme"
        />
        <Spacer x={1} />
        <Text>
          You can pick your preferred theme. It will be cached for the next time
          you visit 🎨.
        </Text>
      </Row>

      <Text h2>Home page</Text>
      <Row align="center">
        <NextLink href="/settings/user-progress" passHref>
          <Link block>Edit user progress</Link>
        </NextLink>
      </Row>
    </Container>
  );
}
