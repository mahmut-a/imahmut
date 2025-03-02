'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink } from 'react-icons/fi'

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
}

type ServiceModalProps = {
  isOpen: boolean
  onClose: () => void
  service: {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    projects: Project[]
  } | null
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.addEventListener('mousedown', handleClickOutside)
      // Scroll'u engelle
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('mousedown', handleClickOutside)
      // Scroll'u serbest bırak
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl"
            ref={modalRef}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="flex items-center">
                <div className="text-primary mr-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Kapat"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {service.description}
              </p>
              
              <h3 className="text-xl font-bold mb-4">İlgili Projeler</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.projects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow card-hover"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold">{project.title}</h4>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                          aria-label={`${project.title} projesini görüntüle`}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ServiceModal 