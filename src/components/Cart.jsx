import { GrCart, GrFormAdd, GrFormSubtract } from "react-icons/gr";

const Cart = ({cartValue}) => {
    return (
        <>
         <GrCart  className="mt-1"/> {cartValue }
        </>
    )
}

export default Cart;