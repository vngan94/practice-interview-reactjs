import React from "react";

type Props = {
    cars: string[],  // bat buoc cha phai pass prop, nhan hay k thi optional
    children?: React.ReactNode, // optional all
};

const Cars: React.FC<Props> = ({children }) => {
    return (
        <ul>
            {/* {cars.map((car, index) => (
                <li key={index}>{car}</li>
            ))} */}
            {children} {/* `children` is inferred automatically */}
        </ul>
    );
};

export default Cars;
