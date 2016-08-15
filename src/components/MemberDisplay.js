import React from 'react'

class MemberDisplay extends React.Component {
  render () {
    let rows = this.props.members.map((member, index) => 
      <tr key={index}>
        <td>{member.name}</td>
        <td>{member.email}</td>
        <td>{member.schools.join(', ')}</td>
      </tr>
    )

    return (
      <div className='MemberDisplay'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Schools</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MemberDisplay
