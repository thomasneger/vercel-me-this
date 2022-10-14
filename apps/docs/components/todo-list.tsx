import {
  Button,
  Checkbox,
  Col,
  Container,
  Input,
  Row,
  Spacer,
  styled,
} from '@nextui-org/react';
import { useState } from 'react';
import { Delete } from 'react-iconly';

export function TodoList() {
  const [tasks, setTasks] = useState([
    { title: 'Implement a todo-list', checked: true },
  ]);

  return (
    <Container gap={1}>
      <Spacer y={1} />

      {tasks.map(({ title, checked }, key) => (
        <TaskRow align="center" key={key}>
          <Col span={10}>
            <Input
              aria-label="item"
              underlined
              fullWidth
              size="xl"
              value={title}
              status={checked ? 'success' : 'default'}
            />
          </Col>
          <Col span={2}>
            <Row align="center" gap={1}>
              <Col>
                <Checkbox
                  className="checkboxu"
                  aria-label="toggle"
                  size="xl"
                  color="success"
                  defaultSelected={checked}
                  onChange={(checked) => {
                    setTasks((prev) =>
                      prev.map((t, i) => {
                        if (i === key) {
                          return { ...t, checked };
                        }

                        return t;
                      })
                    );
                  }}
                />
              </Col>
              <Col>
                <Button
                  color="error"
                  bordered
                  auto
                  iconRight={<Delete filled />}
                  onClick={() => {
                    setTasks((prev) => prev.filter((_, i) => i !== key));
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Col>
        </TaskRow>
      ))}

      <Spacer y={1} />

      <Row align="center">
        <Col span={10}>
          <AddMoreInput
            onChange={(title) => {
              setTasks((prev) => [...prev, { title, checked: false }]);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

Checkbox.toString = () => '.checkboxu';

const ohboy = {
  [`& ${Checkbox}`]: {
    display: 'inline-flex',
  },
  [`${Button}`]: {
    display: 'flex',
  },
};

const TaskRow = styled(Row, {
  [`${Button}, & ${Checkbox}`]: {
    display: 'none',
  },
  [`&:focus-within`]: ohboy,
  '&:hover': ohboy,
});

function AddMoreInput({ onChange }: { onChange: (title: string) => void }) {
  const [value, setValue] = useState('');

  return (
    <Input
      aria-label="add more"
      underlined
      fullWidth
      size="xl"
      placeholder="Add more..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyUp={(e) => {
        if (value && e.key === 'Enter') {
          setValue('');
          onChange(value);
        }
      }}
      onBlur={() => {
        if (value) {
          setValue('');
          onChange(value);
        }
      }}
    />
  );
}
