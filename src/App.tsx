import Header from './components/layout/Header/Header'
import { ThemeProvider } from './app/provider/themeProvider.tsx'
import './i18n.ts'
import Login from './components/layout/Form/Login/Login.tsx'
import Register from './components/layout/Form/Register/Register.tsx'

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Register />
    </ThemeProvider>
  )
}

export default App
