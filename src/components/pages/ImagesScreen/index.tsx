import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import ImageDetails from '../../organisms/ImageDetails';

const ImagesScreen = () => {
  return (
    <BasicLayout title="Images">
      <>
        <ImageDetails
          title="Forest"
          imageSource={require('../../../assets/img/forest.jpg')}
        />
        <ImageDetails
          title="Beach"
          imageSource={require('../../../assets/img/beach.jpg')}
        />
        <ImageDetails
          title="Mountain"
          imageSource={require('../../../assets/img/mountain.jpg')}
        />
      </>
    </BasicLayout>
  );
};

export default ImagesScreen;
