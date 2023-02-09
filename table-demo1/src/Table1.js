import React, { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

const Table1 = ()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
      <div>
        <DataTable value={products} paginator responsiveLayout="scroll"
        rows={10} rowsPerPageOptions={[10,20,50]} removableSort filterDisplay="row">
            <Column sortable filter filterPlaceholder='search by code    ' showFilterMenu={false} field="code" header="Code"></Column>
            <Column sortable filter showFilterMenu={false} field="name" header="Name"></Column>
            <Column sortable filter showFilterMenu={false} field="category" header="Category"></Column>
            <Column sortable filter showFilterMenu={false} field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    );
}

export default Table1;