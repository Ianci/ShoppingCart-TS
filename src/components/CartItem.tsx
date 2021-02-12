import { Button } from '@material-ui/core'
import { CartItemType } from '../App'
import { Wrapper } from '../styles/components/CartItem'

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = () => (
    <Wrapper>
        <h2>Xd</h2>
    </Wrapper>

)

export default CartItem