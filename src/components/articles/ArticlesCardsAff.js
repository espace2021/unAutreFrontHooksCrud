import React from 'react'

import {Card ,
CardActions ,
CardContent ,
CardMedia ,
 Button,
 Typography }
from '@mui/material';
  
import ArticlesCardsAffLazyImage from './ArticlesCardsAffLazyImage';

const ArticlesCardsAff = ({article}) => {

   return (
   
       <Card sx={{ maxWidth: 340 }} >
        <ArticlesCardsAffLazyImage image={article.imageart} />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {article.designation.substr(0,20)} ...
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {article.marque} <br />
          {article.prix} TND 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
   
      );
    }
    

export default ArticlesCardsAff
