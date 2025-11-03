import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../slices/todoSlice'

const TodoApp = () => {

  const [taskText, setTaskText] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const todos = useSelector(state => state.todos.items)

  const dispatch = useDispatch()

  // console.log(dispatch(addTodo));


  const handleAddTodo = () => {
    if (taskText.trim().length > 0) {
      dispatch(addTodo(taskText))
      setTaskText('')
    }
  }

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo App</Text>


      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.inputSearch}
          placeholder='search your task'
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={searchQuery ? filteredTodos : todos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Text style={styles.listText}>{item.text}</Text>
          </View>
 )}
      />




      <View style={styles.addContainer}>
        <TextInput
          style={styles.addInput}
          placeholder='enter a task'
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity onPress={handleAddTodo}>
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
  addButton: {
    fontSize: 20,
    color: 'white',
    backgroundColor: "yellow",
    padding: 15,
    borderRadius: 20
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
  },
  searchIcon: {
    fontSize: 24,
    color: "black",
    padding: 10
  },
  inputSearch: {
    fontSize: 18
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    // padding:5,
    borderRadius: 20,
    marginVertical: 10
  }
})