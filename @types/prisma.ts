import { Ingredient, Variation, Product } from '@prisma/client'

export type ProductWithRelations = Product & { variations: Variation[]; ingredients: Ingredient[] }
