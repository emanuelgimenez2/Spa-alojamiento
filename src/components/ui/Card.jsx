import React from 'react'

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`p-6 pb-3 ${className}`}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-xl font-semibold ${className}`}>
      {children}
    </h3>
  )
}

const CardDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  )
}

const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 pt-3 ${className}`}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
}
