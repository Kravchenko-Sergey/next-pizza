import { Container, Title } from '@/components/shared'
import { TopBar } from '@/components/shared/top-bar'
import { Filters } from '@/components/shared/filters'
import { ProductsGroupList } from '@/components/shared/productsGroupList'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters className='' />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 5,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 6,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  }
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 7,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 8,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 9,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 10,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 11,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 12,
                    name: 'Ветчина и сыр',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }]
                  }
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
