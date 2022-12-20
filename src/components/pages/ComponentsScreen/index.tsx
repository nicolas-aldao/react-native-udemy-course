import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  children: JSX.Element;
  title?: string;
}

const ComponentsScreen: React.FC<Props> = ({ children }: any) => {
  return <BasicLayout title="Hola">{children}</BasicLayout>;
};

export default ComponentsScreen;

ComponentsScreen.defaultProps = {
  title: undefined,
};
