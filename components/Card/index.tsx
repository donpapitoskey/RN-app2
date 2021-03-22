import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface Props {
  style?: Object;
}

const Card: React.FC<Props> = ({children, style}) => (
  <View style={{...styles.card, ...style}}>{children}</View>
);

export default Card;
