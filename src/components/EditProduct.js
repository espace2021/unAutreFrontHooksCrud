import React, { useState, useEffect,useCallback } from 'react';
import {Box,Button , TextField , MenuItem ,FormControl} from '@mui/material';
import axios from "axios";

const EditProduct = ({ product, updateProduct ,scategories}) => {

  const [_id,setId] = useState();
  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState("");
  const [marque, setMarque] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageart, setImageart] = useState("");
  const [scategorieID, setScategorieID] = useState("");

  const fetchEditArticle = useCallback(async () => {
    setId(product._id)
    setReference(product.reference);
    setDesignation(product.designation);
    setPrix(product.prix);
    setMarque(product.marque);
    setQtestock(product.qtestock);
    setImageart(product.imageart);
    setScategorieID(product.scategorieID._id);
  }, [product]);

  useEffect(() => {
    fetchEditArticle();
  }, [fetchEditArticle]);

  const URL = "http://localhost:3001/api/"

   const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      _id,
      reference,
      designation,
      prix, 
      marque,
      qtestock, 
      imageart,
      scategorieID
    };
   
     //update dans la BD
     axios.put(URL + 'articles/' + product._id, updatedProduct)
     .then(res => {  
       console.log(res.data); 
       //update dans le tableau affiché
       updateProduct(updatedProduct); 
        //vider le form
      //  setId('')
    setReference('');
    setDesignation('');
    setPrix('');
    setMarque('');
    setQtestock('');
    setImageart('');
    setScategorieID('');
     }) .catch((err) => {alert(err)})
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <center>
      <Box style={{width:"50%"}}>
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
          
          </Box>
          </center>
    </div>
  );
};

export default EditProduct;
