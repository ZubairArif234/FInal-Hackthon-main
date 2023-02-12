
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


const AdminProfile = ({navigation}) => {
  function gotoThick() {
    navigation.navigate('Thick');
  }
  function gotosmall() {
    navigation.navigate('Example');
  }
  function gotodrawer() {
    navigation.navigate('drawer');
  }
  function gotoToppings() {
    navigation.navigate('Topping');
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text style={Styles.settings}>Settings</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image source={require('../../Images/image32.png')} />
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <TextInput
          style={Styles.input1}
          placeholderTextColor={'#D4D3D3'}
          placeholder="Update Full Name"
        />
        <Text style={{marginTop: 20, marginLeft: 5}}>✅</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          style={Styles.cameraback}
          resizeMode="cover"
          source={require('../../Images/image32.png')}>
          <View style={{marginVertical: 35}}>
            <Image
              style={{width: 40}}
              source={require('../../Images/image32.png')}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            // backgroundColor: 'blue',
            width: 350,
          }}>
          <TextInput
            style={Styles.input2}
            placeholderTextColor={'#BDBABA'}
            placeholder="new category name"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#61B846',
              width: 60,
              height: 50,
              marginTop: 4,
              marginLeft: 15,
              borderRadius: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '700',
                marginVertical: 13,
              }}>
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginLeft: 37, marginTop: 7}}>
        <Text style={{color: '#024F9D', fontWeight: '700', fontSize: 20}}>
          All Categories
        </Text>
      </View>
      <ScrollView style={{height: '28%'}}>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            borderColor: 'green',
            borderWidth: 1,
            height: 65,
            width: '80%',
            alignSelf: 'center',
            borderRadius: 14,
            // marginBottom: 20,
            marginVertical: 8,
          }}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',

              color: '#61B846',
            }}>
            Fruits
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            borderColor: 'green',
            borderWidth: 1,
            height: 65,
            width: '80%',
            alignSelf: 'center',
            // marginBottom: 20,
            marginVertical: 8,
            borderRadius: 14,
          }}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40, marginTop: 5}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',

              color: '#61B846',
            }}>
            Meat
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            borderColor: 'green',
            borderWidth: 1,
            height: 65,
            width: '80%',
            alignSelf: 'center',
            // marginBottom: 20,
            marginVertical: 8,
            borderRadius: 14,
          }}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40, marginTop: 5}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',
              color: '#61B846',
            }}>
            Vegetables
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            borderColor: 'green',
            borderWidth: 1,
            height: 65,
            width: '80%',
            alignSelf: 'center',
            // marginBottom: 20,
            borderRadius: 14,
            marginVertical: 8,
          }}>
          <Image
            style={{marginLeft: 50, width: 50, height: 40, marginTop: 5}}
            source={require('../../Images/image32.png')}
          />
          <Text
            style={{
              marginLeft: 50,
              fontSize: 20,
              fontWeight: '700',

              color: '#61B846',
            }}>
            Vegetables
          </Text>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  settings: {
    color: '#024F9D',
    fontWeight: '600',
    fontSize: 22,
    marginVertical: 10,
  },
  input1: {
    height: 50,
    borderBottomWidth: 0.5,
    padding: 5,
    marginTop: 7,
    borderColor: '#D4D3D3',
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black',
  },
  input2: {
    height: 50,
    width: 272,
    paddingLeft: 14,
    borderBottomWidth: 0.5,
    padding: 8,
    fontWeight: '600',
    borderColor: '#D4D3D3',
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#D9D9D9',
  },
  cameraback: {
    height: 125,
    width: 350,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 14,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#61B846',
    padding: 15,
    textAlign: 'center',
    width: '90%',
    height: 70,
    marginTop: 10,
    // marginTop: 40,
    borderRadius: 15,
    elevation: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default AdminProfile;
