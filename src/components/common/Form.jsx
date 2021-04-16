import React, { Component } from 'react'
import Input from './Input'


export default class Form extends Component {

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };

    data[currentTarget.name] = currentTarget.value;
    this.setState({ data })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
  }

  handleClick = () => {

  }

  renderInput = ({ name, placeholder, type = "text" }) => {
    return <Input name={name} type={type} onChange={this.handleChange} placeholder={placeholder} />
  }

}
