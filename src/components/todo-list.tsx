import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TodoType} from '../App';
import TodoItem from './todo-item';

interface Props {
  todos: TodoType[];
  onRemove: (v: string) => void;
  onToggle: (v: string) => void;
}

const TodoList = ({todos, onRemove, onToggle}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(v => (
        <TodoItem key={v.id} item={v} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
