import React from 'react';
import RegistrationForm from 'my-components/RegistrationForm';

const ExampleRegistrationForm = () => {

  const onSubmit = (user) => {
    console.log(user);
  }

  return <RegistrationForm onSubmit={onSubmit} />
}

export default ExampleRegistrationForm