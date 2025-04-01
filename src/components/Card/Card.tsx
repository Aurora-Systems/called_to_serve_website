"use client";

function Card(props) {
  return (
    <div className="card">
      <div className="p-5 flex flex-col justify-between h-full">
        <div className="rounded-xl w-full overflow-hidden">
          <img src={props.imageUrl} alt="image of a shopping item" className="w-full h-full object-cover max-h-[200px]" />
        </div>
        
        <div className="flex items-center justify-between">
          <h5 className="text-2xl md:text-3xl font-medium mt-3">{props.itemName}</h5>
          <h5 className="text-2xl md:text-3xl font-medium mt-3 text-primary">${props.price}</h5>
        </div>
       
        <p className="text-lg mt-3 mb-auto">{props.stockMessage}</p>
        <a href={`https://wa.me/263786955677?text=Good day, I would like to get more information on this product - ${props.itemName}  going for $ ${props.price} USD`} className="text-center bg-red-400 text-red-700 py-2 rounded-lg font-semibold hover:bg-red-300 focus:scale-95 transition-all duration-200 ease-out">Buy</a>
      </div>
    </div>
  )
}
// +263786955677
// "https://wa.me/263786955677?text=Good day, i would like to get more information on this product - earings  going for $ 5.00 USD"
export default Card;
