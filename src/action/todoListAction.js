import * as type from './type'

export const addTask = (todo) => dispatch => {
  dispatch({
    type: type.ADD_TASK,
    payload: todo
  })
}

export const deleteTask = (name) => dispatch => {
  dispatch({
    type: type.DELETE_TASK,
    payload: name
  })
}

export const completeTask = (name) => dispatch => {
  dispatch({
    type: type.COMPLETE_TASK,
    payload: name
  })
}

export const fetchTask = () => dispatch => {
  window.console.info('fetchTask')
  dispatch({
    type: type.FETCH_TASK
  })
}