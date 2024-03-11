import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreateItemQuantity, increateItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        onClick={() => dispatch(decreateItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increateItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}
