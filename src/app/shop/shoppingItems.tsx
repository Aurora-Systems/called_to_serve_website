"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { search } from "ss-search";
import { ItemsResInterface } from "@/models/items";
import db from "@/services/db";
import { userId } from "@/services/access";
import Card from "@/components/Card/Card";

function ShoppingItems() {
  const [items, setItems] = useState<Array<ItemsResInterface>>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

  const router = useRouter();

  // console.log(items, "Items");

  async function getData() {
    // const { data, error } = await db.from("items").select("*").eq("user_id", userId);

    // if(err){
    //   return router.push('/error');
    // }else{
    //   setItems(data);
    // }

    try {
      const { data, error: err } = await db.from("items").select("*").eq("user_id", userId);
      
      if(err){
        throw err;
      } else {
        setItems(data);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to load!');
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e) {
		e.preventDefault();
		if (!searchQuery.trim()) return; // do nothing if search query is empty space
		if (loading) return;// do nothing if app is already loading
		setLoading(true);

		try {
			// const searchResults = await searchMovies(searchQuery);
			// setMovies(searchResults);
			setError(null);
		} catch (error) {
			console.error(error);
			setError('Failed to load search results!');
		} finally {
			setLoading(false);
			setSearchQuery('');
		}
	}

  useEffect(() =>{
    getData();
  },[]);

  return (
    <>
      <form onSubmit={handleSearch} className='flex items-center justify-center text-3xl'>
				<input
					type='text'
					className='outline-none rounded-lg p-5'
					placeholder='Search for products...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				{/* <button type='submit' className='search-button'>
					Search
				</button> */}
			</form>

      {/* <section className="flex items-center justify-center container mx-auto pb-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items && items.map((item, i) => { 
            const { data } = db.storage.from("images").getPublicUrl(item.image_id);
            let stock_message = <></>;

            if(item.in_stock < 5 && item.in_stock !== 0) {
              stock_message = <span className="text-warning">Limited stock - {item.in_stock} Left</span>
            } else if (item.in_stock > 5){
              stock_message = <span className="text-success">In Stock</span>
            } else {
              stock_message = <span className="text-danger">Out of stock - custom orders only</span>
            }

            return (<Card key={item.id} price={item.price.toFixed(2)} stockMessage={stock_message} itemName={item.item_name} imageUrl={data.publicUrl} />);
          })}
        </div>
      </section> */}

      {loading ? (
				<div className='flex items-center justify-center text-3xl' style={{height: '300px'}}><span>Loading...</span></div>
			) : error ? (
				<div className='flex items-center justify-center text-3xl h-100 text-primary' style={{height: '300px'}}><span>{error}</span></div>
			) : (
        <section className="flex items-center justify-center container mx-auto pb-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items && search(items, ['item_name'], searchQuery).map(item => { 
              const { data } = db.storage.from("images").getPublicUrl(item.image_id);
              let stock_message = <></>;

              if(item.in_stock < 5 && item.in_stock !== 0) {
                stock_message = <span className="text-warning">Limited stock - {item.in_stock} Left</span>
              } else if (item.in_stock > 5){
                stock_message = <span className="text-success">In Stock</span>
              } else {
                stock_message = <span className="text-danger">Out of stock - custom orders only</span>
              }

              // return (item.item_name.toLowerCase().startsWith(searchQuery) && <Card key={item.id} price={item.price.toFixed(2)} stockMessage={stock_message} itemName={item.item_name} imageUrl={data.publicUrl} />);
              return (<Card key={item.id} price={item.price.toFixed(2)} stockMessage={stock_message} itemName={item.item_name} imageUrl={data.publicUrl} />);
            })}
          </div>
        </section>
			)}
    </>
  )
}

export default ShoppingItems;