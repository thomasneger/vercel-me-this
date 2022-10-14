import { ReactNode } from 'react';

// TODO wait for https://github.com/jrgarciadev/react-iconly/issues/27 and
// delete this file

declare module 'react-iconly' {
  export interface IconProps {
    children?: ReactNode;
  }
}
