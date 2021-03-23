import styles from './styles';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  style?: Object;
}

const Input: React.FC<Props> = ({style, ...props}) => {
  return <TextInput {...props} style={{...styles.input, ...style}} />;
};

export default Input;
