import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import CustomBtn from './components/CustomBtn';
import CustomData from './components/CustomData';

export default function App() {

  const data = require('./data/tp.json');

  /*
  // Version avec boucle FOR simple
  let readData = [];
  for (let index = 0; index < data.length; index++) {
    readData.push (<View style={styles.block} key={index}>
      <Image source={{uri: data[index].img}} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.title}>{data[index].title}</Text>
        <Text style={styles.desc}>{data[index].desc}</Text>
      </View>
    </View>);
  }
  return readData;
  */

  /*
  // Version avec boucle FOR OF et entries
  let readData = [];
  for (const [index, value] of data.entries()) {
    readData.push (<View style={styles.block} key={index}>
        <Image source={{uri: value.img}} style={styles.img} />
        <View style={styles.text}>
          <Text style={styles.title}>{value.title}</Text>
          <Text style={styles.desc}>{value.desc}</Text>
        </View>
      </View>);
  }
  return readData;
  */

  /*
  // version avec FOREACH
  let readData = [];
  data.forEach( (value, index) => { 
    readData.push (
      <View style={styles.block} key={index}>
        <Image source={{uri: value.img}} style={styles.img} />
        <View style={styles.text}>
          <Text style={styles.title}>{value.title}</Text>
          <Text style={styles.desc}>{value.desc}</Text>
        </View>
      </View>
    )
  });
  return readData;
  */

  /*
  // version avec MAP qui crée un nouveau tableau
  const readData = data.map( (value, index) => { 
    return (
      <View style={styles.block} key={index}>
        <Image source={{uri: value.img}} style={styles.img} />
        <View style={styles.text}>
          <Text style={styles.title}>{value.title}</Text>
          <Text style={styles.desc}>{value.desc}</Text>
        </View>
      </View>
    )
  });
  */

  // version avec MAP mais appelant un module externe
  const readData = data.map( (value, index) => { 
    return (
      <View style={styles.block} key={index}>
        <CustomData 
          urlImg={{uri: value.img}}
          title={value.title}
          desc={value.desc}
        />
      </View>
    )
  });
 


  return (
    <ScrollView>
      <CustomBtn title='Mes félicitations !' type='warning' />
      {readData}
    </ScrollView>
  );
}

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    width: '40%',
    height: 'auto',
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
