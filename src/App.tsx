import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from './components/todo-insert';
import TodoList from './components/todo-list';

export type TodoType = {
  id: string;
  textValue: string;
  checked: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;
