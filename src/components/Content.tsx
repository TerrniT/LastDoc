import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
	return <div className='flex-1 flex-col h-screen bg-gray-50'>{children}</div>;
};

export default Content;
