import { Container, Title } from '@/components/shared'
import { TopBar } from '@/components/shared/top-bar'
import { Filters } from '@/components/shared/filters'
import { ProductsGroupList } from '@/components/shared/productsGroupList'
import { prisma } from '@/prisma/prisma-client'
import { Suspense } from 'react'

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variations: true
        }
      }
    }
  })

  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar categories={categories.filter(category => category.products.length)} />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                category =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
