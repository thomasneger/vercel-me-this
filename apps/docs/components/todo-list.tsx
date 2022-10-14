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
import { useEffect, useState } from 'react';
import { Delete } from 'react-iconly';
import { Todos, getAll, update } from '../lib/todo-list';

export function TodoList() {
  const [tasks, setTasks] = useState<Todos>([]);

  useEffect(() => {
    const todos = getAll();

    if (todos) {
      setTasks(todos);
    } else {
      setTasks([
        { title: 'Implement a todo-list', done: true },
        { title: 'Hook to local storage', done: true },
        {
          title: 'Mitigate the flash of content after hydration',
          done: false,
        },
      ]);
    }
  }, []);

  return (
    <Container gap={1}>
      <Spacer y={1} />

      {tasks.map(({ title, done }, key) => (
        <TaskRow align="center" key={key}>
          <Col span={10}>
            <Input
              aria-label="item"
              underlined
              fullWidth
              size="xl"
              value={title}
              status={done ? 'success' : 'default'}
              onChange={(e) => {
                update(
                  tasks.map((t, i) => {
                    if (i === key) {
                      return { ...t, title: e.target.value };
                    }

                    return t;
                  })
                );
              }}
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
                  defaultSelected={done}
                  onChange={(done) => {
                    setTasks((prev) => {
                      const newTasks = prev.map((t, i) => {
                        if (i === key) {
                          return { ...t, done };
                        }

                        return t;
                      });

                      update(newTasks);

                      return newTasks;
                    });
                  }}
                />
              </Col>
              <Col>
                <Button
                  color="error"
                  bordered
                  auto
                  iconRight={<Delete filled />}
                  onPress={() => {
                    setTasks((prev) => {
                      const newTasks = prev.filter((_, i) => i !== key);

                      update(newTasks);

                      return newTasks;
                    });
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
              setTasks((prev) => {
                const newTasks = [...prev, { title, done: false }];

                update(newTasks);

                return newTasks;
              });
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
