import React from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { differenceInDays } from 'date-fns'

 ShowCurrentDate=()=>{
 
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return year + ',' + month + ',' + date;
 }

const startDate = new Date(2020, 6, 7)
const todaysDate = new Date(2020, 7, 29)
var resultDays = differenceInDays(todaysDate, startDate)
var resultDaysToWeeks = (resultDays/7)
var resultWeeks = Math.trunc(resultDaysToWeeks);
var resultDaysLeft = (resultDays-(resultWeeks*7))
class App extends React.Component {
    render() {
      return (
        <LinearGradient
          colors={['#FF00FF', '#00FFFF']}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.whiteText}>Pregnant</Text>
          <Text style={styles.number}>{resultWeeks}</Text>
          <Text style={styles.baseText}>weeks</Text>
          <Text style={styles.number}>{resultDaysLeft}</Text>
          <Text style={styles.baseText}>days</Text>
        </LinearGradient>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    number: {
      fontWeight: 'bold',
      fontSize: 180,
      },
    baseText: {
      fontWeight: 'bold',
      fontSize: 40,
        },
    whiteText: {
      fontWeight: 'bold',
      fontSize: 60,
      color: '#FFFFFF',
        },
  })
  export default App;