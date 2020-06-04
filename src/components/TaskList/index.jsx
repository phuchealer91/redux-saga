import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import TaskItem from '../TaskItem/index.jsx';
import styles from './styles.js';

function TaskList({ tasks, status, classes }) {
  return (
    <Grid item xs={12} sm={6} md={3} key={status.value}>
      <div className={classes.status}>{status.label}</div>
      {tasks.map((task) => {
        return <TaskItem task={task} key={task.id} />;
      })}
    </Grid>
  );
}

export default withStyles(styles)(TaskList);
