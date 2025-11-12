import { Form } from 'antd';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormInput from '../common/FormInput';
import FormPasswordInput from '../common/FormPasswordInput';
import SubmitButton from '../common/SubmitButton';
import { emailValidation, passwordValidation } from '../../utils/validation';

const LoginForm = ({ onSubmit, loading = false }) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <FormInput
        name="email"
        label={t('login.email')}
        placeholder={t('login.email')}
        control={control}
        rules={emailValidation}
        errors={errors}
      />

      <FormPasswordInput
        name="password"
        label={t('login.password')}
        placeholder={t('login.password')}
        control={control}
        rules={passwordValidation}
        errors={errors}
      />

      <Form.Item>
        <SubmitButton loading={loading}>
          {t('login.submit')}
        </SubmitButton>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;