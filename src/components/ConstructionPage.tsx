'use client'

import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type ConstructionPageProps = {
  title?: string
  description?: string
  completionPercentage?: number
  returnUrl?: string
  returnText?: string
  projectName?: string
}

const ConstructionPage = ({
  title = 'Yapım Aşamasında',
  description = 'Çok yakında burada harika içerikler olacak. Lütfen daha sonra tekrar ziyaret edin.',
  completionPercentage = 35,
  returnUrl = '/',
  returnText = 'Ana Sayfaya Dön',
  projectName = ''
}: ConstructionPageProps) => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              href={returnUrl} 
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <FiArrowLeft className="mr-2" />
              {returnText}
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
            
            {projectName && (
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                {projectName}
              </h2>
            )}
            
            <div className="relative w-full h-64 mb-12">
              {/* Animasyonlu inşaat işçisi */}
              <div className="construction-worker">
                <div className="head"></div>
                <div className="body"></div>
                <div className="arm-left"></div>
                <div className="arm-right">
                  <div className="hammer"></div>
                </div>
                <div className="leg-left"></div>
                <div className="leg-right"></div>
                <div className="helmet"></div>
              </div>
              
              {/* Animasyonlu inşaat platformu */}
              <div className="construction-platform">
                <div className="platform"></div>
                <div className="pole-left"></div>
                <div className="pole-right"></div>
              </div>
              
              {/* Animasyonlu dişliler */}
              <div className="gear gear-large"></div>
              <div className="gear gear-medium"></div>
              <div className="gear gear-small"></div>
            </div>
            
            <p className="text-xl mb-6">
              Bu sayfa şu anda yapım aşamasındadır.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {description}
            </p>
            
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Tamamlanma: %{completionPercentage}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      <style jsx>{`
        /* İnşaat İşçisi Animasyonu */
        .construction-worker {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          z-index: 10;
        }
        
        .head {
          width: 30px;
          height: 30px;
          background-color: #ffdbac;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .helmet {
          width: 40px;
          height: 20px;
          background-color: #f9c74f;
          border-radius: 50% 50% 0 0;
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .body {
          width: 40px;
          height: 60px;
          background-color: #4895ef;
          border-radius: 10px;
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .arm-left {
          width: 15px;
          height: 40px;
          background-color: #4895ef;
          border-radius: 5px;
          position: absolute;
          top: 35px;
          left: 10px;
          transform-origin: top center;
          transform: rotate(20deg);
        }
        
        .arm-right {
          width: 15px;
          height: 40px;
          background-color: #4895ef;
          border-radius: 5px;
          position: absolute;
          top: 35px;
          right: 10px;
          transform-origin: top center;
          animation: hammer 1.5s infinite;
        }
        
        .hammer {
          width: 30px;
          height: 15px;
          background-color: #6c757d;
          position: absolute;
          bottom: -10px;
          right: -20px;
          border-radius: 2px;
        }
        
        .hammer::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 25px;
          background-color: #6c757d;
          top: -15px;
          left: 10px;
          border-radius: 2px;
        }
        
        .leg-left {
          width: 15px;
          height: 40px;
          background-color: #343a40;
          border-radius: 5px;
          position: absolute;
          top: 90px;
          left: 15px;
        }
        
        .leg-right {
          width: 15px;
          height: 40px;
          background-color: #343a40;
          border-radius: 5px;
          position: absolute;
          top: 90px;
          right: 15px;
        }
        
        /* Platform Animasyonu */
        .construction-platform {
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
          z-index: 5;
        }
        
        .platform {
          width: 200px;
          height: 20px;
          background-color: #6c757d;
          border-radius: 5px;
        }
        
        .pole-left {
          width: 10px;
          height: 100px;
          background-color: #6c757d;
          position: absolute;
          bottom: 0;
          left: 20px;
        }
        
        .pole-right {
          width: 10px;
          height: 100px;
          background-color: #6c757d;
          position: absolute;
          bottom: 0;
          right: 20px;
        }
        
        /* Dişli Animasyonları */
        .gear {
          position: absolute;
          background-color: #f9c74f;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .gear::before {
          content: "";
          width: 40%;
          height: 40%;
          background-color: #6c757d;
          border-radius: 50%;
        }
        
        .gear::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-conic-gradient(
            from 0deg,
            transparent 0deg 15deg,
            #6c757d 15deg 30deg
          );
          border-radius: 50%;
          animation: rotate 10s linear infinite;
        }
        
        .gear-large {
          width: 80px;
          height: 80px;
          top: 20px;
          right: 30px;
        }
        
        .gear-medium {
          width: 60px;
          height: 60px;
          bottom: 40px;
          left: 30px;
          animation: rotate 8s linear infinite reverse;
        }
        
        .gear-small {
          width: 40px;
          height: 40px;
          top: 40px;
          left: 60px;
          animation: rotate 6s linear infinite;
        }
        
        /* İlerleme Çubuğu */
        .progress-container {
          max-width: 400px;
          margin: 0 auto;
        }
        
        .progress-bar {
          width: 100%;
          height: 10px;
          background-color: #e9ecef;
          border-radius: 5px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background-color: #4895ef;
          border-radius: 5px;
          animation: pulse 2s infinite;
        }
        
        /* Animasyonlar */
        @keyframes hammer {
          0%, 100% {
            transform: rotate(20deg);
          }
          50% {
            transform: rotate(60deg);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </main>
  )
}

export default ConstructionPage 