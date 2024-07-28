import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import ChooseProductModal from '@/components/shared/modals/choose-product-modal'
import { Container } from '@/components/shared'

export default async function ProductModalPage({ params: { id } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      variations: true
    }
  })

  if (!product) {
    return notFound()
  }

  return (
    <Container className='flex flex-col my-10'>
      <ChooseProductModal product={product} />
    </Container>
  )
}
