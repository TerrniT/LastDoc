import Container from "../components/Container";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Options from "../components/Options";
import Sidebar from "../components/Sidebar";

export default function Admin() {
	return (
		<div className='flex max-h-screen'>
			<Sidebar />
			<Content>
				<Navbar role='admin' />
				<Container>
					<div className='w-full bg-white h-full mx-auto '>
						<Options />
					</div>
				</Container>
			</Content>
		</div>
	);
}
