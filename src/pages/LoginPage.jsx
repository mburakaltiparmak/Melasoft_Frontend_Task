import { useState } from 'react';
import LoginContainer from '../components/login/LoginContainer';
import { useLogin } from '../hooks/useLogin';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useLogin();

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await handleLogin(values);
    } finally {
      setLoading(false);
    }
  };

  return <LoginContainer onSubmit={onSubmit} loading={loading} />;
};

export default LoginPage;