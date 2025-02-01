import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ClipboardIcon,
  UsersIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [stats] = useState([
    { name: 'Total Events', value: '12', icon: CalendarIcon },
    { name: 'Active Tasks', value: '24', icon: ClipboardIcon },
    { name: 'Team Members', value: '8', icon: UsersIcon },
    { name: 'Success Rate', value: '98%', icon: ChartBarIcon },
  ]);

  const [upcomingEvents] = useState([
    {
      id: 1,
      title: 'Annual Tech Conference',
      date: '2024-03-15',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Product Launch',
      date: '2024-04-01',
      status: 'planning',
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
          >
            <dt>
              <div className="absolute rounded-md bg-primary-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
          <Link
            to="/events"
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            View all
          </Link>
        </div>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {upcomingEvents.map((event) => (
            <li
              key={event.id}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
            >
              <div className="flex-1 min-w-0">
                <Link to={`/events/${event.id}`} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-500 truncate">{event.date}</p>
                </Link>
              </div>
              <span
                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                  event.status === 'upcoming'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {event.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}