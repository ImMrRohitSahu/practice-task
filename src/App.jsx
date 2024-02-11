import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import Home from './pages/Home'
import AuthContextProvider from "./contexts/AuthContext"

function App() {
 

  return (
    <AuthContextProvider>
      <AppHeader/>
      <Home/>
    </AuthContextProvider>
  )
}

export default App
