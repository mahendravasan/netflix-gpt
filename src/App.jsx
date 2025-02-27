import React from "react"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Layout from "./components/Layout"

function App() {
  return (
    <Provider store={appStore}>
      <Layout />
    </Provider>
  )
}

export default App
