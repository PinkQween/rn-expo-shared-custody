import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Add Expense"
                onPress={() => navigation.navigate('AddExpense')}
            />
            <Button
                title="View Expenses"
                onPress={() => navigation.navigate('ViewExpenses')}
            />
        </View>
    );
}

export default HomeScreen;