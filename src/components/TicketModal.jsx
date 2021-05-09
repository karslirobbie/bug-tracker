import React from 'react'
import Form from './common/Form'
import Attachment from './common/Attachment'
import { createTicket } from '../services/ticketService'
import ModalTemplate from './common/ModalTemplate'
import Joi from 'joi'


export default class TicketModal extends Form {
  state = {
    data: {},
    errors: []
  }


  schema = Joi.object({
    title: Joi.string().required().max(55).label('Title'),
    description: Joi.string().required(255).label('Description'),
    type: Joi.string().required().label('Type'),
    status: Joi.string().required().label('Status'),
    assignedTo: Joi.string().label('Assign To'),
    project: Joi.string().required().label('Project'),
    urgency: Joi.string().required().label('Urgency')
  })


  handleSubmit = async () => {
    const valid = this.validateAll(this.state.data)

    if (!valid) return console.log('Errors')

    this.resetErrors()
    console.log(await createTicket(this.state.data));
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

                      {this.renderInputDescription({ type: 'ticket', name: 'description' })}

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Status', name: 'status', data: ['Open', 'In Progress', 'Done'] })}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Urgency', name: 'urgency', data: ['Low', 'Med', 'High'] })}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Type', name: 'type', data: ['Task', 'Bug', 'Feature'] })}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Project', name: 'project', data: ['Project 1', 'Project 2'] })}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Assign To', name: 'assignedTo', data: ['Robbie Karsli'] })}
                      </div>
                      <div>
                        <Attachment />
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


