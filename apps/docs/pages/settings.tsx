import { useTheme as useNextTheme } from 'next-themes';
import { Container, Switch, useTheme, Text, Spacer } from '@nextui-org/react';

export default function Profile() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Container>
      <Text h1>General</Text>
      <Text h2>Theme</Text>
      <Text>
        You can pick your preferred theme. It will be cached for the next time
        you visit 🎨.
      </Text>

      <Spacer />

      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        title="Toggle theme"
      />
    </Container>
  );
}
