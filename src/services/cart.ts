import { axiosInstance } from '@/services/instance'
import { CartDTO, CreateCartItemValues } from '@/services/dto/cart-dto'

export const fetchCart = async () => {
  return (await axiosInstance.get<CartDTO>('/cart')).data
}

export const updateItemQuantity = async (itemId: number, quantity: number) => {
  return (await axiosInstance.patch<CartDTO>('/cart/' + itemId, { quantity })).data
}

export const removeCartItem = async (id: number) => {
  return (await axiosInstance.delete<CartDTO>('/cart/' + id)).data
}

export const addCartItem = async (values: CreateCartItemValues) => {
  return (await axiosInstance.post<CartDTO>('/cart', values)).data
}
