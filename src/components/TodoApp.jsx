import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../slices/todoSlice'

const TodoApp = () => {

  const [taskText, setTaskText] = useState('')

  const todos = useSelector(state => state.todos.items)

  const dispatch = useDispatch()


  const handleAddTodo = () => {
    if (taskText.trim().length > 0) {
      dispatch(addTodo(taskText))
      setTaskText('')
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>
      <View style={styles.addContainer}>
        <TextInput
          style={styles.addInput}
          placeholder='enter a task'
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity>
          <Text style={styles.addButton}>➕</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoApp

const styles = StyleSheet.create({
  addInput: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    borderRadius: 16,
    width: '90%'
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  addButton:{
    fontSize: 20,
    color: 'white',
    backgroundColor:"yellow",
    padding:15,
    borderRadius: 20
  },
  title:{
    textAlign:"center",
    fontSize: 20,
    fontWeight: 'bold'
  }
})