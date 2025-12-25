import { createContext } from "react";

export const Theme = {
    BLUE: 'blue-theme',
    PINK: 'pink-theme'
} as const

export type themeType = (typeof Theme)[keyof typeof Theme]

type ThemeContextProps = {
    theme?: themeType,
    setTheme?: (Theme: themeType) => void
}

export const themeContext = createContext<ThemeContextProps>({})
