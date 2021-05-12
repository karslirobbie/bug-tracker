import { createUser } from '../../services/userService'
import ModalTemplate from '../common/ModalTemplate'
import Form from '../common/Form'
import Joi from 'joi'



export default class User extends Form {
  state = {
    data: {},
    errors: []
  }

  schema = Joi.object({
    name: Joi.string().required().max(55).label('Name'),
    email: Joi.string().required(50).label('Email'),
    password: Joi.string().required().label('Password'),
    roles: Joi.string().label('Roles'),
    projects: Joi.string().label('Projects'),
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

                      {this.renderRegularInput({ label: 'Email', name: 'email' })}

                      {this.renderRegularInput({ label: 'Password', name: 'password' })}

                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Roles', name: 'roles', data: this.roles })}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        {this.renderDropdown({ label: 'Project', name: 'projects', data: this.props.projects })}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>}
        onSubmit={() => this.handleSubmit({}, createUser)}
        onHide={this.resetErrors}
      />
    )
  }
}