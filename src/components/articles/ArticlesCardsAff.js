import React from 'react'

import {Card ,
CardActions ,
CardContent ,
CardMedia ,
 Button,
 Typography }
from '@mui/material';
  

const ArticlesCardsAff = ({articles}) => {
  return (
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    {articles.map((article) => (
      <div >
      <Card sx={{ maxWidth: 340 }}>
        <CardMedia
          component="img"
          height="200"
          width="100"
          image={article.imageart}
          alt={article.designation}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {article.designation.substr(0,20)} ...
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div>{article.marque} </div>
          <div>{article.prix} TND </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    ))}
  </div>
      );
    }
    

export default ArticlesCardsAff
