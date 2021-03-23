import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {Card, Input} from 'components';
import {theme} from 'constants/theme';

const StartGameScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color={theme.accent} />
          <Button title="Confirm" onPress={() => {}} color={theme.primary} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
