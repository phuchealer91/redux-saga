import { Button, Container, Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../contants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListTask, filterTask } from '../../actions/task';
import {
  showModal,
  hideModal,
  changeModalTitle,
  changeModalContent,
} from '../../actions/modal';
import styles from './styles';
import SearchBox from '../../components/SearchBox';

function TaskBoard({ classes }) {
  const listTask = useSelector((state) => state.tasks.listTask);
  const title = useSelector((state) => state.modal.title);
  const dispatch = useDispatch();

  function onClose() {
    dispatch(hideModal());
  }
  function hanldeOpen() {
    dispatch(showModal());
    dispatch(changeModalTitle('Thêm công việc'));
    dispatch(changeModalContent(<TaskForm onClose={onClose} />));
  }

  useEffect(() => {
    dispatch(fetchListTask());
  }, []);
  // render Board
  function renderBoard() {
    let xhtml = null;
    xhtml = (
      <Container maxWidth="lg" className={classes.cardGrid}>
        <Grid container spacing={2}>
          {/* Kiểm tra điều kiện status trong arr */}
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
    xhtml = <TaskForm hanldeOpen={hanldeOpen} />;
    return xhtml;
  }
  // onchange filter
  function handleFilter(e) {
    const { value } = e.target;
    dispatch(filterTask(value));
  }
  // redner searchBox
  function renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
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
      {renderSearchBox()}
      {renderBoard()}
      {/* {renderDialog()} */}
    </Container>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
