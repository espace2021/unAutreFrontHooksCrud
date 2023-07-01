import React, { useState } from 'react';
import {Box,Button,TextField , MenuItem ,FormControl} from '@mui/material';
import axios from "axios";

const CreateProduct = ({ addProduct, scategories }) => {

  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState("");
  const [marque, setMarque] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageart, setImageart] = useState("");
  const [scategorieID, setScategorieID] = useState("");

  const URL = "http://localhost:3001/api/"

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      reference,
      designation,
      prix, 
      marque,
      qtestock, 
      imageart,
      scategorieID
    };
  
//faire le add dans la BD
axios.post(URL+"articles",newProduct)  
.then(res => {  
const response = res.data;  
console.log(response)
   // faire le add dans le tableau affiché
    addProduct(newProduct);
    //vider le form
    setReference('');
    setDesignation('');
    setPrix('');
    setMarque('');
    setQtestock('');
    setImageart('');
    setScategorieID('');
  })    
  
}


  return (
    <div>
      <h2>Create Product</h2>
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
         <Button variant="contained" color="success" onClick={(event)=>handleSubmit(event)}>Ajout</Button>
          </div>
          </Box>
          </center>
    </div>
  );
};

export default CreateProduct;
