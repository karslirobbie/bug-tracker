import React from 'react'
import Form from '../common/Form'
import ModalTemplate from '../common/ModalTemplate'
import { createTeam } from '../../services/teamService'
import Joi from 'joi'

export default class Team extends Form {
  state = {
    data: {},
    errors: []
  }

  schema = Joi.object({
    name: Joi.string().required().max(55).label('Name'),
    members: Joi.string().label('Members'),
    department: Joi.string().required().label('Department'),
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
                      {this.renderRegularInput({ label: 'Name', name: 'name' })}
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Members', name: 'members', data: this.props.users })}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Department', name: 'department', data: this.props.departments })}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>}
        onSubmit={() => this.handleSubmit({}, createTeam)}
        onHide={this.resetErrors}
      />
    )
  }
}
