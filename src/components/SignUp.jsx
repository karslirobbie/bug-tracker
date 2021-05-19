
import React from 'react'
import { Link } from 'react-router-dom'
import Form from './common/Form'
import Button from './common/Button'
import register from '../images/register.svg'
import bounce from '../images/bounce.svg'
import Joi from 'joi'
export default class SignUp extends Form {
  state = {
    data: {},
    errors: []
  }

  schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    team: Joi.string()
  })

  render () {
    return (
      <div className="bg-gray-800 h-full w-full overflow-hidden">
        <img src={bounce} className="hidden lg:inline-flex fixed lg:right-0 z-0" />

        <div className="flex flex-col-reverse lg:grid grid-cols-2 auto-cols-fr w-full h-full bg-gray-900">
          <div className="hidden lg:flex flex-col place-items-center h-full justify-center text-gray-400 text-sm tracking-wide">
            <img src={register} className="md:w-60 lg:w-72 lg:mb-12"></img>
            <p className="text-base font-medium pb-2 tracking-wide">Wake up feeling organized. </p>
            <p>Track. Deliver. Repeat</p>
          </div>

          <div className="flex flex-col justify-center h-full place-items-center z-10">
            <div className="mt-10 flex flex-col items-center h-1/2 place-content-center">
              <h1 className="font-semibold text-md lg:text-xl text-gray-300">Not a member?</h1>
              <p className="text-xs text-gray-500">Create an account</p>

              <div className="p-5"></div>
              {this.renderInput({ name: "name", placeholder: "Name" })}
              <div className="flex">
                {this.renderInput({ name: "firstname", placeholder: "Email" })}
                {this.renderInput({ name: "lastname", placeholder: "Password", type: "password" })}
              </div>
              <div className="flex">
                {this.renderRegularDropdown({ name: "firstname", placeholder: "Role", data: this.roles })}
                {this.renderInput({ name: "lastname", placeholder: "Team" })}
              </div>
              <div className="mt-4 md:mt-12 flex w-full flex-col items-center">
                <Button label="Sign Up" />
                <p className="text-xs mt-3 text-gray-400">or</p>
                <p className="text-xs mt-1 underline cursor-pointer text-lime-400 "><Link to="/login">Sign In</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}