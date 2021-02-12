import { useState } from "react";
import { useQuery } from "react-query";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme'
import { Button } from '@material-ui/core'

//Components
import Item from "./components/Item";
import Cart from "./components/Cart";

//Material Components
import { Drawer, LinearProgress, Grid, Badge, CssBaseline } from '@material-ui/core'
import AddShopingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Wrapper } from "./styles/components/Wrapper";


//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;

}



const getProducts = async (): Promise<CartItemType[]> => {
  return await( await fetch('https://fakestoreapi.com/products')).json()
}



const App = () => {
  const [ cartOpen, setCartOpen ] = useState(false)
  const [ cartItems, setCartItems ]  = useState([] as CartItemType[])


  //Api call
  const { data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)


  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((acc: number, item) => acc + item.amount, 0)
  }

  const handleAddToCart = (clickedItem: CartItemType) => null

  
  const handleRemoveFromCart = () => null

  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong...</div>;

  return (
    <MuiThemeProvider theme={theme}>
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
        </Drawer>
        <Button onClick={() => setCartOpen(true)}>
          <Badge badgeContent={4} color='error'>
            <AddShopingCartIcon />
          </Badge>
        </Button>
        <CssBaseline />
        <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </MuiThemeProvider>
  );
}

export default App;
