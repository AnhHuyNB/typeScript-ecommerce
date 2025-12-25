import { useContext } from 'react'
import { Theme, themeContext } from './themeContext'

const UseTheme = () => {
    const { theme, setTheme } = useContext(themeContext)

    const toggleTheme = () => {
        const newTheme = theme == Theme.PINK ? Theme.BLUE : Theme.PINK;
        setTheme?.(newTheme);
    }
  return {theme, toggleTheme}
}

export default UseTheme;