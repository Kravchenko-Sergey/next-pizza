import { axiosInstance } from '@/services/instance'
import { Ingredient } from '@prisma/client'
import { ApiRoutes } from '@/services/constants'

export const getAll = async () => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.GET_INGREDIENTS)).data
}
