import { Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from '../store/authSlice';
import userData from '../mocks/user.json';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onFinish = (values) => {
    const { email, password } = values;

    if (email === 'devmelauser@yopmail.com' && password === 'Work123???') {
      dispatch(login(userData));
      message.success('Login successful!');
      navigate('/invoices');
    } else {
      message.error(t('login.invalidCredentials'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t('login.title')}
        </h1>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label={t('login.email')}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!'
              },
              {
                type: 'email',
                message: 'Please enter a valid email!'
              }
            ]}
          >
            <Input size="large" placeholder={t('login.email')} />
          </Form.Item>

          <Form.Item
            label={t('login.password')}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password size="large" placeholder={t('login.password')} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full font-semibold"
            >
              {t('login.submit')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
