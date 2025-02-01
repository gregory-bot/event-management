import { useState } from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finalize venue booking',
      assignee: 'John Doe',
      dueDate: '2024-02-15',
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Send invitations',
      assignee: 'Jane Smith',
      dueDate: '2024-02-20',
      status: 'pending',
      priority: 'medium'
    }
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      assignee: 'Unassigned',
      dueDate: '',
      status: 'pending',
      priority: 'medium'
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ));
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Tasks</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage and track tasks for your events
          </p>
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="mt-6 flex gap-x-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </form>

      {/* Tasks List */}
      <div className="mt-8 flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {tasks.map((task) => (
            <li key={task.id} className="py-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`rounded-full p-1 ${
                    task.status === 'completed'
                      ? 'bg-green-100 text-green-500'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <CheckIcon className="h-5 w-5" />
                </button>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-medium text-gray-900 ${
                    task.status === 'completed' ? 'line-through' : ''
                  }`}>
                    {task.title}
                  </p>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span>{task.assignee}</span>
                    <span>·</span>
                    <span>Due {task.dueDate}</span>
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                        task.priority === 'high'
                          ? 'bg-red-100 text-red-800'
                          : task.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}