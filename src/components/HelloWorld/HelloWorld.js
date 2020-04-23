import React from 'react'
import PropTypes from 'prop-types'

/**
 * A Descriotion
 */
export default function HelloWorld({ message }) {
    return (
        <div>
            {message}
        </div>
    )
}

HelloWorld.propTypes = {
    /**
     * Message to display
     */
    message: PropTypes.string
}

HelloWorld.defaultProps = {
    message: "Howdy"
}