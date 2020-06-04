import { Button, Container, Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../contants';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    image: 'https://loremflickr.com/320/240',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play food ball',
    image: 'https://loremflickr.com/320/240',
    description: 'with my friend',
    status: 1,
  },
  {
    id: 3,
    title: 'Go fishing',
    image: 'https://loremflickr.com/320/240',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: 2,
  },
  {
    id: 4,
    title: 'Stay at home',
    image: 'https://loremflickr.com/320/240',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    status: 3,
  },
];
function TaskBoard(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function hanldeOpen() {
    setOpen(true);
  }
  // render Board
  function renderBoard() {
    let xhtml = null;
    xhtml = (
      <Container maxWidth="lg" className={classes.cardGrid}>
        <Grid container spacing={2}>
          {STATUSES.map((status) => {
            const newList = [...listTask];
            const newListTask = newList.filter(
              (task) => task.status === status.value,
            );
            return (
              <TaskList
                tasks={newListTask}
                status={status}
                key={status.value}
              />
            );
          })}
        </Grid>
      </Container>
    );
    return xhtml;
  }
  // render Dialog
  function renderDialog() {
    let xhtml = null;
    xhtml = (
      <TaskForm open={open} handleClose={handleClose} hanldeOpen={hanldeOpen} />
    );
    return xhtml;
  }
  return (
    <Container className={classes.taskboard}>
      <Button
        variant="contained"
        color="primary"
        onClick={hanldeOpen}
        className={classes.button}
      >
        <AddIcon />
        New Task
      </Button>
      {renderBoard()}
      {renderDialog()}
    </Container>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
