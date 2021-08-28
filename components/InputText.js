import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const InputText = props => {

    const [enteredText, setEnteredText] = useState(''); {/* Old State */ }

    const inputHandler = (enteredText) => {
        setEnteredText(enteredText);
    }

    {/* Handle Adding to Array on App.js */ }
    const addHandler = () => {
        props.onAdd(enteredText);
        setEnteredText('');
    }

    {/* Handle Cancel Button */ }
    const cancelHandler = () => {
        props.onCancel();
        setEnteredText('');
    }

    return (
        <Modal
            animationType="slide"
            visible={props.visibility}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textview}
                    placeholder="Enter a string here"
                    onChangeText={inputHandler}
                    value={enteredText} />

                <View style={styles.buttonRow}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={cancelHandler} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Add"
                            onPress={addHandler} />
                    </View>
                </View>
                {/* To Do: One row for all buttons- 3:02:58 */}
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '40%'
    },
    buttonRow: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textview: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    }
});

export default InputText;