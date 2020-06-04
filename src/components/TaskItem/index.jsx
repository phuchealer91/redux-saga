import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  withStyles,
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import styles from './styles';

function TaskItem({ task, classes }) {
  return (
    <Card key={task.id} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {task.id}
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="3-6-2020"
      />
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title={task.description}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h3">
          {task.title}
        </Typography>
        <Typography>{task.description}</Typography>
      </CardContent>
      <CardActions className={classes.controls}>
        <Fab
          color="primary"
          size="medium"
          aria-label="edit"
          className={classes.button}
        >
          <EditIcon />
        </Fab>
        <Fab
          color="secondary"
          size="medium"
          aria-label="edit"
          className={classes.button}
        >
          <DeleteIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(TaskItem);
