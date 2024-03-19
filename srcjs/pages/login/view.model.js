import {useState} from 'react';
import {login} from '../../repositories/auth.repository';
import {Alert} from 'react-native';

/**
 * @typedef {import('./models')}
 */

const useLoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    console.log({email, password});
    try {
      setIsLoading(true);
      const response = await login({email, password});
      console.log(response);
    } catch (error) {
      console.error(error);
      Alert.alert('Oops', 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   *  Biding with the view
   */
  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
    onSubmit,
  };
};

export default useLoginViewModel;
