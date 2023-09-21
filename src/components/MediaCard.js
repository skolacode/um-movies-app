import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MediaCard({ title, overview, posterPath }) {
  return (
    <CardActionArea>
      <Card style={{ height: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography noWrap variant="body2" color="text.secondary" >
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
