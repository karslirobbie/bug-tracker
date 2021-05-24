import React, { Component } from 'react'
import Input from './Input'
import Dropdown from './Dropdown'
import InputDescription from './InputDescription'
import RegularInput from './RegularInput'
import RegularDropdown from './RegularDropdown'
import { toast } from 'react-toastify'



export default class Form extends Component {

  status = [{ label: 'Open' }, { label: 'In Progress' }, { label: 'Done' }];
  urgency = [{ label: 'Low' }, { label: 'Med' }, { label: 'High' }];
  type = [{ label: 'Task' }, { label: 'Bug' }, { label: 'Feature' }];
  roles = [{ label: 'Admin', value: 'admin' }, { label: 'User', value: 'user' }]

  handleSubmit = async ({ tag }, exec) => {
    const valid = this.validateAll(this.state.data)

    if (!valid) return console.log('Errors')

    const data = { ...this.state.data, createdBy: this.props.currentUser, tag }
    this.resetErrors()
    this.props.setState(await exec(data))
    toast.dark('Success.')
  };


  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data })
    this.validateOne({ name, value })
  }


  validateOne = ({ name, value }) => {
    const schema = this.schema.extract(name);
    const { error } = schema.validate(value);
    let errors = [...this.state.errors]

    errors = errors.filter(({ path }) => path != name)

    if (error) {
      const err = { path: name, message: error.details[0].message }
      errors = [...errors, err]
      this.setState({ errors })
      return false;
    }

    this.setState({ errors })
    return true;
  }


  validateAll = (body) => {
    const { error } = this.schema.validate(body, { abortEarly: false })

    if (error) {
      let errors = [];
      error.details.map(err => errors.push({ path: err.path[0], message: err.message }))
      this.setState({ errors })
      return false;
    }

    return true;
  }


  resetErrors = () => {
    this.setState({ errors: [] })
    this.props.handleHide()
  }


  errorMessage = (name) => this.state.errors.find(({ path }) => path == name)?.message


  renderInput = ({ name, placeholder, type = "text" }) => {
    return <Input name={name} type={type} onChange={this.handleChange} placeholder={placeholder} />
  }

  renderInputDescription = ({ name, type, label }) => {
    return <InputDescription type={type} name={name} label={label} onChange={this.handleChange} error={this.errorMessage(name)} />
  }

  renderRegularInput = ({ label, name }) => {
    return <RegularInput label={label} name={name} onChange={this.handleChange} error={this.errorMessage(name)} />
  }

  renderDropdown = ({ label, name, data }) => {
    return <Dropdown label={label} name={name} data={data} onChange={this.handleChange} error={this.errorMessage(name)} />
  }

  renderRegularDropdown = ({ name, data, placeholder }) => {
    return <RegularDropdown name={name} placeholder={placeholder} data={data} onChange={this.handleChange} error={this.errorMessage(name)} />
  }
}
