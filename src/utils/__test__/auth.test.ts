import { describe, it, expect, beforeEach } from 'vitest'
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA0VDA2OjQ1OjU1Ljg1NFoiLCJpYXQiOjE3MDcwMjkxNTUsImV4cCI6MTcwNzAyOTE2MH0.Qg9q_ICVDjfRgmGGwxVuW12TEla71IhXK7wvvlYgNtE'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZjMzlhNWZkYzVmMDM3ZTZmNjhkYSIsImVtYWlsIjoiZEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTAyLTA0VDA2OjQ1OjU1Ljg1NFoiLCJpYXQiOjE3MDcwMjkxNTUsImV4cCI6MTcwNzAzMjc1NX0.ldAQFd6drFJprVHNB9cc7v-Am2fNVQqQmwcOGb_Y7Ic'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  // it dùng đẻ ghi chú các trường hợp test
  it('access_token được set vào localStorage', () => {
    //expect dùng để mong đợi giá trị trả về
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toBe(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xoá hết access_token, refresh_token, profile', () => {
    setAccessTokenToLS(access_token)
    setAccessTokenToLS(refresh_token)
    clearLS()
    expect(getRefreshTokenFromLS()).toBe('')
    expect(getAccessTokenFromLS()).toBe('')
  })
})
