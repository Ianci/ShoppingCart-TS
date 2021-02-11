import { useState } from "react";
import { useQuery } from "react-query";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/theme'
//Material Components
import { Drawer, LinearProgress, Grid, Badge, CssBaseline } from '@material-ui/core'
import AddShopingCartIcon from '@material-ui/icons/AddShoppingCart'

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

  const { data, isLoading, error} = useQuery <CartItemType[]>('products', getProducts)
  console.log(data)

  const getTotalItems = () => null

  const handleAddToCart = () => null

  const handleRemoveFromCart = () => null

if(isLoading) return <LinearProgress />
if(error) return <div>Something went wrong...</div>;

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        Start
      </div>
    </MuiThemeProvider>
  );
}

export default App;
