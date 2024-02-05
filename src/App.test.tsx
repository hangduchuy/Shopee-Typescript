import { describe, expect, test } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
// eslint-disable-next-line import/no-named-as-default
import '@testing-library/jest-dom/matchers'
import path from './constants/path'
import { renderWithRouter } from './utils/testUtils'
// import { logScreen } from './utils/__test__/testUtils'

// expect.extend(matchers)

describe('App', () => {
  test('App render và chuyển trang', async () => {
    const { user } = renderWithRouter()
    /**
     * waitFor sẽ run callback 1 vài lần
     * cho đến khi hết timeout
     * số lần run phụ thuộc vào timeout và interval
     * mặc định: timeout = 1000ms và interval = 50ms
     * */

    // Verify vào đúng trang chủ
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee clone')
    })

    // Verify chuyển sang trang login
    await user.click(screen.getByText(/Đăng nhập/i))
    await waitFor(() => {
      expect(screen.queryByText('Bạn chưa có tài khoản?'))
      expect(document.querySelector('title')?.textContent).toBe('Đăng nhập | Shopee clone')
    })

    screen.debug(document.body.parentElement as HTMLElement, 99999999)
  })

  test('Về trang not found', async () => {
    const badRoute = '/some/bad/route'
    renderWithRouter({ route: badRoute })
    await waitFor(() => {
      expect(screen.getByText(/Retry/i))
    })
    // await logScreen()
  })

  test('Render trang register', async () => {
    renderWithRouter({ route: path.register })
    await waitFor(() => {
      expect(screen.getByText(/Bạn đã có tài khoản?/i))
    })
    // await logScreen()
  })
})
