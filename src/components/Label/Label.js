import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledLabel = styled.label`
    display: block;
    color: ${props => props.theme.mainColor || 'black'};
`
const RequiredSpan = styled.span`
    color: red;
`


/** Label with required field display, htmlFor, and block styling */
function Label({ htmlFor, label, required }) {
    return (
        <StyledLabel htmlFor={htmlFor}>
            {label} {required && <RequiredSpan> *</RequiredSpan>}
        </StyledLabel>
    )
}

Label.propTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterisk after label if true */
    required: PropTypes.bool
};

export default Label;
