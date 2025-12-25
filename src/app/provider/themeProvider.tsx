import { useEffect, useState, type ReactNode } from "react"
import { Theme, themeContext, type themeType } from "../styles/config/themeContext"

type Props = {
    children: ReactNode
}

export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<themeType>(Theme.PINK)

    useEffect(() => {
        document.body.className = `${theme}`;
    }, [theme]);

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}
