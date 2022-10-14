import { Text, Spacer, Tooltip, Badge, Row, Switch } from '@nextui-org/react';

interface Props {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ToggleSection({ text, checked, onChange }: Props) {
  return (
    <Row align="center">
      <Switch
        initialChecked={checked}
        onChange={(event) => {
          const checked = event.target.checked;
          onChange(checked);
        }}
      />
      <Spacer x={1} />
      <Text>{text}</Text>
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
  );
}
