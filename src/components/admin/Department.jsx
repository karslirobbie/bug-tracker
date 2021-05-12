import React from 'react'
import Form from '../common/Form'
import ModalTemplate from '../common/ModalTemplate'
import { createDepartment } from '../../services/departmentService'
import Joi from 'joi'

export default class Department extends Form {
  state = {
    data: {},
    errors: []
  }

  schema = Joi.object({
    name: Joi.string().required().max(55).label('Name'),
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
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>}
        onSubmit={() => this.handleSubmit({}, createDepartment)}
        onHide={this.resetErrors}
      />
    )
  }
}
