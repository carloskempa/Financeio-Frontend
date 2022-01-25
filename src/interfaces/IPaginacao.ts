export interface IPaginacao {
    pageCount: Number;
    totalItemCount: Number;
    pageNumber: Number;
    pageSize: Number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
    firstItemOnPage: Number;
    lastItemOnPage: Number;
}