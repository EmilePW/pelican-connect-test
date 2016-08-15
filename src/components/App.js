import React from 'react'
import Title from './Title'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      view: 'memberDisplay',
      members: [],
      schools: []
    }

    this.changeView = this.changeView.bind(this)
    this.addMember = this.addMember.bind(this)
  }

  loadDataIntoState (property, url) {
    let d = new Promise((resolve, reject) => {
      let req = new XMLHttpRequest()
      req.open('GET', url)
      req.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.response)
        } else {
          reject('Can\'t load data for ' + property)
        }
      }

      req.send()
    }).then(
      (data) => this.setState({
        [property]: JSON.parse(data)
      })
    ).catch(
      (err) => console.log(err)
    )
  }

  componentDidMount () {
    this.loadDataIntoState('members', '../../members.json')
    this.loadDataIntoState('schools', '../../schools.json')
  }

  addMember (member) {
    let members = this.state.members
    members.push(member)

    this.setState({
      members: members
    })
  }

  changeView (view) {
    this.setState({
      view: view
    })
  }

  render () {
    return (
      <div className='App'>
        <Title>Pelican Connect Test</Title>
        <Sidebar options={[{name: 'Display Members', view: 'memberDisplay'}, {name: 'Add Member', view: 'addMember'}]} changeView={this.changeView} />
        <Dashboard view={this.state.view} members={this.state.members} schools={this.state.schools} addMember={this.addMember} />
      </div>
    )
  }
}

export default App
