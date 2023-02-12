import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Picker from '@react-native-picker/picker';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
const AddProducts = () => {
  const [selected, setSelected] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelected(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from single picker');
      } else {
        throw err;
      }
    }
  };
  return (
    <ScrollView
      style={{flex: 10, height: '100%'}}>
      <View
        style={{
          flex: 1.5,
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          alignItems: 'center',
          height: 100,
        }}>
        <View
          style={{
            width: '90%',
            height: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '30%',
                height: '45%',
                marginRight: 5,
              }}>
              <Image source={require('../../Images/Ellipse.png')} />
            </View>
            <View>
              <Text style={styles.adminName}>Mr.Ahmed</Text>
              <Text style={styles.adminSpecialName}>Admin</Text>
            </View>
          </View>
          <Image source={require('../../Images/pool.png')} />
        </View>
      </View>
      <View style={{flex: 8.5, alignItems: 'center'}}>
        <View style={{width: '90%'}}>
          <Text style={styles.newtilte}>Add New Item</Text>
          <View style={styles.imginp}>
            <TouchableHighlight onPress={pickDocument}>
              <Image source={require('../../Images/image32.png')} />
            </TouchableHighlight>
          </View>
          <TextInput
            style={styles.input1}
            //onChangeText={t=>{}}
            placeholder="Item Name"
            placeholderTextColor={'gray'}
            color="black"
            fontSize={20}
            padding={10}
          />
          <View style={styles.picker}>
            {/* <Picker
                selectedValue={selectedValue}
                style={{height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                    {/* //Category map     */}
            {/* <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Python" value="python" />
                <Picker.Item label="C++" value="cpp" />
              </Picker> */}
          </View>
          <TextInput
            style={styles.input2}
            //onChangeText={t=>{}}
            placeholder="Describe this item"
            placeholderTextColor={'gray'}
            color="black"
            fontSize={20}
            padding={10}
          />
          <View style={{height: 250}}>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={{color: '#024f9d', fontSize: 20}}>Unit Name : </Text>
              <TextInput
                style={styles.input3}
                //onChangeText={t=>{}}
                placeholder="Pcs / Kg / dozn"
                color="black"
                placeholderTextColor={'gray'}
                fontSize={18}
                padding={10}
              />
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={{color: '#024f9d', fontSize: 20}}>
                Unit Price :{' '}
              </Text>
              <TextInput
                style={styles.input3}
                //onChangeText={t=>{}}
                placeholder="$3600"
                color="black"
                placeholderTextColor={'gray'}
                fontSize={18}
                padding={10}
              />
            </View>
            <View style={{width: '100%', justifyContent : 'center' , alignItems : 'center',height:100}}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('AccountsPage')}>
             <Text style={styles.btntxt}>Get Started</Text>
           </TouchableOpacity>
           </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input3: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '50%',
    fontSize: 10,
    borderRadius: 20,
  },
  input2: {
    backgroundColor: 'lightgray',
    height: 120,
    width: '100%',
    marginTop: 5,
    borderRadius: 20,
  },
  btn:{
        backgroundColor : '#61B846',
        width : 226,
        height :69,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        marginTop : 70
      },
      btntxt:{
        color : 'white',
        fontSize : 33,
        fontWeight : 'bold'
      },
  picker: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginTop: 5,
  },
  input1: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '100%',
    marginTop: 5,
    borderRadius: 20,
  },
  imginp: {
    backgroundColor: 'lightgray',
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  desc: {
    backgroundColor: 'lightgray',
    height: '50%',
    width: '100%',
    borderRadius: 20,
  },
  logo: {
    width: 336,
    height: 263,
    marginTop: 100,
  },
  adminName: {
    color: '#024f9d',
    fontSize: 30,
    fontWeight: 'bold',
  },
  adminSpecialName: {
    color: '#61b846',
    fontSize: 30,
    fontWeight: 'bold',
  },
  prof: {
    borderColor: '#61b846',
    borderRadius: '50%',
    borderWidth: '1px',
  },
  newtilte: {
    color: '#024f9d',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
export default AddProducts;

