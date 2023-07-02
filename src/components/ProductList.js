import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';


import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

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
    
    },
    {
      field: 'reference',
      headerName: 'Référence',
      width: 150,
      editable: true,
     
    },
    {
      field: 'designation',
      headerName: 'Désignation',
      width: 250,
      editable: true,
    
    },
    {
      field: 'marque',
      headerName: 'Marque',
      width: 110,
      editable: true,
      
    },
    {
      field: 'prix',
      headerName: 'Prix',
      type: 'number',
      width: 110,
      editable: true,
   
    },
    {
      field: 'qtestock',
      headerName: 'Quantité',
      type: 'number',
      width: 110,
      editable: true,
    
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
  
        return <span
        onClick={onClick}
            style={{ cursor: 'pointer'}}
          >
           <NoteAltOutlinedIcon color='success' />
      </span>
      },
     
    },
    {
      field: "Delete",
      headerName: "Delete",
      sortable: false,
      renderCell: (params) => {
        const onClick = () => { 
          deleteProduct(params.row._id)
        };
  
        return <span
        onClick={onClick}
           style={{ cursor: 'pointer'}}
         >
          <DeleteForeverRoundedIcon color='error' />
         </span>
      },
   
    },
    ];
  
    // une méthode qui ajoute un champ id numérique utile pour le filtre
    // appelée dans getRowId
    const handleGetRowId = () => {
      products.map((row, index) => row["id"] = index);
      return products.id;
  }

  return (
    <div>
      <h2>Product List</h2>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        slots={{ toolbar: GridToolbar }}
        getRowId={handleGetRowId()}
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
