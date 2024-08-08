import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';

import { useAuth } from '~/context/auth_context';

const Page = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const { onLogin } = useAuth();

  const login = async () => {
    console.log('login', username);
    onLogin!(username, password);
  };

  console.log('render login page');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.text}>Username</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.inputText}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.inputText}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={styles.buttonContainer} onPress={login}>
        <Text style={styles.button}>Login</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fonwWeight: 'bold',
    padding: 10,
  },
  inputText: {
    width: 200,
    fontsize: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  buttonContainer: {
    width: 200,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
  },
  button: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
};
export default Page;
