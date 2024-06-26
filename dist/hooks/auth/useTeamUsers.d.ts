import React from 'react';
declare const useTeamUsers: () => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    teamUser: import("frontend-js").ResourceType;
    teamUsers: import("frontend-js").ResourceType[];
    findTeamUser: (id: import("frontend-js").ID) => import("frontend-js").ResourceType;
    findTeamUsers: (queryParams?: import("frontend-js").QueryParamsType, loadMore?: boolean) => Promise<any>;
    updateTeamUser: (resource: import("frontend-js").ResourceType) => import("frontend-js").ResourceType;
    createTeamUser: (resource: import("frontend-js").ResourceType) => import("frontend-js").ResourceType;
    deleteTeamUser: (id: import("frontend-js").ID) => Promise<any>;
    setTeamUser: (value: import("frontend-js").ResourceType) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadTeamUsers: () => Promise<any>;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    loadMore: () => void;
    loadingWrapper: (fn: () => void) => void;
    paginate: (page: number) => Promise<any>;
};
export default useTeamUsers;
