import * as type from '../action/type'
const initialState = {
  list: [{
      name: 'learn english', status: false
    },{
      name: 'Learn guitar', status: false
    }, {
      name: 'weight less than 100', status: false
    }, {
      name: 'have 100,000 deposit', status: false
    }],
  inputVal: ''
}
export default (state = initialState, action) => {
  switch(action.type) {
    case type.ADD_TASK:
      return [
        ...state,
        action.payload
      ]
    case type.COMPLETE_TASK:
      const list = state.list.map((todo) => {
        if(todo.name === action.payload) {
          return Object.assign({}, todo, {status: !todo.status})
        }
        return todo
      })
      window.console.info(list)
      return state
    case type.DELETE_TASK:
      return state.list.filter((todo) => {
        return todo.name !== action.payload
      })
    case type.FETCH_TASK:
      return state
    default:
      return state
  }
}