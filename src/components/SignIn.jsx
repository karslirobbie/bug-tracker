import React from 'react'
import { Link } from 'react-router-dom'
import Form from './common/Form'
import Button from './common/Button'
import login from '../images/login.svg'
import waveTop from '../images/wave-top.svg'
import waveBottom from '../images/wave-bottom.svg'

export default class SignIn extends Form {
  state = {
    data: {}
  }
  render () {
    return (
      <div className="h-full bg-gray-900 overflow-hidden">
        <img src={waveTop} className="fixed -top-20" />
        <div className="flex h-full">
          <div className="left flex w-1/2 place-items-center place-content-center text-center">
            <form>
              <h1 className="font-semibold text-xl mb-5 text-gray-400">Welcome back!</h1>
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
          <img src={login} className="right flex place-items-center w-1/2 xl:w-1/4" />

        </div>
        <img src={waveBottom} className="fixed -bottom-10" />
      </div>
    )
  }
}
