import { Home } from './screens/home/Home'
import { CompanyReports } from './screens/companyReports/CompanyReports'
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CompanyReports" component={CompanyReports} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}