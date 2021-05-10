import Joi from 'joi'
import React from 'react'
import Form from './common/Form'
import ModalTemplate from './common/ModalTemplate'
import { createProject } from '../services/projectService'


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
  })


  render () {
    return (
      <ModalTemplate
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
                        {this.renderDropdown({ label: 'Status', name: 'status', data: this.status })}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Team', name: 'team', data: ['Team 1', 'Team 2', 'Team 3'] })}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Department', name: 'department', data: [{ label: 'Department 1', value: '60575cec79f0ce1504a93c66' }, { label: 'Department 2', value: "60575cec79f0ce1504a93c66" }, { label: 'Department 3', value: "60575cec79f0ce1504a93c66" }] })}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>}
        onSubmit={() => this.handleSubmit({}, createProject)}
        onHide={this.resetErrors} />
    )
  }
}


