import Router from 'koa-router'
import axios from 'axios'
import { liveXhr } from './urlConfig'

const router = Router()

// 直播
router.get('/live', async (ctx, next) => {
  let response = await axios.get(liveXhr)
  let data = response.data
  let result = data.substring(1, data.length - 1) // 去掉请求字符串的外层括号 解决直播数据错误问题
  ctx.body = JSON.parse(result)
})

export default router