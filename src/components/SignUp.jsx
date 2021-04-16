
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Form from './common/Form'
import Button from './common/Button'
import register from '../images/register.svg'
import bounce from '../images/bounce.svg'

export default class SignUp extends Form {
  state = {
    data: {}
  }

  render () {
    return (
      <div className="bg-lime-400 h-full w-full overflow-hidden">
        <img src={bounce} className="fixed right-0 z-0" />

        <div className="grid grid-cols-2 auto-cols-fr w-full h-full bg-lime-400">
          <div className="flex flex-col place-items-center justify-center left-panel text-gray-700 text-sm tracking-wide">
            <img src={register} className="w-72 mb-12"></img>
            <p className="text-base font-medium pb-2 tracking-wide">Wake up feeling organized. </p>
            <p>Track. Deliver. Repeat</p>
          </div>

          <div className="flex flex-col justify-center place-items-center z-10">
            <form className="mt-10 flex flex-col items-center h-1/2 place-content-center" onSubmit={this.handleSubmit}>
              <h1 className="font-semibold text-xl text-gray-400">Not a member?</h1>
              <p className="text-xs text-gray-500">Create an account</p>
              <div className="flex mt-10">
                {this.renderInput({ name: "firstname", placeholder: "First Name" })}
                {this.renderInput({ name: "lastname", placeholder: "Last Name" })}
              </div>
              <div className="flex">
                {this.renderInput({ name: "firstname", placeholder: "Email" })}
                {this.renderInput({ name: "lastname", placeholder: "Password", type: "password" })}
              </div>
              <div className="flex">
                {this.renderInput({ name: "firstname", placeholder: "Roles" })}
                {this.renderInput({ name: "lastname", placeholder: "Team" })}
              </div>
              <div className="mt-12 flex flex-col items-center">
                <Button label="Sign Up" />
                <p className="text-xs mt-3 text-gray-400">or</p>
                <p className="text-xs mt-1 underline cursor-pointer text-lime-400 "><Link to="/login">Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}