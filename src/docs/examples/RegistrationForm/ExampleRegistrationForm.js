import React from 'react';
import RegistrationForm from 'bjorn-comps/RegistrationForm';

const ExampleRegistrationForm = () => {

  const onSubmit = (user) => {
    console.log(user);
  }

  return <RegistrationForm onSubmit={onSubmit} />
}

export default ExampleRegistrationForm