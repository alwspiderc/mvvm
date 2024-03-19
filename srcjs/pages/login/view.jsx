import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useLoginViewModel from './view.model';

const LoginView = () => {
  const {email, password, setEmail, setPassword, isLoading, onSubmit} =
    useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>E-mail</Text>
        <TextInput
          placeholder="ester@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="************"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={onSubmit} disabled={isLoading} />
      </View>
    </SafeAreaView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
