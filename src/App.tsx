import { useState } from "react"
import Admin from "./pages/Admin"
import User from "./pages/User"
import "@tremor/react/dist/esm/tremor.css"

export default function App() {
  const [mockAuth, setmockAuth] = useState<boolean>(true)

  return <>{mockAuth ? <Admin /> : <User />}</>
}
