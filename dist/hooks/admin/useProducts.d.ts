import React from 'react';
declare const useProducts: () => {
    paginate: (page: number) => Promise<any>;
    loading: boolean;
    loaded: any;
    delayedLoading: any;
    errors: Record<string, any>;
    empty: any;
    editing: any;
    isValid: any;
    product: any;
    products: any[];
    findProduct: (id: import("frontend-js").ID) => any;
    findProducts: (queryParams?: import("frontend-js").QueryParamsType) => void;
    saveProduct: (resource: any) => any;
    updateProduct: (resource: any) => any;
    updateProducts: (ids: import("frontend-js").ID[], data: any) => Promise<any>;
    createProduct: (resource: any) => any;
    deleteProduct: (id: import("frontend-js").ID) => Promise<any>;
    deleteProducts: (ids: import("frontend-js").ID[]) => void;
    generateAiProducts: () => Promise<void>;
    loadMore: () => void;
    publish: (ids: import("frontend-js").ID[]) => Promise<any>;
    unpublish: (id: import("frontend-js").ID[]) => Promise<any>;
    addAttachment: (id: import("frontend-js").ID, fieldName: string, attachmentId: import("frontend-js").ID) => any;
    removeAttachment: (id: import("frontend-js").ID, fieldName: string) => any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    reloadProduct: any;
    reloadProducts: () => Promise<any>;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    updatePositions: (sorted: any[]) => Promise<any>;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    setProduct: (value: any) => void;
    setProducts: (value: any[]) => void;
    startIndex: any;
    endIndex: any;
};
export default useProducts;
