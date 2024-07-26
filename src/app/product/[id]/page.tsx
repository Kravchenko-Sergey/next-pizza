'use client'

import { useParams } from 'next/navigation'

const ProductPage = () => {
  const { id } = useParams()

  return <div>{id}</div>
}

export default ProductPage
