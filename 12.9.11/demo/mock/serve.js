let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
const loginData = require("./common/login.json")
const menusData = require("./common/menus.json")
const usersData = require("./common/users.json")
const userstData = require("./common/userst.json")
const rolesData = require("./common/roles.json")
const userstdeData = require("./common/userstde.json")
const userstsdeData = require("./common/userstsde.json")
const goodsData = require("./common/goods.json")
const rightsData = require("./common/rights.json")
const categoriesData = require("./common/categories.json")
const categoriesstData =require('./common/categoriesst.json')
const ordersData =require('./common/orders.json')
let app = express() //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
app.use("/menus", function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})

/**用户列表接口 */
app.use("/users", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...usersData
    })
  )
})
/**用户开关按钮状态接口 */
app.use("/userstde", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...userstdeData
    })
  )
})
/**用户添加接口 */
app.use("/userst", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...userstData
    })
  )
})
/**用户分配接口 */
app.use("/userstsde", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...userstsdeData
    })
  )
})
/**角色列表接口 */
app.use("/roles", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...rolesData
    })
  )
})
/**权限列表接口 */
app.use("/rights", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...rightsData
    })
  )
})
/**商品列表接口 */
app.use("/goods", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...goodsData
    })
  )
})
/**分类参数接口 */
app.use("/categories", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...categoriesData
    })
  )
})

/**商品分类 */
app.use("/categoriesst", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...categoriesstData
    })
  )
})

/**订单管理 */
app.use("/orders", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...ordersData
    })
  )
})

app.listen("8090", () => {
  console.log("监听端口 8090")
})
