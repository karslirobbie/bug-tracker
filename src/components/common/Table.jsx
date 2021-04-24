import React, { Fragment } from 'react'
import { ReactComponent as ID } from '../../images/id.svg'
import Pagination from './Pagination'
import { useHistory } from 'react-router-dom'
function Table ({ header, row, type }) {
  let history = useHistory();

  row = [{ id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Med" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "High" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }]

  const classes = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";

  return (
    <Fragment>
      <div className="py-2 w-full md:px-6 mb-6 mr-10 lg:pr-8 h-3/4 overflow-y-auto">
        <div className="overflow-x-scroll border-b border-t bg-gray-900 border-l border-r border-gray-900 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                {header.map(th =>
                  <th key={th}
                    scope="col"
                    className="px-3 md:px-6 lg:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {th}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-900">
              {row.map(data =>
                <tr onClick={() => history.push(`/${type}/${data.id}`)} key={data.id} className="cursor-pointer transition-all transform hover:scale-105 hover:bg-gray-900">
                  <td className="px-3 md:px-6 xl:px-2 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="xl:ml-2">
                        <div className="lg:text-sm font-medium text-gray-400">
                          {data.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 md:px-6 lg:px-2 xl:px-2 py-4 whitespace-wrap">
                    <div className="lg:text-sm text-gray-400">
                      {data.title}
                    </div>
                  </td>
                  <td className="px-3 md:px-6 xl:px-2 py-4 whitespace-nowrap text-gray-400">
                    {data.status}
                  </td>
                  <td className="px-3 md:px-6 xl:px-2 py-4 whitespace-wrap md:text-sm">
                    <span className={data.urgency == 'High' ? `${classes} bg-red-300 text-red-800`
                      : data.urgency == 'Med' ? `${classes} bg-yellow-300 text-yellow-800`
                        : `${classes} bg-green-300 text-green-800`}>

                      {data.urgency}
                    </span>
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </Fragment>
  )
}

Table.defaultProps = {
  header: [<ID />, 'Title', 'Status', 'Urgency'],
  type: "tickets"
}

export default Table
