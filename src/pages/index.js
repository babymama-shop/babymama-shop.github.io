import * as React from "react"
import "@fontsource/quicksand/700.css"

const pageStyles = {
  position: "absolute", 
  left: "50%", 
  top: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center"
}

const headingStyles = {
  fontFamily: "Quicksand, sans-serif",
  fontSize: "3vw"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>BabyMama</title>
      <h1 style={headingStyles}>
      For all women, mothers, <br/>
      and expecting mothers we got <br/> 
      a treat coming for you.
      </h1>
      <h1 style={headingStyles}>
      By women for women – <br/>
      BabyMama
      </h1>
    </main>
  )
}

export default IndexPage
