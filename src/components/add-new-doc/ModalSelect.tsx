import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Status } from "./utils/index";
import { statusList } from "./utils";

interface Props {
  setStatus: (item: string) => void
}

const ModalSelect = ({ setStatus }: Props) => {
	const [selectedStatus, setSelectedStatus] = useState<Status>(statusList[0]);

	const onChange = (e: Status) => {
		setSelectedStatus(e);
		setStatus(selectedStatus.title);
	};

	return (
		<Listbox value={selectedStatus} onChange={(e) => onChange(e)}>
			<Listbox.Button className='bg-white border ring-1 ring-gray-200 w-full relative  text-start  text-sm rounded-lg focus:ring-gray-500 focus:border-gray-300 block  h-11 p-1  dark:bg-gray-100 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-300'>
				{" "}
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
