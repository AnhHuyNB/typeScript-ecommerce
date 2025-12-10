import { createContext } from "react";

const Theme = {
    BLUE: 'blue-theme',
    PINK: 'pink-theme'
} as const

type themeType = (typeof Theme)[keyof typeof Theme]

const theme = createContext('')