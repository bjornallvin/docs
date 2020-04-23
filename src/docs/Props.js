import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const PropsTable = styled.table`
  tr td:last-of-type {
    text-align: center;
  }
  th, td {
    text-align: left;
    padding: 5px;
  }
`


const Props = ({ props }) => {
  return (
    <PropsTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props).map(key => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{props[key].description}</td>
                <td>{props[key].type.name}</td>
                <td>{props[key].defaultValue && props[key].defaultValue.value}</td>
                <td>{props[key].required && "X"}</td>
              </tr>
            );
          })
        }
      </tbody>
    </PropsTable>
  )
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;
