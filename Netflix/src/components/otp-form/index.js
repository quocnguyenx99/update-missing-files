import React from 'react';

import {
  Container, Input, Button, Text
} from './styles/otp-form';

function OtpForm({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
}

OtpForm.Input = function OtpFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OtpForm.Button = function OtpFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="./images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OtpForm.Text = function OtpFormText ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default OtpForm;
