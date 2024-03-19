/**
 * @format
 */
import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LoginView from '../view';

jest.mock('../view.model', () => {
  const fnLoginViewModel = jest.fn();

  fnLoginViewModel.mockImplementation(() => ({
    email: '',
    setEmail: jest.fn(),
    password: '',
    setPassword: jest.fn(),
    isLoading: false,
    onSubmit: jest.fn(),
  }));
  return fnLoginViewModel;
});
