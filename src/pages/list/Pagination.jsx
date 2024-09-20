import React from 'react';


import { Pagination } from 'antd';

const PaginationComp = ({ currentPage, itemsPerPage, paginate }) =>
    <div className=' my-10 flex justify-center'>
        <Pagination defaultCurrent={6}
            current={currentPage}
            pageSize={itemsPerPage}
            total={200}
            onChange={paginate}

        />
        
        
    </div>

    
export default PaginationComp;