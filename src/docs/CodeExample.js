import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

const CodeExample = (props) => {

  const element = useRef(null)

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(element.current);

  }, [])


  return (
    <pre ref={element}>
      <code>
        {props.children}
      </code>
    </pre>
  )

}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
