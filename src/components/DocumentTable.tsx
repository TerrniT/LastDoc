import {
	Card,
	Table,
	TableRow,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableBody,
	MultiSelectBox,
	MultiSelectBoxItem,
} from "@tremor/react"
import { SortDesc } from "lucide-react"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import { documentList } from "../mock/data"
import { TypeDocument } from "../types"
import { Badge } from "./atoms/badge"
import IconButton from "./atoms/IconButton"
import { useGetDocumentsQuery } from "../services/DocumentsService"

const DocumentTable = () => {
	const [selectedNames, setSelectedNames] = useState<string[]>([])

	const { data, error, isLoading } = useGetDocumentsQuery("")

	console.log(data)
	console.log(error)
	console.log(isLoading)

	// TODO: Sort By status
	const isSalesPersonSelected = (doc: TypeDocument) =>
		selectedNames.includes(doc.content) || selectedNames.length === 0

	return (
		<Card>
			<MultiSelectBox
				handleSelect={(value) => setSelectedNames(value)}
				placeholder='Select Salespeople...'
				maxWidth='max-w-xs'
			>
				{/* TODO: Sort By status */}
				{documentList.map((item) => (
					<MultiSelectBoxItem key={item.id} value={item.status} text={item.status} />
				))}
			</MultiSelectBox>
			<Table marginTop='mt-6'>
				<TableHead>
					<TableRow>
						<TableHeaderCell>
							<div className='flex gap-2'>
								<SortDesc />
								<p>Date</p>
							</div>
						</TableHeaderCell>
						<TableHeaderCell>Content</TableHeaderCell>
						<TableHeaderCell>Last update</TableHeaderCell>
						<TableHeaderCell>Status</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{documentList
						.filter((item) => isSalesPersonSelected(item))
						.map((item) => (
							<TableRow key={item.id}>
								<TableCell>
									<div className='flex flex-col'>
										<p className='text-base font-normal font-sans text-black'>{item.title.date}</p>
										<p className='text-xs'>ID {item.title.id}</p>
									</div>
								</TableCell>
								<TableCell>
									<p className='text-base text-black'>{item.content}</p>
								</TableCell>
								<TableCell>
									<div className='flex flex-col gap-1'>
										<p className='text-base text-blue-500'>{item.lastUpdate.terms}</p>
										<p className='text-xs'>{item.lastUpdate.date}</p>
									</div>
								</TableCell>
								<TableCell>
									<Badge icon={true} variant={item.status} />
								</TableCell>
								<TableCell>
									<IconButton
										onClick={() => console.log(item.content)}
										icon={BsThreeDots}
										indicator={false}
										outline={false}
									/>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</Card>
	)
}

export default DocumentTable
