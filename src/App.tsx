import {Flex} from "@chakra-ui/react"
import Content from "./components/Content"
import Sidebar from "./components/Sidebar"

export default function App() {
  return (
    <Flex h="100vh">
      <Sidebar/>
      <Content/>
    </Flex>
  
  )
}

