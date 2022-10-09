import NextLink from 'next/link';
import { Navbar, Text, Avatar, Dropdown } from '@nextui-org/react';
import { AcmeLogo } from './acme-logo';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactNode;
}

export function Layout({ children }: Props) {
  const router = useRouter();

  return (
    <>
      <Navbar isBordered maxWidth="xl" variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <NextLink href="/" passHref>
            <Navbar.Link>Home</Navbar.Link>
          </NextLink>
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end',
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => {
                const href = actionKey.toString();
                router.push(href);
              }}
            >
              <Dropdown.Item key="settings">Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
      <main>{children}</main>
    </>
  );
}
