import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const Ul = styled.ul`
  float: left;
  width: 250px;
  list-style-type: none;
  padding: 0;
`

const Navigation = ({ components }) => {
  return (
    <Ul>
      {
        components.map(name => {
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          )
        })
      }
    </Ul>
  )
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
