import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ListItem from './components/ListItem';
import InputText from './components/InputText';

export default function App() {

  const [textItem, setTextItem] = useState([]); {/* New Array State */ }
  const [isAddMode, setAddMode] = useState(false); {/* Modal State */ }

  {/* Add input items into an array */ }
  const addHandler = textTitle => {
    setTextItem(currentItem => [
      ...textItem, {
        id: Math.random().toString(),
        inputText: textTitle
      }]);
    setAddMode(false);
  }

  const cancelHandler = () => {
    setAddMode(false);
  }

  {/* Remove one input items from array */ }
  const removeHandler = textId => {
    setTextItem(currentItem => {
      return currentItem.filter((current) => current.id !== textId);
    });
  }

  return (
    <View style={styles.main}>

      <Button
        title='Add to List'
        onPress={() => setAddMode(true)}
      />

      <InputText
        visibility={isAddMode}
        onAdd={addHandler}
        onCancel={cancelHandler} />

      <FlatList
        data={textItem}
        renderItem={itemData => (
          <ListItem
            id={itemData.item.id}
            onDelete={removeHandler}
            title={itemData.item.inputText} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    paddingLeft: '5%',
    paddingRight: '5%'
  }
});
