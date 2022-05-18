import { Image, View, Text, StyleSheet } from 'react-native';

const CustomData = ( props ) => {
    const { urlImg, title, desc } = props; // destructurer en prenant exactement les mêmes noms de l'appel
    return (
        <>
            <Image source={urlImg} style={styles.img} />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </>
    );
}

export default CustomData;

const styles = StyleSheet.create({
    img: {
      width: '40%',
      height: 'auto',
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