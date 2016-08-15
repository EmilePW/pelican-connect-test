import React, { PropTypes } from 'react'

class Title extends React.Component {
  render () {
    return (
      <h1 className='Title'>{this.props.children}</h1>
    )
  }
}

Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title
