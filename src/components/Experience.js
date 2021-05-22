import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.showForm = this.showForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.addChangedJob = this.addChangedJob.bind(this)
    this.state = {
      showForm: false,
      jobs: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.getElementsByTagName('input')
    let newSchool = {
      company: inputs[0].value,
      title: inputs[1].value,
      duration: inputs[2].value,
      responsibilities: inputs[3].value,
      edit: false
    }

    this.setState(prev => ({
      jobs: [...prev.jobs, newSchool],
      showForm: false
    }))
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  editSchool = (index) => {
    let newJobs = this.state.jobs
    let schoolToChange = newJobs[index]
    schoolToChange.edit = true
    newJobs.splice(index, 1, schoolToChange)
    console.log(schoolToChange)
    this.setState({
      jobs: newJobs
    })
  }

  addChangedJob = (event) => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    let index = inputs[4].value
    let newSchool = {
      company: inputs[0].value,
      title: inputs[1].value,
      duration: inputs[2].value,
      responsibilities: inputs[3].value,
      edit: false
    }

    let newJobs = this.state.jobs
    newJobs.splice(index, 1, newSchool)

    this.setState({
      jobs: newJobs
    })
  }

  deleteJob = (index) => {
    let newJobs = this.state.jobs
    newJobs.splice(index, 1)
    console.log('deleteJob func')
    console.log(index)

    this.setState({
      Jobs: newJobs
    })
  }

  render() {
    const jobsContent = this.state.jobs.map((job, index) => {
      let element
      if (!job.edit) {
        element = (
          <div key={index} className="m-3 p-3 border border-blue-300 shadow-lg relative">
            <p>Company:  {job.company}</p>
            <p>Title:  {job.title}</p>
            <p>Duration:  {job.duration}</p>
            <p>Responsibilities:  {job.responsibilities}</p>
            <FontAwesomeIcon icon={faEdit} className="absolute top-4 right-1 cursor-pointer" onClick={() => this.editSchool(index)}/>
            <FontAwesomeIcon icon={faTrash} className="absolute top-16 right-2 cursor-pointer" onClick={() => this.deleteJob(index)} />
          </div>
        )
      } else {
        element = (
          <form key={index} onSubmit={this.addChangedJob} className="grid grid-cols-2 shadow-lg border m-3 border-green-400">
          <label className="text-right m-1">Company</label>
          <input htmlFor="company" type="text" defaultValue={job.company} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"/>

          <label className="text-right m-1">Title</label>
          <input htmlFor="title" type="text" defaultValue={job.title} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

          <label className="text-right m-1">Duration</label>
          <input htmlFor="duration" type="text" defaultValue={job.duration} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

          <label className="text-right m-1">Responsibilities</label>
          <input htmlFor="responsibilities" type="text" defaultValue={job.responsibilities} className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

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
        <label className="text-right m-1">Company</label>
        <input htmlFor="school" type="text" className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"/>

        <label className="text-right m-1">Title</label>
        <input htmlFor="cert" type="text" className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

        <label className="text-right m-1">Duration</label>
        <input htmlFor="completed date" type="text" className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

        <label className="text-right m-1">Responsibilities</label>
        <input htmlFor="responsibilities" type="text" className="border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"  />

        <input className="col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400" type="submit" value="submit" />
      </form>
      )
    } else {
      form = <FontAwesomeIcon icon={faPlus} className="cursor-pointer mx-auto my-2" onClick={this.showForm} />
    }

    return (
      <div className="mx-auto mb-4 w-2/4">
        <h2 className="bg-blue-400 text-center text-xl">Experience</h2>
        <div className="shadow-xl border-2 border-blue-400 grid grid-cols-1 text-center relative">
          {jobsContent}
          {form}
        </div>
      </div>
    )
  }
}
