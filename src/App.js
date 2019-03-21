import React, { Component } from 'react'
import './App.css'
import { fetchTask, completeTask } from './action/todoListAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class ListItem extends Component {

  componentDidMount() {
    window.console.info('did')
    this.props.fetchTask()
  }
  completeTask(name) {
    this.props.completeTask(name)
  }
  render() {
    return (
      <ul>
        {
          this.props.list.map(element => {
            return (
              <li className="listItem" key={element.name}>
                <input type="checkbox"
                  checked={element.status}
                  onChange={this.completeTask.bind(this, element.name)}/>
                <span style={{textDecorationLine: !element.status ? 'none' : 'line-through'}}>{element.name}</span>
                <button className="delete">删除</button>
              </li>)
        })
      }
      </ul>
    )
  }
}
ListItem.propTypes = {
  list: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  list: state.todoListReducer.list
})

export default connect(mapStateToProps, {fetchTask, completeTask})(ListItem)