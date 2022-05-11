import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {

  const data = require('./data/tp.json');

  const readData = data.map( (value, index) => { 
    return (
      <View style={styles.block}>
        <Image source={{uri: value.img}} style={styles.img} />
        <View style={styles.text}>
          <Text key={index} style={styles.title}>{value.title}</Text>
          <Text style={styles.desc}>{value.desc}</Text>
        </View>
      </View>
    )
  });

  return (
    <View style={styles.container}>
      <ScrollView>{readData}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: '40%',
    height: 150
  },
  block: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    paddingTop: 10,
    fontSize: 11,
  },
});
