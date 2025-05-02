import { useContext } from "react";
import FruitsContext from "./FruitsContext";
import UserContext from "./UserContext";

function Fruits() {
  const fruits = useContext(FruitsContext);
  const user = useContext(UserContext);
  return (
    <>{user.name} loves {fruits}</>
  )
}

export default Fruits;