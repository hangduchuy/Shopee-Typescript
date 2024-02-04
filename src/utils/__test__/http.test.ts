import { describe, it, expect, beforeEach } from 'vitest'
import { Http } from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA0VDA4OjQxOjEwLjM0NFoiLCJpYXQiOjE3MDcwMzYwNzAsImV4cCI6MTcwNzAzNjA3MX0.OhbzeGNs1Hv5yw1HDQDCAM8jLhQ-RSwBYWAofhrvhsw'

const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA0VDA4OjQxOjEwLjM0NFoiLCJpYXQiOjE3MDcwMzYwNzAsImV4cCI6MTcxNzAzNjA3MH0.Q57FpQlGgqOKVFcd7hcMWv-uFRevdNMEGAxkLLq3Uf8'

describe('http axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })

  it('Gọi Api', async () => {
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  it('Auth Request', async () => {
    // Nên cps 1 các account test
    // và 1 server test
    await http.post('login', {
      email: 'd@gmail.com',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  it('Refresh Token', async () => {
    setAccessTokenToLS(access_token_1s)
    setRefreshTokenToLS(refresh_token_1000days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
