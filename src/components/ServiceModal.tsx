'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FiX, FiExternalLink } from 'react-icons/fi'
import { Service } from '@/data/projects'

type ServiceModalProps = {
  isOpen: boolean
  onClose: () => void
  service: Service
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {service.title}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                    onClick={onClose}
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-2">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Projeler</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.projects.map((project) => (
                      <div 
                        key={project.id} 
                        className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h5>
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark transition-colors"
                              aria-label={`${project.title} projesini görüntüle`}
                            >
                              <FiExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="inline-block bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
                    onClick={onClose}
                  >
                    Kapat
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ServiceModal 