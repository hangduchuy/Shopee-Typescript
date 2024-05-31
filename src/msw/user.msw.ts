import { rest } from 'msw'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import config from 'src/constants/config'
import { access_token_1s } from './auth.msw'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '636fc39a5fdc5f037e6f68da',
    roles: ['User'],
    email: 'd@gmail.com',
    createdAt: '2022-11-12T16:02:34.141Z',
    updatedAt: '2024-01-31T16:28:49.196Z',
    address: 'Bắc Ninh',
    date_of_birth: '1998-10-10T17:00:00.000Z',
    name: 'Vi Quy Duc 2',
    phone: '0978789814',
    avatar: '8165a6b8-30a9-4ca1-8f02-08b547400936.jpg'
  }
}

const meRequest = rest.get(`${config.baseUrl}me`, (req, res, ctx) => {
  console.log('1123', 1123)
  console.log('req', req.headers.get('authorization'))
  const access_token = req.headers.get('authorization')
  console.log('access_token', access_token)
  if (access_token === access_token_1s) {
    return res(
      ctx.status(HttpStatusCode.Unauthorized),
      ctx.json({
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      })
    )
  }
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))
})

const userRequests = [meRequest]

export default userRequests
