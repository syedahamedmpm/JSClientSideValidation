import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginating = (props) => {
    const{pageSize,NoOfValuesInArray,currentPage,onPageChange}=props;
    const pagesCount=NoOfValuesInArray/pageSize;

  return (
    <Pagination aria-label="Page navigation example">
      {
          [...Array(pagesCount)].map((page,index)=>(
            <PaginationItem key={index} className={index === currentPage ? 'page-item active':'page-item'}>
          <PaginationLink  href="#" onClick={()=>onPageChange(index)} >
          {index + 1}
        </PaginationLink>
        </PaginationItem>
        ))}
    </Pagination>
  );
}

export default Paginating;