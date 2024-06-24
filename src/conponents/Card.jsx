
const Card = ({item}) => {
  return (
    <section >
    <div className="card" >

       <div className="card-img">
       <img src={item.img} alt={item.title} />
       </div>

       <div className="details">
       <h3>{item.title}</h3>
        <h4>{item.author}</h4>
        <h4>{item.price}</h4>
        <button>Add to Cart</button>
       </div>
      
    </div>
    </section>
  )
}

export default Card

