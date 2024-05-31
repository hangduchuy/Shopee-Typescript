import { rest } from 'msw'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import config from 'src/constants/config'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA0VDA4OjQxOjEwLjM0NFoiLCJpYXQiOjE3MDcwMzYwNzAsImV4cCI6MTcwNzAzNjA3MX0.OhbzeGNs1Hv5yw1HDQDCAM8jLhQ-RSwBYWAofhrvhsw'

export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA0VDA4OjQxOjEwLjM0NFoiLCJpYXQiOjE3MDcwMzYwNzAsImV4cCI6MTcxNzAzNjA3MH0.Q57FpQlGgqOKVFcd7hcMWv-uFRevdNMEGAxkLLq3Uf8'

export const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA2VDAwOjQyOjEzLjgwNFoiLCJpYXQiOjE3MDcxODAxMzMsImV4cCI6MTcwODE4MDEzMn0.DVgqzCT8iqlWb24LSYLDSSYhilqatTgyBjnNDEv3ty8',
    expires: 999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA2VDAwOjQyOjEzLjgwNFoiLCJpYXQiOjE3MDcxODAxMzMsImV4cCI6MTcxNzE4MDEzM30.mbyRY82GOzudDpaUlUWpfGNjPvJiZW3dqp_n7aOX6to',
    expires_refresh_token: 10000000,
    user: {
      _id: '636fc39a5fdc5f037e6f68da',
      roles: ['User'],
      email: 'd@gmail.com',
      createdAt: '2022-11-12T16:02:34.141Z',
      updatedAt: '2024-01-31T16:28:49.196Z',
      __v: 0,
      address: 'Bắc Ninh',
      date_of_birth: '1998-10-10T17:00:00.000Z',
      name: 'Vi Quy Duc 2',
      phone: '0978789814',
      avatar: '8165a6b8-30a9-4ca1-8f02-08b547400936.jpg'
    }
  }
}

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA2VDAwOjQyOjEzLjgwNFoiLCJpYXQiOjE3MDcxODAxMzMsImV4cCI6MTcxNzE4MDEzM30.mbyRY82GOzudDpaUlUWpfGNjPvJiZW3dqp_n7aOX6to'
  }
}

const loginRequest = rest.post(`${config.baseUrl}login`, (_req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
})

const refreshRequest = rest.post(`${config.baseUrl}refresh-access-token`, (_req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(refreshTokenRes))
})

const authRequests = [loginRequest, refreshRequest]

export default authRequests
