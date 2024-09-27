interface FinishedProduct {
  name: string
  image: string
  status: Status
  info: FinishedProductInfo[]
}

interface FinishedProductInfo {
  name: string
  description: string
}

enum Status {
  OnWay = 1,
  Other = 2,
}
