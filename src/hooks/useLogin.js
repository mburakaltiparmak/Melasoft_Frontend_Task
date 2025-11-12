import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { login } from '../store/actions/authActions';
import { authService } from '../api/authService';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      const data = await authService.login(email, password);
      
      dispatch(login(data, data.jwt));
      message.success('Login successful!');
      navigate('/invoices');
      return { success: true };
    } catch (error) {
      message.error('Invalid email or password');
      return { success: false, error: error.message };
    }
  };

  return { handleLogin };
};