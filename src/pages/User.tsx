import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Container from "../components/Container"
import Subhead from "../components/Subhead"
import Space from "../components/Space"

export default function User() {
  return (
    <div className='flex max-h-screen'>
      <Content>
        <Navbar role='user' />
        <Container>
          <div className='max-w-[1184px] bg-white h-full mx-auto px-5'>
            <Subhead />
            <Space />
          </div>
        </Container>
      </Content>
    </div>
  )
}
