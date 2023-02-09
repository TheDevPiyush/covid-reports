import React, { Component } from 'react'
import './Home.css'
export default class About extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="jumbotron">
            <h1 className="display-4 fw-bold">Welcome !!</h1>
            <p className="lead fw-bold">This website uses an API from <a target={"_blank"} rel="noreferrer" href='https://rapidapi.com/api-sports/api/covid-193/'>Rapid Api Service</a> to get information about covid.</p>
            <hr className="my-4" />
            <p>Hi, I'm Piyush. I'm a student learning computer science. This is a react project to get and display real data of Covid - 19 for various popular countries.</p>
            <p>If you wish to have a website for yourself or for your business, feel free to email me :<br></br> contactpiyushhere@gmail.com.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" rel="noreferrer" href="mailto:contactpiyushhere@gmail.com" role="button">Contact Me</a>
            </p>
          </div>
        </div>
      </>
    )
  }
}
