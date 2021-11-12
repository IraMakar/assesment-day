import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = () => {
    const {people} = useContext(Context)
    const pageCount = Math.ceil(people.totalCount / people.limit)
    const pages = []
    console.log(pageCount)

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={people.page === page}
                    onClick={() => people.setPage(page)}
                >
                    {page}
                </Pagination.Item>
                )}
        </Pagination>
    );
};

export default Pages;