import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"


const OuterWrapper = styled.div`
    border-style:solid;
    border-width:1px;
    border-color:black;
    width: ${(props) => (props.width)}px;

`
const InnerWrapper = styled.div`
    height: ${(props) => (props.height)}px;
    width: ${props => parseInt(props.width * (props.percent / 100), 10)}px;    
    background-color: ${props => props.percent === 100 ? "green" : (props.percent > 50 ? 'lightgreen' : 'red')};
`

const ProgressBar = (props) => (
    <OuterWrapper {...props}>
        <InnerWrapper {...props}></InnerWrapper>
    </OuterWrapper>
)



ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,

    /** Bar width */
    width: PropTypes.number.isRequired,

    /** Bar height */
    height: PropTypes.number
};

ProgressBar.defaultProps = {
    height: 5
};

export default ProgressBar;