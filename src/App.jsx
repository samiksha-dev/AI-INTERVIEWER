import React from 'react'
import Home from './pages/Home/Home'
import QuestionCard from './pages/Interview/components/QuestionCard'
import appRoutes from './routes/AppRoutes'
import { RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <RouterProvider router={appRoutes} />
  )
}

export default App