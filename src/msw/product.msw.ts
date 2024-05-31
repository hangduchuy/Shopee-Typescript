import { rest } from 'msw'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import config from 'src/constants/config'

const URL_API = import.meta.env.VITE_URL_API
const productsRes = {
  message: 'Lấy các sản phẩm thành công',
  data: {
    products: [
      {
        _id: '60af6f12f1a3041b289d8b9b',
        images: [
          `${URL_API}images/b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg`,
          `${URL_API}images/0e91ba6d-8e35-4fee-8812-6f81bbe0e3de.jpg`,
          `${URL_API}images/519d5750-23b3-4ba1-8fb6-e74bf594c558.jpg`,
          `${URL_API}images/3640d703-9add-45b7-b726-767c13cf3238.jpg`,
          `${URL_API}images/46b7bebc-6a8d-4fb3-aa63-e9cf550f6490.jpg`,
          `${URL_API}images/30273cc8-98fb-4cc6-85e6-02c447e45f4a.jpg`
        ],
        price: 75000,
        rating: 5,
        price_before_discount: 150000,
        quantity: 52,
        sold: 5,
        view: 2802,
        name: 'Áo thun Polo nam cổ bẻ BASIC vải cá sấu Cotton xuất xịn, chuẩn đẹp, màu HỒNG',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg`,
        createdAt: '2021-05-27T10:06:10.339Z',
        updatedAt: '2024-02-01T17:53:23.763Z'
      },
      {
        _id: '60ad02422fb52902585972a9',
        images: [
          `${URL_API}images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg`,
          `${URL_API}images/182d6e25-65fa-4abe-b822-70d87550bf4e.jpg`,
          `${URL_API}images/827e675d-e553-497e-9b15-d2df5fc7192d.jpg`,
          `${URL_API}images/b6425e3f-3cc3-4696-94f7-5053afca2c71.jpg`,
          `${URL_API}images/4d80b312-e605-4508-ab80-14dd75f6d23d.jpg`,
          `${URL_API}images/9e628716-0b94-44d8-850c-e96adc4b1c8f.jpg`,
          `${URL_API}images/20a1a8e5-1b49-4854-a221-0f96130b5fd8.jpg`
        ],
        price: 279000,
        rating: 5,
        price_before_discount: 315000,
        quantity: 1959,
        sold: 36,
        view: 540,
        name: '[Mã FAMALLT5 giảm 15% đơn 150K] Áo thun tay lỡ GENZ phông Unisex nam nữ Cotton oversize form rộng Racing Genz GZT021',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg`,
        createdAt: '2021-05-25T13:57:22.760Z',
        updatedAt: '2024-02-02T02:59:08.257Z'
      },
      {
        _id: '60ad01102fb52902585972a7',
        images: [
          `${URL_API}images/05f090b8-736e-4100-b4f4-7a09f48e718a.jpg`,
          `${URL_API}images/594a2d08-04f4-4902-873f-e9ba865bc497.jpg`,
          `${URL_API}images/0f906616-bc7f-4661-9bbe-5570b5d902b7.jpg`,
          `${URL_API}images/e129d0b1-8a45-463a-a668-d619461ae984.jpg`,
          `${URL_API}images/780a9d1a-74e9-4d8c-bbae-ed3d5eca8b97.jpg`,
          `${URL_API}images/986f2f5b-23cc-498f-9adb-9d07e6923eb3.jpg`,
          `${URL_API}images/e383805f-e875-4398-800d-ae07f2d2e8ce.jpg`,
          `${URL_API}images/c3df0eba-05f8-4ba8-9ef4-f67a28fa4b81.jpg`,
          `${URL_API}images/7cefd5f0-6ded-443d-821b-4909592e6490.jpg`
        ],
        price: 53000,
        rating: 5,
        price_before_discount: 106000,
        quantity: 16746,
        sold: 2255,
        view: 1048,
        name: 'Áo thun nam nữ tay lỡ YINXX, áo phông nam nữ form rộng A304',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg`,
        createdAt: '2021-05-25T13:52:16.271Z',
        updatedAt: '2024-01-25T15:00:15.055Z'
      },
      {
        _id: '60ad004c2fb52902585972a6',
        images: [
          `${URL_API}images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg`,
          `${URL_API}images/2df345c5-4381-4863-9510-17f44572ad45.jpg`,
          `${URL_API}images/00b21c79-e1a0-45f0-9152-6881e644b15b.jpg`,
          `${URL_API}images/dc35e2ed-0407-4f27-9b97-bad9bc785deb.jpg`,
          `${URL_API}images/f1de05b8-60c5-4940-be9f-b6cc98d34061.jpg`,
          `${URL_API}images/4788c7fd-d728-4f47-8000-e858d6466384.jpg`,
          `${URL_API}images/b4614934-0164-4845-bf14-d19de6c36835.jpg`,
          `${URL_API}images/1ec5e192-c2fc-4411-b170-4aa2b1635ddb.jpg`,
          `${URL_API}images/a751a941-7d74-4f2a-a238-c806b055ed11.jpg`
        ],
        price: 49000,
        rating: 5,
        price_before_discount: 70000,
        quantity: 6797,
        sold: 21,
        view: 875,
        name: 'Mẫu Mới Khuyến Mãi Sốc 3 Ngày ⚡ Áo Thun Tay Lỡ In Bướm Dirty Coins Ao Thun Unisex From Rộng -BONSEN STORE',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg`,
        createdAt: '2021-05-25T13:49:00.060Z',
        updatedAt: '2024-01-30T13:09:08.449Z'
      },
      {
        _id: '60acfac72fb529025859729f',
        images: [
          `${URL_API}images/ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg`,
          `${URL_API}images/04001c71-9d8f-4e68-b9ac-cbb47406f30f.jpg`,
          `${URL_API}images/3142a89e-8301-42c3-9621-1c901e4a097b.jpg`,
          `${URL_API}images/849be86c-8880-44dd-a037-ffc447d336f3.jpg`,
          `${URL_API}images/0856c2f1-fcc7-470d-9e99-d7b9f6f32dcc.jpg`
        ],
        price: 39000,
        rating: 5,
        price_before_discount: 60000,
        quantity: 17453,
        sold: 97,
        view: 376,
        name: '[Có video] Áo phông form rộng tay lỡ unisex - Áo thun orange soda - Sỉ áo thun số lượng lớn',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/ad82b185-5c18-41ca-90ec-1c54c846fd49.jpg`,
        createdAt: '2021-05-25T13:25:27.965Z',
        updatedAt: '2024-02-04T18:35:15.497Z'
      },
      {
        _id: '60acf0ec2fb5290258597299',
        images: [
          `${URL_API}images/25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg`,
          `${URL_API}images/85e6928d-9e7f-4ff9-8105-8389448f6a48.jpg`,
          `${URL_API}images/1705c99d-e61b-4eb3-a786-7d90e927b242.jpg`,
          `${URL_API}images/6f9f953c-6048-419f-87c3-24c24620dfab.jpg`,
          `${URL_API}images/49eaf710-c340-43fc-b321-43bf896d7a39.jpg`,
          `${URL_API}images/400b5529-01d4-42d7-be63-e179f8c0a4df.jpg`,
          `${URL_API}images/f0b9ff49-824f-4a7a-8bce-a4d6599e26a6.jpg`,
          `${URL_API}images/03c61a2a-f703-486b-961d-73b38be7240f.jpg`,
          `${URL_API}images/59bcd4bd-fd27-416c-b7df-dd831a3da621.jpg`
        ],
        price: 119000,
        rating: 5,
        price_before_discount: 198000,
        quantity: 234,
        sold: 24,
        view: 760,
        name: 'Áo thun nam ngắn tay thể thao chất liệu thun lạnh 4 chiều AT39',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/25c409a5-9e6c-4e2d-a49e-23a8c291f749.jpg`,
        createdAt: '2021-05-25T12:43:24.537Z',
        updatedAt: '2024-02-03T16:17:10.083Z'
      },
      {
        _id: '60abaa9adbfa6e153cb9962c',
        images: [
          `${URL_API}images/c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg`,
          `${URL_API}images/d938561d-9ad1-4f61-822a-9d29b3cb663e.jpg`,
          `${URL_API}images/7c2e9bd9-0773-4f17-9568-62ab8ce3a689.jpg`,
          `${URL_API}images/a70f8655-53c8-4359-96c2-ac733f11279e.jpg`,
          `${URL_API}images/dd139f2c-14cf-43f8-ab58-2b4cadcd2140.jpg`
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 80000,
        quantity: 8129,
        sold: 4100,
        view: 590,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun nam nữ form rộng Yinxx, áo phông tay lỡ ATL43',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/c9e6cdf9-5d7c-4767-ab19-5d64b133fd3b.jpg`,
        createdAt: '2021-05-24T13:31:06.769Z',
        updatedAt: '2024-02-03T08:57:29.857Z'
      },
      {
        _id: '60aba9a2dbfa6e153cb9962b',
        images: [
          `${URL_API}images/2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg`,
          `${URL_API}images/71ff840e-80bd-4d01-b997-f409392c3901.jpg`,
          `${URL_API}images/9fb54b27-bb8d-415c-bb41-72a113f33fb5.jpg`,
          `${URL_API}images/2741ba1d-844f-4b6d-baa8-8ebe41a4d5af.jpg`,
          `${URL_API}images/63a231e8-aa62-4b0a-a7c7-9d327181ae0a.jpg`,
          `${URL_API}images/050e6792-e9bb-4093-b198-3864eddffa3f.jpg`,
          `${URL_API}images/92a099c0-b9b7-4d37-b234-ee319868bfe4.jpg`,
          `${URL_API}images/23d8c0fb-8d30-4438-a973-3908a89db968.jpg`,
          `${URL_API}images/4553c8a6-dfb8-4323-97b9-bf17cac384a4.jpg`
        ],
        price: 69000,
        rating: 5,
        price_before_discount: 100000,
        quantity: 23565,
        sold: 3800,
        view: 1006,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo thun tay lỡ unisex Yinxx, áo phông form rộng ATL187',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: `${URL_API}images/2b5e1bfa-b202-46b3-b68b-f6c8a19cb1cf.jpg`,
        createdAt: '2021-05-24T13:26:58.072Z',
        updatedAt: '2024-01-31T16:36:39.177Z'
      }
    ],
    pagination: {
      page: 1,
      limit: 30,
      page_size: 1
    }
  }
}

const productsRequest = rest.get(`${config.baseUrl}products`, (_req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(productsRes))
})

const productRequests = [productsRequest]

export default productRequests
