import React, { useContext } from 'react';
import { IoArrowForward, IoCarOutline, IoClose } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div className='w-full h-full px-4 text-white'>
      <div className='overflow-y-auto overflow-x-hidden h-[75vh]'>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='text-4xl w-20 h-[98px] flex  justify-start items-center cursor-pointer'>
          <IoClose />
        </div>
        <div className='flex flex-col gap-y-10 px-2'>
          {cart.map(item => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className=''>
          <div className='px-6 py-10 flex flex-col'>
            {/* subtotal */}
            <div className='flex justify-between text-lg'>
              <div className=''>SubTotal</div>
              <div className=''>$ {total}</div>
            </div>
            {/* total  */}
            <div className='flex justify-between text-2xl'>
              <div className=''>Total</div>
              <div className=''>${total}</div>
            </div>
          </div>
        </div>
      )}
    {/* button */}
    <div className='px-6'>
      {cart.length>=1? (
      <div className='flex justify-between gap-x-4'> 
        <button onClick={clearCart} className='btn btn-accent hover:bg-accent-hover text-primary'>Clear cart</button>
        <button className='btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 '>checkout<IoArrowForward className='text-lg'/></button>
      </div>
      ):(
        <div className='h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30'>
      <div className='text-2xl'>Your cart is empty</div>
      <div className='text-6xl'><IoCarOutline/></div>
      </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
