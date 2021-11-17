import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = () => {
    const { people } = useContext(Context)

    const pageCount = Math.ceil(people.totalCount / people.limit)
    return (
        <Pagination className="mt-3">
            {Array(pageCount).fill(1).map((page, index) => page + index).map(page =>
                <Pagination.Item
                    key={page}
                    active={people.page === page}
                    onClick={() => people.setPage(page)}
                    activeLabel=""
                >
                    {page}
                </Pagination.Item>
                )}
        </Pagination>
    );
};

export default Pages;