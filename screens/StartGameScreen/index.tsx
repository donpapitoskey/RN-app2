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
  const [confirmed, setConfirmed] = useState(false);
  const [selectdNumber, setSelectedNumber] = useState(0);

  const handleInput = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectdNumber}</Text>;
  }

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
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={theme.accent}
            />
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={theme.primary}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
