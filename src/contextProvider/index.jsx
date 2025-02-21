import { createContext, useMemo, useState } from "react"

export const ThemeContext = createContext({
   color:'light',
   changeTheme:()=>{
   }
})
const ThemeProvider=({children})=>{
   const [color, setColor] = useState("light");
   const themeValue = useMemo(()=>({
      color,
      changeTheme:(value)=>{setColor(value)}
   }), [color])
   return(
      <ThemeContext.Provider value={themeValue}>
         {children}
      </ThemeContext.Provider>
   )
}
export default ThemeProvider;