import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Container from "../components/Container"
import { Outlet } from "react-router-dom"

export default function UserLayout() {
  return (
    <div className='flex max-h-screen'>
      <Content>
        <Navbar role='user' />
        <Container>
          <Outlet />
        </Container>
      </Content>
    </div>
  )
}
