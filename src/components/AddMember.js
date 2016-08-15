import React from 'react'
import IoPersonAdd from 'react-icons/lib/io/person-add'

class AddMember extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: Math.round(Math.random() * 100000),
      name: '',
      email: '',
      schools: []
    }

    this.addMember = this.addMember.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addSchool = this.addSchool.bind(this)
    this.removeSchool = this.removeSchool.bind(this)
  }

  reset () {
    this.refs.addMemberForm.reset()
    this.setState({
      id: Math.round(Math.random() * 100000),
      name: '',
      email: '',
      schools: []
    })
  }

  addMember () {
    let member = this.state

    if (member.name && member.email && member.schools.length) {
      this.reset()
      return this.props.addMember(member)
    }
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addSchool (e) {
    let schools = this.state.schools
    schools.push(e.target.value)

    this.setState({
      schools: schools
    })
  }

  removeSchool (e) {
    let schools = this.state.schools.filter((school) => school !== e.target.value)

    this.setState({
      schools: schools
    })
  }

  render () {
    let schools = this.props.schools.map((school) =>
      <option key={school._id} value={school.name}>{school.name}</option>
    )

    let schoolsSelected = this.state.schools.map((school, i) =>
      <button className='school-selected' key={i} onClick={this.removeSchool} value={school}><span>{school}</span> X</button>
    )

    return (
      <section className='AddMember'>
        <form ref='addMemberForm'>
          <label>
            <p>Name</p>
            <input name='name' onChange={this.handleChange} type='text' placeholder='Jane Smith' />
          </label>
          <label>
            <p>Email Address</p>
            <input name='email' onChange={this.handleChange} type='email' placeholder='example@hotmail.com' />
          </label>
          <label>
            <p>School</p>
            <select name='schools' onChange={this.addSchool}>
              {schools}
            </select>
          </label>
          <button className='submit-member' type='button' onClick={this.addMember}>Add Member</button>
        </form>
        <div className='display-new-member'>
          <IoPersonAdd size={100} />
          <h3>{this.state.name}</h3>
          <h3>{this.state.email}</h3>
          {schoolsSelected}
        </div>
      </section>
    )
  }
}

export default AddMember
