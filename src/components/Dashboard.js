import React from 'react'
import Title from './Title'
import MemberDisplay from './MemberDisplay'
import AddMember from './AddMember'

class Dashboard extends React.Component {
  render () {
    let dashboardView, title

    if (this.props.view === 'memberDisplay') {
      dashboardView = <MemberDisplay members={this.props.members} />
      title = 'Member List'
    } else if (this.props.view === 'addMember') {
      dashboardView = <AddMember addMember={this.props.addMember} schools={this.props.schools} />
      title = 'Add Member'
    }

    return (
      <section className='Dashboard'>
        <Title>{title}</Title>
        {dashboardView}
      </section>
    )
  }
}

export default Dashboard
