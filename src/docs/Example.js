import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

import CodeExample from './CodeExample';

const ExampleWrapper = styled.div`
  border: solid 1px #d3d3d3;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f4f6f9;
  h4:first-of-type {
    margin-top: 0;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`


const Example = ({ example, componentName }) => {

  const [showCode, setShowCode] = useState(false);

  const toggleCode = event => {
    event.preventDefault();
    setShowCode(!showCode);
  }

  const { code, description, name } = example;

  // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
  const ExampleComponent = require(`./examples/${componentName}/${name}`).default;

  return (
    <ExampleWrapper>
      {description && <h4>{description}</h4>}

      <ExampleComponent />

      <p>
        <button onClick={toggleCode}>
          {showCode ? "Hide" : "Show"} Code
          </button>
      </p>

      {showCode && <CodeExample>{code}</CodeExample>}
    </ExampleWrapper>
  )

}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;
