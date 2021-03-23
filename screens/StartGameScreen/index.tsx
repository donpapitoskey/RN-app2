import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import {Card, Input} from 'components';
import {theme} from 'constants/theme';

const StartGameScreen: React.FC = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleInput = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss.bind(null)}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            style={styles.input}
            onChangeText={handleInput}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={() => {}} color={theme.accent} />
            <Button title="Confirm" onPress={() => {}} color={theme.primary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
