import React from "react";

const IconsDisplay = (props) => {
    return (
        <div className="container flex flex-wrap justify-center mx-auto">
            {React.Children.toArray(props.children).map((child) => ((
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/6 hover:scale-125 duration-200">
                    {child}
                </div>
            )))}
        </div>
    );
}

export default IconsDisplay;