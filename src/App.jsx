import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/Index'
import AboutPage from './pages/AboutPage/Index'
import Layout from './Layout' // Adjust the path as necessary
import AppPage from './pages/AppPage/Index'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/apps' element={<AppPage />} />
      </Routes>
    </Layout>
  )
}

export default App
