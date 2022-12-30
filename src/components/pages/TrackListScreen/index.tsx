import React from 'react';
import CustomText from '../../atoms/CustomText';
import BasicLayout from '../../layouts/BasicLayout';

interface Props {
  title?: string;
}

const TrackListScreen: React.FC<Props> = () => {
  return <BasicLayout title="TrackListScreen"></BasicLayout>;
};

export default TrackListScreen;

TrackListScreen.defaultProps = {
  title: undefined,
};
