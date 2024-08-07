import React from 'react';
type UseReviewsProps = {
    url: string;
    handle: string;
};
declare const useReviews: (props: UseReviewsProps) => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    loaded: any;
    empty: any;
    meta: Record<string, any>;
    review: any;
    reviews: any[];
    findReview: (id: import("frontend-js").ID) => any;
    findReviews: (queryParams?: import("frontend-js").QueryParamsType) => void;
    createReview: (resource: any) => any;
    updateReview: (resource: any) => any;
    deleteReview: (id: import("frontend-js").ID) => Promise<any>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadReviews: () => Promise<any>;
    setReview: (value: any) => void;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    paginate: (page: number) => Promise<any>;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    loadMore: () => void;
    loadingWrapper: (fn: () => void) => void;
};
export default useReviews;
