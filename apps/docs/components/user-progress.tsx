import { Card, Text, Progress, Badge, Row } from '@nextui-org/react';

export function UserProgress() {
  return (
    <Card>
      <Card.Header>
        <Text b>Tutorials</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Progress value={42} />
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Badge>Vercel</Badge>
          <Badge>Next.js</Badge>
        </Row>
      </Card.Footer>
    </Card>
  );
}
