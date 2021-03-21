import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
