import React from 'react'
import { ReactComponent as ID } from '../../images/id.svg'

function Table ({ header, row }) {

  row = [{ id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }, { id: "CAST-100", title: "Sample Ticket for the economy", status: "Open", urgency: "Low" }]

  const classes = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";

  return (
    <div className="py-2 w-full mb-10 sm:px-6 mr-10 lg:pr-8 h-full overflow-y-auto">

      <div className="shadow border-b border-gray-900 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-900 rounded-lg">
            <tr>
              {header.map(th =>
                <th key={th}
                  scope="col"
                  className="px-6 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {th}
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-900">
            {row.map(data =>
              <tr key={data.id}>
                <td className="px-6 xl:px-2 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="xl:ml-2">
                      <div className="text-sm font-medium text-gray-300">
                        {data.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 xl:px-2 py-4 whitespace-wrap">
                  <div className="text-sm text-gray-300">{data.title}</div>
                </td>
                <td className="px-6 xl:px-2 py-4 whitespace-nowrap text-gray-300">
                  {data.status}
                </td>
                <td className="px-6 xl:px-2 py-4 whitespace-wrap text-sm">
                  <span className={data.urgency == 'High' ? `${classes} bg-red-300 text-red-800`
                    : data.urgency == 'Med' ? `${classes} bg-yellow-200 text-yellow-800`
                      : `${classes} bg-green-200 text-green-800`}>

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
  )
}

Table.defaultProps = {
  header: [<ID />, 'Title', 'Status', 'Urgency']
}

export default Table
