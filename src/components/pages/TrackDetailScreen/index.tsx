import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const TrackDetailScreen: React.FC<Props> = () => {
  return (
    <BasicLayout title="TrackDetailScreen">
    </BasicLayout>
  );
};

export default TrackDetailScreen;

TrackDetailScreen.defaultProps = {
  title: undefined,
};
