export interface Status {
  id: number
  title: string
  color: {
    r: number
    g: number
    b: number
  }
}

export const statusList: Status[] = [
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
