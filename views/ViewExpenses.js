import React from 'react';
import { View, Text } from 'react-native';

const ViewExpensesScreen = () => {
    // Fetch expenses data here
    const expenses = [
        { id: 1, name: 'Groceries', amount: 50 },
        { id: 2, name: 'Utilities', amount: 100 },
        // Add more expenses as needed
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Expenses List</Text>
            {expenses.map(expense => (
                <Text key={expense.id}>{expense.name}: ${expense.amount}</Text>
            ))}
        </View>
    );
}

export default ViewExpensesScreen;