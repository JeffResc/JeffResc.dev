import React from "react";
import { Link } from "gatsby";

const Pager = ({ pageContext }) => {
    const { previousPagePath, nextPagePath } = pageContext;
    const pageNumberButtons = [];
    for(let i = 1; i <= pageContext.numberOfPages; i++) {
        pageNumberButtons.push(
            <Link to={(i === 1) ? (
                `/blog/`
              ) : (
                `/blog/${i}`
              )} key={i}>
                {(i === pageContext.humanPageNumber) ? (
                    <button type="button" className="inline-flex text-white items-center px-4 py-2 text-sm font-semibold border bg-sky-600">{i}</button>
                ) : (
                    <button type="button" className="inline-flex text-white items-center px-4 py-2 text-sm font-semibold border">{i}</button>
                )}
                
            </Link>
        );
    }
    return (
        <div className="text-center content-center">
            <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm bg-coolGray-800 text-coolGray-100">
                {previousPagePath && (
                    <Link to={previousPagePath}>
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md border-coolGray-700">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </Link>
                )}
                {pageNumberButtons}
                {nextPagePath && (
                    <Link to={nextPagePath}>
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-coolGray-700">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Pager;
