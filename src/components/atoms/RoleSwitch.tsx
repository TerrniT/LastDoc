import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Circle, CircleDot } from "lucide-react";
import { BsCircleFill } from "react-icons/bs";

const plans = [
	{
		name: "Teacher",
		ram: "12GB",
	},
	{
		name: "Admin",
		ram: "16GB",
	},
];

export default function RoleSwitch() {
	const [selected, setSelected] = useState(plans[0]);

	return (
		<RadioGroup value={selected} onChange={setSelected} className='mt-10 mb-10 '>
			<RadioGroup.Label className='text-black'>Select type of your account</RadioGroup.Label>
			<div className='space-x-2 flex w-full h-24 mt-2'>
				{plans.map((plan) => (
					<RadioGroup.Option
						key={plan.name}
						value={plan}
						className={({ active, checked }) =>
							`${
								active
									? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300 w-full"
									: ""
							} ${
								checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
							} flex-1 w-full cursor-pointer rounded-lg px-5 py-5 shadow-md focus:outline-none`
						}
					>
						{({ active, checked }) => (
							<>
								<div className='flex w-full items-center justify-between'>
									<div className='flex items-center'>
										<div className='text-sm'>
											<RadioGroup.Label
												as='p'
												className={`font-medium ${checked ? "text-white" : "text-gray-900"}`}
											>
												{plan.name}
											</RadioGroup.Label>
											<RadioGroup.Description
												as='span'
												className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}
											></RadioGroup.Description>
										</div>
									</div>
									{!checked ? (
										<div className='shrink-0'>
											<Circle className='h-4 w-4 text-gray-400' />
										</div>
									) : (
										<div className='shrink-0'>
											<BsCircleFill className='h-4 w-4 text-gray-400' />
										</div>
									)}
								</div>
							</>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	);
}

function CheckIcon(props: any) {
	return (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
			<path
				d='M7 13l3 3 7-7'
				stroke='#fff'
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
