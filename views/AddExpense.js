import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddExpenseScreen = ({ navigation }) => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExpense = () => {
        // Add expense logic here
        console.log('Expense added:', expenseName, amount);
        // Navigate back to home screen
        navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Add Expense</Text>
            <TextInput
                placeholder="Expense Name"
                value={expenseName}
                onChangeText={setExpenseName}
            />
            <TextInput
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />
            <Button title="Add" onPress={handleAddExpense} />
        </View>
    );
}

export default AddExpenseScreen;