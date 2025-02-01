import { useState } from 'react';
import { CalendarIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Analytics() {
  const [metrics] = useState([
    { id: 1, name: 'Total Events', value: '42', change: '+12%', changeType: 'increase' },
    { id: 2, name: 'Total Attendees', value: '2.5k', change: '+18%', changeType: 'increase' },
    { id: 3, name: 'Revenue', value: '$45,000', change: '+8%', changeType: 'increase' },
  ]);

  const [recentEvents] = useState([
    {
      id: 1,
      name: 'Tech Conference 2024',
      attendees: 500,
      revenue: '$25,000',
      date: '2024-03-15',
    },
    {
      id: 2,
      name: 'Product Launch',
      attendees: 200,
      revenue: '$15,000',
      date: '2024-04-01',
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>

      {/* Metrics */}
      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
          >
            <dt>
              <div className="absolute rounded-md bg-primary-500 p-3">
                {metric.name === 'Total Events' && (
                  <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                )}
                {metric.name === 'Total Attendees' && (
                  <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                )}
                {metric.name === 'Revenue' && (
                  <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                )}
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{metric.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      {/* Recent Events Table */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Events</h2>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Event Name
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Attendees
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentEvents.map((event) => (
                    <tr key={event.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {event.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {event.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {event.attendees}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {event.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}