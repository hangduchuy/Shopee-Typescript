import { screen, waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { logScreen, renderWithRouter } from 'src/utils/testUtils'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom/matchers'

describe('Login', () => {
  it('Hiển thị lỗi required khi không nhập gì', async () => {
    const { user } = renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email'))
    })
    const submitButton = document.querySelector('form button[type="submit"]') as Element
    user.click(submitButton)
    expect(await screen.findByText('Email là')).toBeTruthy()
    expect(await screen.findByText('Password là bắt buộc')).toBeTruthy()
    await logScreen()
  })
})
