import React, { useState } from 'react';
import {Button , TextField , MenuItem ,FormControl} from '@mui/material';


const EditProduct = ({ product, updateProduct ,scategories}) => {

  const [reference, setReference] = useState(product.reference);
  const [designation, setDesignation] = useState(product.designation);
  const [prix, setPrix] = useState(product.prix);
  const [marque, setMarque] = useState(product.marque);
  const [qtestock, setQtestock] = useState(product.qtestock);
  const [imageart, setImageart] = useState(product.imageart);
  const [scategorieID, setScategorieID] = useState(product.scategorieID);

   const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      reference,
      designation,
      prix, 
      marque,
      qtestock, 
      imageart,
      scategorieID
    };
    updateProduct(updatedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <FormControl  > 
            <TextField
                          variant="outlined"
                          label="Désignation"
                          value={designation}
                          onChange={e => setDesignation(e.target.value)}
                          required />
             </FormControl>
                
             <FormControl  > 
             <TextField
                        variant="outlined"
                        label="Référence"
                        value={reference}
                        onChange={e => setReference(e.target.value)}
                        required />
             </FormControl> 
                        
             <FormControl  >  
             <TextField
                        variant="outlined"
                        label="Prix"
                        type="number"
                        value={prix}
                        onChange={e => setPrix(e.target.value)}
                  /> 
             </FormControl> 
   
              <FormControl  >  
             <TextField
                        variant="outlined"
                          label="Image"
                          type="text"
                          value={imageart}
                          onChange={e => setImageart(e.target.value)}
                  /> 
             </FormControl>   
           
           <FormControl  >          
           <TextField
                      variant="outlined"
                          label="Quantité Stock"
                          type="number"
                          value={qtestock}
                          onChange={e => setQtestock(e.target.value)}
                  /> 
           </FormControl>  
           
           <FormControl  >      
           <TextField
                    fullWidth
                      style={{ marginLeft: 8}}
                      variant="outlined"
                      label="Marque"
                      value={marque}
                      onChange={e => setMarque(e.target.value)}
            /> 
         </FormControl>  
                   
          <FormControl style={{width:350}}>
                   <TextField
                   select
                   label="S/Catégorie"
                   style={{ marginLeft: 8}}
                   value={scategorieID}
                   variant="outlined"
                   helperText="Sélectionner une s/catégorie"
                 onChange={e => setScategorieID(e.target.value)}
                    >
               {
               scategories ?    
               scategories.map((scat)=>
                    <MenuItem  key={scat._id} value={scat._id}>{scat.nomscategorie}</MenuItem>
               )
               :null
               }
             </TextField>
          </FormControl>
          <div>
         <Button variant="contained" color="success" onClick={(event)=>handleSubmit(event)}>Modifier</Button>
          </div>
    </div>
  );
};

export default EditProduct;
