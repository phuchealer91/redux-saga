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
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { useSelector } from 'react-redux';

function getCurrentDate() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${date} - ${month} - ${year}`;
}
function TaskItem({ task, classes }) {
  const open = useSelector((state) => state.modal.showModal);
  const [date, setDate] = useState('');
  useEffect(() => {
    const separator = new Date();
    setDate(getCurrentDate(separator));
  }, []);
  return (
    <Card key={task.id} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {task.id}
          </Avatar>
        }
        title={task.title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={task.imageURL}
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
          <EditIcon onClick={open} />
        </Fab>
        <Fab
          color="secondary"
          size="medium"
          aria-label="delete"
          className={classes.button}
        >
          <DeleteIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskItem);
