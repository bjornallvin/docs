import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

import Example from './Example';
import Props from './Props';

const Wrapper = styled.div`
  margin-left: 275px;
`

const ComponentPage = ({ component }) => {
  const { name, description, props, examples } = component;

  return (
    <Wrapper>
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Example{examples.length > 1 && "s"}</h3>
      {
        examples.length > 0 ?
          examples.map(example => <Example key={example.name} example={example} componentName={name} />) :
          "No examples exist."
      }

      <h3>Props</h3>
      {
        props ?
          <Props props={props} /> :
          "This component accepts no props."
      }
    </Wrapper>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
