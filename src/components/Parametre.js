<<<<<<< HEAD

=======
>>>>>>> imane
import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

<<<<<<< HEAD


=======
>>>>>>> imane
const list = [
{
  name: 'Map startup position',
  lists: <ModalDropdown options={['Default', 'Remember last', 'Fit objects']}/>
<<<<<<< HEAD

=======
>>>>>>> imane
},
{
  name: 'langue',
  lists : <ModalDropdown options={['English' , 'arabic', 'Frensh']}/>,
<<<<<<< HEAD


=======
>>>>>>> imane
},
{
    name: 'Unité de Distance',
    lists : <ModalDropdown options={['Kilomètre' , 'Mile', 'Nautical mile']}/>,
  
  
  },
  {
    name: 'Unité de Capacité',
    lists : <ModalDropdown options={['Litre' , 'Gallon']}/>,
  
  
  },
  {
    name: 'Unité de Température',
    lists : <ModalDropdown options={['Litre' , 'Gallon']}/>,
  
  
  },
  {
    name: 'Temps Zone',
    lists : <ModalDropdown options={['(UTC -14:00)' , '(UTC -13:00)', '(UTC -12:00)']}/>,
  
  
  },
]
<<<<<<< HEAD


class Parametre extends Component {


  render () {
    return (
      <View>
       <FlatList
         keyExtractor = {(item, index) => index.toString()}
         data={list}
         renderItem = {({ item }) => (
           <ListItem bottomDivider>

             <ListItem.Content>
               <ListItem.Title>{`${item.name}`}</ListItem.Title>


             </ListItem.Content>

           <ListItem.Title> {item.lists} </ListItem.Title>

           </ListItem>

         )}

       />



      </View>

);
}
}
export default Parametre;
=======
class Parametre extends Component {


    render () {
      return (
        <View>
         <FlatList
           keyExtractor = {(item, index) => index.toString()}
           data={list}
           renderItem = {({ item }) => (
             <ListItem bottomDivider>
  
               <ListItem.Content>
                 <ListItem.Title>{`${item.name}`}</ListItem.Title>
  
  
               </ListItem.Content>
  
             <ListItem.Title> {item.lists} </ListItem.Title>
  
             </ListItem>
  
           )}
  
         />
  
  
  
        </View>
  
  );
  }
  }
  
  export default Parametre;
  
>>>>>>> imane
