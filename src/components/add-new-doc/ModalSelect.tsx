import { useState } from "react";
import { Listbox } from "@headlessui/react";

interface Status {
  id: number
  title: string
  color: {
    r: number
    g: number
    b: number
  }
}

const statusList: Status[] = [
	{
		id: 1,
		title: "Relevant",
		color: {
			r: 145,
			g: 197,
			b: 97,
		},
	},
	{
		id: 2,
		title: "Pending",
		color: {
			r: 214,
			g: 162,
			b: 67,
		},
	},
	{
		id: 3,
		title: "Outdated",
		color: {
			r: 231,
			g: 74,
			b: 74,
		},
	},
];

const ModalSelect = () => {
	const [selectedStatus, setSelectedStatus] = useState<Status>(statusList[0]);

	return (
		<Listbox value={selectedStatus} onChange={setSelectedStatus}>
			<Listbox.Button className='bg-white border w-full relative border-gray-300 text-start  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-11 p-1  dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
				<span
					className={" w-full rounded-md p-1"}
					style={{
						backgroundColor: `rgba(${selectedStatus.color.r}, ${selectedStatus.color.g}, ${selectedStatus.color.b}, 0.2)`,
						border: `0.5px solid rgba(${selectedStatus.color.r}, ${selectedStatus.color.g}, ${selectedStatus.color.b}, 0.4)`,
						color: `rgb(${selectedStatus.color.r}, ${selectedStatus.color.g}, ${selectedStatus.color.b})`,
					}}
				>
					{selectedStatus.title}
				</span>
			</Listbox.Button>
			<Listbox.Options className='absolute mt-2 bg-white border shadow-lg shadow-zinc-400 rounded-lg border-gray-300  w-full max-w-[540px] z-10'>
				{statusList.map((status) => (
					<Listbox.Option
						key={status.id}
						value={status}
						className='bg-white hover:bg-zinc-100 transition-all duration-150 m-1 py-2 rounded'
					>
						<span
							className={" w-full rounded-md p-1"}
							style={{
								backgroundColor: `rgba(${status.color.r}, ${status.color.g}, ${status.color.b}, 0.2)`,
								border: `0.5px solid rgba(${status.color.r}, ${status.color.g}, ${status.color.b}, 0.4)`,
								color: `rgb(${status.color.r}, ${status.color.g}, ${status.color.b})`,
							}}
						>
							{status.title}
						</span>
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};

export default ModalSelect;
