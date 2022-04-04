import React from "react";

const BlogList = (props) => {
    return (
        <section className="p-4 lg:p-8 bg-coolGray-800 text-coolGray-100">
            <div className="container mx-auto space-y-12">
                {props.children}
            </div>
        </section>
    );
};

export default BlogList;