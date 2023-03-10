import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../../atoms/CustomText';

interface Props {
  style?: { [key: string]: string | number };
  children: JSX.Element;
  marginLeft?: number;
  title?: string;
  horizontalCenteredItems?: boolean;
}

const BasicLayout: React.FC<Props> = ({
  style,
  children,
  marginLeft,
  title,
  horizontalCenteredItems,
}) => {
  const calculatedMargin = marginLeft === undefined ? 0 : marginLeft;
  return (
    <View
      style={[
        styles.mainContainer,
        horizontalCenteredItems && styles.horizontalCenterItems,
        style,
      ]}>
      {title && <CustomText titleStyle>{title}</CustomText>}
      <View style={{ marginLeft: calculatedMargin }}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, // testing
    marginTop: 20, // TODO: implement safeareaview or similar
    // borderColor: 'red',
    // borderWidth: 1,
  },
  horizontalCenterItems: {
    alignItems: 'center',
  },
});

export default BasicLayout;

BasicLayout.defaultProps = {
  title: undefined,
  style: undefined,
};
