import { Button } from "./components/atoms/button";

export default function App() {
	return (
		<div className='h-screen bg-white mx-auto mt-10 flex flex-col gap-4 w-24'>
			<Button variant={"default"}>Button</Button>
			<Button variant={"destructive"}>Button</Button>
			<Button variant={"ghost"}>Button</Button>
			<Button variant={"link"}>Button</Button>
			<Button variant={"outline"}>Button</Button>
			<Button variant={"subtle"}>Button</Button>

			<Button variant={"default"} size='default'>
        Button
			</Button>
			<Button variant={"default"} size='lg'>
        Button
			</Button>
			<Button variant={"default"} size='sm'>
        Button
			</Button>
		</div>
	);
}
