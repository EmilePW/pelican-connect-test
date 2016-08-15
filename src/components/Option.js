import React from 'react'

class Option extends React.Component {
  render () {
    return (
      <div className='Option' onClick={this.props.changeView}>{this.props.children}</div>
    )
  }
}

export default Option
