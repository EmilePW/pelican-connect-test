import React from 'react'
import Option from './Option'

class Sidebar extends React.Component {
  render () {
    let options = this.props.options.map((option, index) =>
      <li key={index}>
        <Option changeView={this.props.changeView.bind(event, option.view)}>{option.name}</Option>
      </li>
    )

    return (
      <nav className='Sidebar'>
        <ul>
          {options}
        </ul>
      </nav>
    )
  }
}

export default Sidebar
