import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const TrackCreateScreen: React.FC<Props> = () => {
  return (
    <BasicLayout title="TrackCreateScreen">
    </BasicLayout>
  );
};

export default TrackCreateScreen;

TrackCreateScreen.defaultProps = {
  title: undefined,
};
