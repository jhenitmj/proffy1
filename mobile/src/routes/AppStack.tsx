import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Open from '../pages/Open';
import GiveClasses from '../pages/GiveClasses';
import TeacherList from '../pages/TeacherList';

const Stack = createNativeStackNavigator();


function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Open" component={Open} />
        <Stack.Screen name="GiveClasses" component={GiveClasses} />
        <Stack.Screen name="Study" component={TeacherList} />
        
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppStack;