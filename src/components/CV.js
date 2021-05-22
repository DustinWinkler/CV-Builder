import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'

export default class CV extends Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    )
  }
}
