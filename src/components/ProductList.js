import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import Button from 'react-bootstrap/Button';

const ProductList = ({ products ,deleteProduct, setEditingProduct }) => {

  const handleEditClick = (product) => {
    setEditingProduct(product);
    
  };

  const columns = [
    {
      field: 'imageart',
      headerName: 'Image',
      width: 150,
      editable: true,
      renderCell: (params) => <img src={params.value} alt="" width="80" height="50" />,
      valueGetter: (params) => params.row.imageart
    },
    {
      field: 'reference',
      headerName: 'Référence',
      width: 150,
      editable: true,
      valueGetter: (params) => params.row.reference
    },
    {
      field: 'designation',
      headerName: 'Désignation',
      width: 250,
      editable: true,
      valueGetter: (params) => params.row.designation
    },
    {
      field: 'marque',
      headerName: 'Marque',
      width: 110,
      editable: true,
      valueGetter: (params) => params.row.marque
    },
    {
      field: 'prix',
      headerName: 'Prix',
      type: 'number',
      width: 110,
      editable: true,
      valueGetter: (params) => params.row.prix
    },
    {
      field: 'qtestock',
      headerName: 'Quantité',
      type: 'number',
      width: 110,
      editable: true,
      valueGetter: (params) => params.row.qtestock
    },
    {
      field: 'scategorieID',
      headerName: 'S/catégorie',
      width: 200,
      editable: true,
      valueGetter: (params) =>
      `${params.row.scategorieID.nomscategorie}`,
      },
    {
      field: "Edit",
      headerName: "Edit",
      sortable: false,
      renderCell: (params) => {
        const onClick = () => { 
          handleEditClick(params.row)
        };
  
        return <Button onClick={onClick} className="btn btn-success">Edit</Button>;
      },
      valueGetter: (params) => params.row._id
    },
    {
      field: "Delete",
      headerName: "Delete",
      sortable: false,
      renderCell: (params) => {
        const onClick = () => { 
          deleteProduct(params.row._id)
        };
  
        return <Button onClick={onClick} className="btn btn-danger">Delete</Button>;
      },
      valueGetter: (params) => params.row._id
    },
    ];
  
     
  return (
    <div>
      <h2>Product List</h2>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        slots={{ toolbar: GridToolbar }}
        getRowId={(row) => row._id}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
};

export default ProductList;