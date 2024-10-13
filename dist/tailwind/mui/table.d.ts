import React from 'react';
declare const TableContainer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>>;
declare const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>>;
declare const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>>;
declare const TableHeaderCell: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>>;
declare const TableFooter: React.FC<React.HTMLAttributes<HTMLTableSectionElement>>;
interface TablePaginationProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    rowsPerPageOptions?: number[];
}
declare const TablePagination: React.FC<TablePaginationProps>;
export { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell, TableFooter, TablePagination, };
