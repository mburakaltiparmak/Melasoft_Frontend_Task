import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { login } from '../store/actions/authActions';
import { userData } from '../mocks/user';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      console.log("login attempt with:", email, password);
      // const response = await fetch('https://api-dev.docnova.ai/auth/login/dev', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // const data = await response.json();

      // Şimdilik mock data kullanıyoruz
      if (email === 'devmelauser@yopmail.com' && password === 'Work123???') {
        dispatch(login(userData));
        message.success('Login successful!');
        navigate('/invoices');
        return { success: true };
      } else {
        message.error('Invalid email or password');
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      message.error('Login failed. Please try again.');
      return { success: false, error: error.message };
    }
  };

  return { handleLogin };
};