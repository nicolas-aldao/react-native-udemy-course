import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const AccountScreen: React.FC<Props> = () => {
  return <BasicLayout title="AccountScreen"></BasicLayout>;
};

export default AccountScreen;

AccountScreen.defaultProps = {
  title: undefined,
};
