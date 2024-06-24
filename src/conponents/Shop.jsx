import list from '../List'
import Card from './Card'

const Shop = () => {
  return (
<section className='section' >
    {list.map((item)=>{
      return <Card item={item} key={item.id} />
    })}
</section>
  )
}

export default Shop
