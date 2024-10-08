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

// 成品详情
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

// 盘点单
interface InventorySheet {
  /**
   * 盘点单号
   */
  num: string
  /**
   * 所属门店
   */
  store: string
  /**
   * 盘点范围
   */
  scope: string
  /**
   * 盘点仓库
   */
  wareHouse: string
  /**
   * 盘点品牌
   */
  brand: string
  /**
   * 盘点人
   */
  operator: string
  /**
   * 监盘人
   */
  supervisor: string
  /**
   * 应盘数量
   */
  shouldCount: number
  /**
   * 盘亏数量
   */
  lossCount: number
  /**
   * 盘盈数量
   */
  profitCount: number
  /**
   * 状态
   */
  InventoryStatus: InventorySheetStatus
  /**
   * 创建时间
   */
  createTime: string
}

// 盘点单状态
enum InventorySheetStatus {
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
  /**
   * 盘点中
   */
  InProgress = 4,
}
