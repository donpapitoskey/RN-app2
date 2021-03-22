import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './styles';
import {Card} from 'components';
import {theme} from 'constants/theme';

const StartGameScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color={theme.accent} />
          <Button title="Confirm" onPress={() => {}} color={theme.primary} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
