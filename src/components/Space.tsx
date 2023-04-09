import React, { useState } from "react"
import DocumentTable from "./DocumentTable"
import Pagination from "@mui/material/Pagination"

const Space = () => {
	return (
		<div className='px-4 mt-4 flex flex-col items-center gap-5'>
			<DocumentTable />
			<Pagination count={10} shape='rounded' color={"primary"} />
		</div>
	)
}

export default Space
