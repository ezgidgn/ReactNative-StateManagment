import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {Provider,useSelector,useDispatch } from 'react-redux';
import { createStore } from 'redux';


const initialState={
counter:0,
};

function reducers(state, action){
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return{...state, counter: state.counter+1};
  
    default:
      return state;
  }
}

export default function App() {

  const store =createStore(reducers, initialState)
  return (
    <Provider store={store}>
    <View style={styles.container}>
   <First/>
   <Second/>
    </View>
    </Provider>
  );
};
const First=()=>{


  const counter= useSelector(selector=> selector.counter);  //initalState in içine erişiyoruz.
  const dispatch=useDispatch(); //reducer'lara erişmek için kullandım.

  const handleUpdate =()=>{
    dispatch({type: 'UPDATE_COUNTER' });

  }

  return(
    <View style={styles.container}>
      <Text style={{fontSize:40}}>First: {counter}</Text>  
      <Button title='Update' onPress={handleUpdate}/>
    </View>
  )
};

const Second=()=>{

  const counter= useSelector(selector=> selector.counter);

  return(
    <View style={{flex:1,backgroundColor:'#eceff1'}}>
      <Text style={{fontSize:40}}>Second: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:10,
    

  },
});
