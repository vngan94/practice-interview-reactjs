import FruitsContext from "./FruitsContext";
import UserContext from "./UserContext";

export default function AppProvider ({children}) {
    const user = { name: "Alice", role: "Admin" };
    const fruits = ["Apple", "Orange"];
    return (
        <FruitsContext.Provider value={fruits}>
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        </FruitsContext.Provider>
    )
};