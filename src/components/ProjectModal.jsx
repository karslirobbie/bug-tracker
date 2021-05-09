import React from 'react'
import Form from './common/Form'
import { createTicket } from '../services/ticketService'
import ModalTemplate from './common/ModalTemplate'
import Joi from 'joi'


export default class ProjectModal extends Form {
  state = {
    data: {},
    errors: []
  }

  schema = Joi.object({
    title: Joi.string().required().max(55).label('Title'),
    alias: Joi.string().required().max(6).label('Alias'),
    description: Joi.string().required(255).label('Description'),
    status: Joi.string().required().label('Status'),
    team: Joi.string().label('Team'),
    department: Joi.string().label('Department'),
    urgency: Joi.string().required().label('Urgency'),
  })

  handleSubmit = () => {
    const valid = this.validateAll(this.state.data)

    if (!valid) return console.log('Errors')

    this.resetErrors()
    // console.log(await createTicket('Hello'));
  };



  render () {
    return (
      <ModalTemplate
        title="Tickets"
        show={this.props.show}
        content={
          <div className="flex justify-center bg-gray-900 w-full h-full overflow-auto">
            <div className="w-3/4">
              <div className="mt-5 md:mt-0">
                <form>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 space-y-6 sm:p-6">
                      {this.renderRegularInput({ label: 'Title', name: 'title' })}

                      {this.renderRegularInput({ label: 'Alias', name: 'alias' })}

                      {this.renderInputDescription({ type: 'ticket', name: 'description' })}

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Status', name: 'status', data: ['Open', 'In Progress', 'Done'] })}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Urgency', name: 'urgency', data: ['Low', 'Med', 'High'] })}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Team', name: 'team', data: ['Team 1', 'Team 2', 'Team 3'] })}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Department', name: 'department', data: ['Department 1', 'Department 2', 'Department 3'] })}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>}
        onSubmit={this.handleSubmit}
        onHide={this.resetErrors} />
    )
  }
}


