import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Options from "../components/Options";

export default function User() {
	return (
		<div className='flex max-h-screen'>
			<Content>
				<Navbar role='user' />
				<Container>
					<div className='max-w-[1184px] bg-white h-full mx-auto px-5'>
						<Options />
					</div>
				</Container>
			</Content>
		</div>
	);
}
