import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

const FormPasswordInput = ({
  name,
  label,
  placeholder,
  control,
  rules,
  errors,
  size = 'large',
  ...restProps
}) => {
  return (
    <Form.Item
      label={label}
      validateStatus={errors[name] ? 'error' : ''}
      help={errors[name]?.message}
    >
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Input.Password
            {...field}
            size={size}
            placeholder={placeholder}
            status={errors[name] ? 'error' : ''}
            {...restProps}
          />
        )}
      />
    </Form.Item>
  );
};

export default FormPasswordInput;