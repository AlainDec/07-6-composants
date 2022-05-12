import { StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';

const CustomBtn = (props) => {

    const {title, type} = props;
    
    let btnBackgroundColor;
    let btnTxtColor = 'white';
    switch (type) {
        case 'primary'   : btnBackgroundColor = '#007bff'; break;
        case 'secondary' : btnBackgroundColor = '#6c757d'; break;
        case 'success'   : btnBackgroundColor = '#28a745'; break;
        case 'danger'    : btnBackgroundColor = '#dc3545'; break;
        case 'warning'   : btnBackgroundColor = '#ffc107';
                           btnTxtColor = '#212529';
                           break;
        case 'info'      : btnBackgroundColor = '#17a2b8'; break;
        case 'light'     : btnBackgroundColor = '#f8f9fa';
                           btnTxtColor = '#212529';
                           break;
        case 'dark'      : btnBackgroundColor = '#343a40'; break;
        default          : btnBackgroundColor = '#007bff';
    }

        
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.touchable, {backgroundColor : btnBackgroundColor}]}>
            <Text style={[styles.text, {color : btnTxtColor}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  touchable: {
    width: '60%',
    justifyContent: 'center', 
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    elevation: 20,
  },
  text: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: 'white',
  },
});
