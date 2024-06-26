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
    review: import("frontend-js").ResourceType;
    reviews: import("frontend-js").ResourceType[];
    findReview: (id: import("frontend-js").ID) => import("frontend-js").ResourceType;
    findReviews: (queryParams?: import("frontend-js").QueryParamsType, loadMore?: boolean) => Promise<any>;
    createReview: (resource: import("frontend-js").ResourceType) => import("frontend-js").ResourceType;
    updateReview: (resource: import("frontend-js").ResourceType) => import("frontend-js").ResourceType;
    deleteReview: (id: import("frontend-js").ID) => Promise<any>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadReviews: () => Promise<any>;
    setReview: (value: import("frontend-js").ResourceType) => void;
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