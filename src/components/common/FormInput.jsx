import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

const FormInput = ({
  name,
  label,
  placeholder,
  control,
  rules,
  errors,
  type = 'text',
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
          <Input
            {...field}
            type={type}
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

export default FormInput;