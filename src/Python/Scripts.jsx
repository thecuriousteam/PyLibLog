import React from 'react'
import PropTypes from 'prop-types';

const Scripts = ({code}) => {
  return (
    <script type='text/python'>{code}</script>
  )
}

Scripts.propTypes = {
    code: PropTypes.string.isRequired,
  };

export default Scripts