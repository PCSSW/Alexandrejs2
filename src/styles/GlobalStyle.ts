import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#455a64",
  secondary: "#00ff19",
  third: "#ffb74d",
  thirdLight: "#0038ff",
  fourth: "#b3b70e",
  white: "#ffffff",
  black: "#000000",
}
