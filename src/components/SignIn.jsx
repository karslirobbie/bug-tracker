import React from 'react'
import { Link } from 'react-router-dom'
import Form from './common/Form'
import Button from './common/Button'
import login from '../images/login.svg'
import bounce from '../images/bounce.svg'
export default class SignIn extends Form {
  state = {
    data: {}
  }
  render () {
    return (
      <div className="h-full bg-gray-900 overflow-hidden">
        <img src={bounce} className="fixed left-0 transform rotate-180 z-0" />

        <div className="grid grid-cols-2 auto-cols-fr w-full h-full bg-gray-900">
          <div className="flex flex-col justify-center place-items-center z-10">
            <form>
              <h1 className="font-semibold text-xl mb-5 text-gray-400 text-center">Welcome back!</h1>
              <div className="flex flex-col">
                {this.renderInput({ name: "email", placeholder: "Email" })}
                {this.renderInput({ name: "password", placeholder: "Password", type: "password" })}
              </div>
              <div className="mt-10 flex flex-col items-center">
                <Button label="Sign in" />
                <p className="text-xs mt-3 text-gray-400">or</p>
                <p className="text-xs mt-1 underline cursor-pointer text-lime-400 "><Link to="/signup">Sign Up</Link></p>
              </div>
            </form>
          </div>
          <div className="flex flex-col place-items-center justify-center left-panel text-gray-400 text-sm tracking-wide">
            <img src={login} className="right flex place-items-center w-72 mb-12" />
            <p className="text-base font-medium pb-2 tracking-wide">We are delighted to have you back. </p>
            <p>Stay in progress</p>
          </div>
        </div>
      </div>
    )
  }
}
