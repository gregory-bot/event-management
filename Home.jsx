import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { CalendarIcon, ClipboardIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Plan Amazing Events',
        'Collaborate Seamlessly',
        'Manage Everything Efficiently'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const features = [
    {
      name: 'Event Management',
      description: 'Create and manage events with ease. Track all details in one place.',
      icon: CalendarIcon,
      link: '/events'
    },
    {
      name: 'Task Assignment',
      description: 'Assign and monitor tasks for team members efficiently.',
      icon: ClipboardIcon,
      link: '/tasks'
    },
    {
      name: 'Analytics',
      description: 'Get insights into your event performance and team efficiency.',
      icon: ChartBarIcon,
      link: '/analytics'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-creative-office-environment-42925-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl font-bold mb-8">
              <span ref={el}></span>
            </h1>
            <p className="text-xl mb-12 text-gray-200">
              Transform your event planning process with our comprehensive management platform.
              Streamline collaboration, automate tasks, and deliver exceptional experiences.
            </p>
            <Link
              to="/events"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition duration-300 transform hover:scale-105"
            >
              View Our Events
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Better Planning
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage successful events
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        to={feature.link}
                        className="text-sm font-semibold leading-6 text-primary-600"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}