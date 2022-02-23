import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/homeScreen';

class App extends Component{
  render(){
    return (
    <>
    <StatusBar barStyle="dark-content" />
    <HomeScreen/>
    </>
    );
  }
}
export default App;
