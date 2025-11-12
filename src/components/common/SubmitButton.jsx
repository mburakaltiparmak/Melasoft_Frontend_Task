import { Button } from 'antd';

const SubmitButton = ({
  children,
  loading = false,
  disabled = false,
  size = 'large',
  className = '',
  ...restProps
}) => {
  return (
    <Button
      type="primary"
      htmlType="submit"
      size={size}
      loading={loading}
      disabled={disabled}
      className={`w-full font-semibold ${className}`}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;