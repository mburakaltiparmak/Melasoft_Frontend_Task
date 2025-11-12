import { useTranslation } from 'react-i18next';
import LoginForm from './LoginForm';

const LoginContainer = ({ onSubmit, loading = false }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {t('login.title')}
          </h1>
          
        </div>

        <LoginForm onSubmit={onSubmit} loading={loading} />

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Docnova © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;