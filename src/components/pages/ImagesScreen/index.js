import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import ImageDetails from '../../organisms/ImageDetails';

const ImagesScreen = () => {
  return (
    <BasicLayout title="Images">
      <ImageDetails
        title="Forest"
        imageSource={require('../../../assets/forest.jpg')}
      />
      <ImageDetails
        title="Beach"
        imageSource={require('../../../assets/beach.jpg')}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require('../../../assets/mountain.jpg')}
      />
    </BasicLayout>
  );
};

export default ImagesScreen;
