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
import { Badge } from "./atoms/badge"
import IconButton from "./atoms/IconButton"

export type Status = "pending" | "relevant" | "outdated"

type Document = {
  id: number
  title: {
    date: string
    id: string
  }
  content: string
  lastUpdate: {
    terms: string
    date: string
  }
  status: Status
}

const documentList: Document[] = [
  {
    id: 1,
    title: {
      date: "01.02.2021",
      id: "0001894",
    },
    content: "Middle_Backend_Developer",
    lastUpdate: {
      terms: "Terms extension",
      date: "01.02.2021",
    },
    status: "outdated",
  },
  {
    id: 2,
    title: {
      date: "01.02.2021",
      id: "0001894",
    },
    content: "Junior_Frontend_Developer",
    lastUpdate: {
      terms: "Terms extension",
      date: "01.02.2021",
    },
    status: "pending",
  },
  {
    id: 3,
    title: {
      date: "01.02.2021",
      id: "0001894",
    },
    content: "Junior_Frontend_Developer",
    lastUpdate: {
      terms: "Terms extension",
      date: "01.02.2021",
    },
    status: "relevant",
  },
  {
    id: 4,
    title: {
      date: "01.02.2021",
      id: "0001894",
    },
    content: "Junior_Frontend_Developer",
    lastUpdate: {
      terms: "Terms extension",
      date: "01.02.2021",
    },
    status: "relevant",
  },
  {
    id: 5,
    title: {
      date: "01.02.2021",
      id: "0001894",
    },
    content: "Junior_Frontend_Developer",
    lastUpdate: {
      terms: "Terms extension",
      date: "01.02.2021",
    },
    status: "relevant",
  },
]

const DocumentTable = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  // TODO: Sort By status
  const isSalesPersonSelected = (doc: Document) =>
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
          <MultiSelectBoxItem key={item.id} value={item.content} text={item.content} />
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
                  <IconButton icon={BsThreeDots} indicator={false} outline={false} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default DocumentTable
