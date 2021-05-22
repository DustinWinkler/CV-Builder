import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      name: '',
      email: '',
      phone: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.form = this.form.bind(this)
    this.info = this.info.bind(this)
    this.editHandler = this.editHandler.bind(this)
  }
  
  handleSubmit(event) {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    console.log(inputs)

    this.setState({
      showForm: false,
      name: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value
    })
  }

  editHandler() {
    this.setState({
      showForm: true
    })
  }

  form = () => {
    return (
      <form onSubmit={this.handleSubmit} className="grid grid-cols-2 shadow-xl border-2 border-blue-400">
        <label className="text-right m-2">Name</label>
        <input htmlFor="name" type="text" defaultValue={this.state.name} className="border m-2 border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300"  />

        <label className="text-right m-2">Email</label>
        <input htmlFor="Email" type="email" defaultValue={this.state.email} className="border m-2 border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300"  />

        <label className="text-right m-2">Phone Number</label>
        <input htmlFor="phone number" type="text" defaultValue={this.state.phone} className="border m-2 border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300"  />

        <input className="col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400" type="submit" value="submit" />
      </form>
    )
  }
    

  info = () => {
    return(
      <div className="grid grid-cols-1 text-center shadow-xl border-2 border-blue-400 p-3">
        <p className="m-2">Name: {this.state.name}</p>
        <p className="m-2">Email: {this.state.email}</p>
        <p className="m-2">Phone Number: {this.state.phone}</p>
        <FontAwesomeIcon icon={faEdit} className="absolute cursor-pointer" onClick={this.editHandler} />
      </div>
    )
  }

  render() {
    let content
    if (this.state.showForm) {
      content = this.form()
    } else {
      content = this.info()
    }


    return (
      <div className="mx-auto mb-4 w-2/4">
        <h2 className="bg-blue-400 text-center text-xl">General Information</h2>
        <div>{content}</div>
      </div>
    )
  }
}
