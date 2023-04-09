export type TypeDocument = {
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

export type Status = "Pending" | "Relevant" | "Outdated"
