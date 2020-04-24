import React from 'react';
import { ThemeProvider } from "styled-components"
import Label from 'bjorn-comps/Label';

const blueTheme = {
  mainColor: "blue",
}
const greenTheme = {
  mainColor: "green",
}

/** With theme color provided */
export default function ExampleOptional() {
  return (
    <>
      <ThemeProvider theme={blueTheme}>
        <Label htmlFor="test" label="Blue theme label" />
      </ThemeProvider>
      <ThemeProvider theme={greenTheme}>
        <Label htmlFor="test2" label="Green theme label" />
      </ThemeProvider>
    </>
  )
}
