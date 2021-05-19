import React from 'react'
import Joi from 'joi'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import Form from './common/Form'
import Button from './common/Button'
import login from '../images/login.svg'
import bounce from '../images/bounce.svg'
import { signIn } from '../services/authService'
import { AuthContext } from '../context'

export default class SignIn extends Form {
  static contextType = AuthContext

  state = {
    data: {},
    errors: []
  }


  schema = Joi.object({
    email: Joi.string().email({ tlds: false }),
    password: Joi.string().required()
  })


  handleSubmit = async () => {
    try {
      const data = { ...this.state.data }
      this.setToken(await signIn(data))
      this.props.history.replace({ pathname: "/tickets" })
    } catch (exc) {
      toast.dark('Invalid Username or Password')
      this.setState({ data: {} })
    }
  };


  setToken = (token) => {
    this.context.setToken(token)
    localStorage.setItem('token', token)
  }

  render () {
    return (
      <div className="h-full bg-gray-900 overflow-hidden">
        <img src={bounce} className="hidden lg:inline-flex fixed left-0 transform rotate-180 lg:z-0" />

        <div className="flex flex-col lg:grid grid-cols-2 auto-cols-fr w-full h-full bg-gray-900">
          <div className="flex w-full flex-col h-3/4 justify-center lg:h-full place-items-center z-10">
            <div className="w-3/4">
              <h1 className="text-md font-semibold lg:text-xl mb-5 text-gray-400 text-center">Welcome back!</h1>
              <div className="flex flex-col w-full place-items-center">
                {this.renderInput({ name: "email", placeholder: "Email" })}
                {this.renderInput({ name: "password", placeholder: "Password", type: "password" })}
              </div>
              <div className="mt-2 md:mt-10 flex flex-col items-center">
                <Button label="Sign in" onClick={() => this.handleSubmit({}, signIn)} />
                <p className="text-xs mt-1 md:mt-3 text-gray-400">or</p>
                <p className="text-xs mt-1 underline cursor-pointer text-lime-400 "><Link to="/signup">Sign Up</Link></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/4 mb-7 lg:h-full place-items-center justify-center text-gray-400 text-sm tracking-wide">
            <img src={login} className="flex place-items-center w-60 md:w-72 lg:w-96 lg:mb-12" />
            <p className="hidden lg:inline-flex text-base font-medium pb-2 tracking-wide">We are delighted to have you back. </p>
            <p className="hidden lg:inline-flex">Stay in progress</p>
          </div>
        </div>
      </div>
    )
  }
}
