import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import './css/Drawer.css'
import { calculateBasket, setDrawer, removeFromBasket } from './redux/slices/basketSlice'
import { useEffect } from 'react'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  const handleDelete = (id) => {
    dispatch(removeFromBasket(id));
    dispatch(calculateBasket());
  }



  return (

    <div>
      <PageContainer>

        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
          <div>
            <h1 style={{ textAlign: 'center' }}>Basket</h1>
          </div>{
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-column' style={{ padding: '20px' }}>
                    <img className='drawer-img' src={product.image} />
                    <p className='drawer-title'>{product.title} [{product.count}]</p>
                    <p className='drawer-price'>{product.price}TL</p>
                    <button className='drawer-button' onClick={() => handleDelete(product.id)}>Delete</button>
                  </div>
                </div>
              )
            })
          }
          <div>
            <p style={{ textAlign: 'center' }}>Total Amount: {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>

  )
}

export default App
