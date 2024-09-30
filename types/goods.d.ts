// 成品列表
interface FinishedProduct {
  name: string
  image: string
  status: FinishedProductStatus
  info: FinishedProductInfo[]
}

enum FinishedProductStatus {
  /**
   * 调拨在途
   */
  OnWay = 1,
  /**
   * 在库
   */
  InStock = 2,
  /**
   * 维修中
   */
  Repairing = 3,
}

interface FinishedProductInfo {
  name: string
  description: string
}

// 仓库入库单
interface WarehouseReceipt {
  /**
   * 操作员
   */
  operator: string
  /**
   * 入库单号
   */
  num: string
  /**
   * 入库类型
   */
  type: WarehouseReceiptType
  /**
   * 入库单状态
   */
  status: WarehouseReceiptStatus
  /**
   * 总件数
   */
  totalCount: number
  /**
   * 总标价
   */
  totalPrice: number
  /**
   * 总金重
   */
  totalWeight: number
  /**
   * 总入网费
   */
  networkAccessFee: number
  /**
   * 备注
   */
  remark: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 完成时间
   */
  completeTime: string
}

// 入库类型
enum WarehouseReceiptType {
  /**
   * 手动入库
   */
  Manual = 1,
}

// 入库单状态
enum WarehouseReceiptStatus {
  /**
   * 已完成
   */
  Completed = 1,
  /**
   * 已撤销
   */
  Cancelled = 2,
  /**
   * 草稿
   */
  Draft = 3,
}
