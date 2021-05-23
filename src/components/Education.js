import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Education extends Component {
  constructor(props) {
    super(props)
    this.showForm = this.showForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteSchool = this.deleteSchool.bind(this)
    this.addChangedSchool = this.addChangedSchool.bind(this)
    this.state = {
      showForm: false,
      education: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.getElementsByTagName('input')
    console.log(inputs[0].value)

    let newSchool = {
      name: inputs[0].value,
      cert: inputs[1].value,
      completed: inputs[2].value,
      edit: false
    }

    this.setState(prev => ({
      education: [...prev.education, newSchool],
      showForm: false
    }))
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  editSchool = (index) => {
    let newSchools = this.state.education
    let schoolToChange = newSchools[index]
    schoolToChange.edit = true
    newSchools.splice(index, 1, schoolToChange)
    console.log(schoolToChange)
    this.setState({
      education: newSchools
    })
  }

  addChangedSchool = (event) => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    let index = inputs[3].value
    let newSchool = {
      name: inputs[0].value,
      cert: inputs[1].value,
      completed: inputs[2].value,
      edit: false
    }

    let newSchools = this.state.education
    newSchools.splice(index, 1, newSchool)

    this.setState({
      education: newSchools
    })
  }

  deleteSchool = (index) => {
    let newSchools = this.state.education
    newSchools.splice(index, 1)
    console.log('deleteSchool func')
    console.log(index)

    this.setState({
      schools: newSchools
    })
  }

  render() {
    const educationContent = this.state.education.map((school, index) => {
      let element
      if (!school.edit) {
        element = (
          <div key={index} className="m-3 p-3 border border-blue-300 shadow-lg relative">
            <p>School: {school.name}</p>
            <p>Certificate: {school.cert}</p>
            <p>Completion Date: {school.completed}</p>
            <FontAwesomeIcon icon={faEdit} className="absolute top-4 right-1 cursor-pointer" onClick={() => this.editSchool(index)}/>
            <FontAwesomeIcon icon={faTrash} className="absolute top-16 right-2 cursor-pointer" onClick={() => this.deleteSchool(index)} />
          </div>
        )
      } else {
        element = (
          <form key={index} onSubmit={this.addChangedSchool} className="grid grid-cols-2 shadow-lg border m-3 border-green-400">
          <label className="text-right m-1">School</label>
          <input htmlFor="school" type="text" defaultValue={school.name} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"/>

          <label className="text-right m-1">Certificate</label>
          <input htmlFor="cert" type="text" defaultValue={school.cert} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

          <label className="text-right m-1">Completion Date</label>
          <input htmlFor="completed date" type="text" defaultValue={school.completed} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

          <input type="hidden" value={index} />

         <input className="col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400" type="submit" value="submit" />
        </form>
        )
      }
      return element
    })

    let form

    if (this.state.showForm) {
      form = (
        <form onSubmit={this.handleSubmit} className="grid grid-cols-2 shadow-lg border m-3 border-green-400">
        <label className="text-right m-1">School</label>
        <input htmlFor="school" type="text" defaultValue={this.state.name} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"/>

        <label className="text-right m-1">Certificate</label>
        <input htmlFor="cert" type="text" defaultValue={this.state.email} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

        <label className="text-right m-1">Completion Date</label>
        <input htmlFor="completed date" type="text" defaultValue={this.state.phone} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

        <input className="col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400" type="submit" value="submit" />
      </form>
      )
    } else {
      form = <FontAwesomeIcon icon={faPlus} className="cursor-pointer mx-auto my-2" onClick={this.showForm} />
    }

    return (
      <div className="mx-auto mb-4 w-2/4 max-w-lg">
        <h2 className="bg-blue-400 text-center text-xl">Education</h2>
        <div className="shadow-xl border-2 border-blue-400 grid grid-cols-1 text-center relative">
          {educationContent}
          {form}
        </div>
      </div>
    )
  }
}
