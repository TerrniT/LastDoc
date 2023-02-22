import React from "react";
import DocumentTable from "./DocumentTable";

const Pagination = () => {
	return <div>Pagination</div>;
};

const Space = () => {
	return (
		<div className='px-4 mt-4'>
			<DocumentTable />
			<Pagination />
		</div>
	);
};

export default Space;
