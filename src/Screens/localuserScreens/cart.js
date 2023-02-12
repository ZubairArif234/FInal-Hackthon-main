import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollViewBase,
  ScrollView,
  FlatList,
} from 'react-native';

import Trash from 'react-native-vector-icons/FontAwesome';

const Carts = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={styles.cart_body}>
          <View style={styles.image_parent}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../Images/Ellipse.png')}
            />
          </View>
          <View style={styles.header_cart}>
            <View style={styles.cart_heading}>
              <Text style={{color: '#024F9D', fontSize: 50}}>Shopping</Text>
              <Text style={{color: '#61B846', fontSize: 40}}>Cart</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.delete_cart}>
                <Trash style={{marginTop: 40}} name="trash">
                  Delete
                </Trash>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header_two}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../Images/Ellipse.png')}
              />
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold' , color : 'gray'}}>ITEM NAME</Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                marginTop: 32,
                alignItems:'center'
              }}>
              <Text style={{marginRight: 5 , color : 'gray'}}>+</Text>
              <Text style={{marginRight: 5 , color : 'gray'}}>1</Text>
              <Text style={{marginLeft: 5 , color : 'gray'}}>-</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold' , color : 'gray'}}>250</Text>
            </View>
          </View>

          <View style={styles.header_two}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../Images/Ellipse.png')}
              />
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold' , color : 'gray'}}>ITEM NAME</Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                marginTop: 32,
              }}>
              <Text style={{marginRight: 5 , color : 'gray'}}>+</Text>
              <Text style={{marginRight: 5 , color : 'gray'}}>1</Text>
              <Text style={{marginLeft: 5 , color : 'gray'}}>-</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold' , color : 'gray'}}>450</Text>
            </View>
          </View>

          <View style={styles.header_two}>
            <View>
              <Image
                style={styles.logoImage}
                source={require('../../Images/Ellipse.png')}
              />
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold' , color : 'gray'}}>ITEM NAME</Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                marginTop: 32,
              }}>
              <Text style={{marginRight: 5 , color : 'gray'}}>+</Text>
              <Text style={{marginRight: 5 , color : 'gray'}}>1</Text>
              <Text style={{marginLeft: 5 , color : 'gray'}}>-</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold' , color : 'gray'}}>350</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.Total_Amount}>
            <Text style={{fontWeight: 'bold' , color : 'gray'}}> Total</Text>
            <Text style={{fontWeight: 'bold', color : 'gray'}}> 1050</Text>
          </View>

          <View style={styles.header_three}>
            <TextInput
              style={styles.input1}
              placeholderTextColor={'#D4D3D3'}
              placeholder="Full Name"
            />
            <TextInput
              style={styles.input1}
              placeholderTextColor={'#D4D3D3'}
              placeholder="Email"
            />
            <TextInput
              style={styles.input1}
              placeholder="Phone Number"
              placeholderTextColor={'#D4D3D3'}
            />
            <TextInput
              style={styles.input1}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'#D4D3D3'}
            />
            <View style={styles.button_div}>
              <TouchableOpacity
                // onPress={() => navigation.navigate('Login')}
                style={styles.button}>
                <Text style={styles.buttonText}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cart_body: {
    backgroundColor: '#fff',
    height: '100%',
  },
  image_parent: {
    alignItems: 'flex-end',
    padding: 10,
  },
  header_cart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  header_two: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },

  line: {
    width: '80%',
    backgroundColor: '#BFBCBC',
    height: 2,
    marginLeft: 40,
    marginTop: 50,
  },

  Total_Amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },

  header_three: {
    justifyContent: 'center',
    width: '60%',
    marginLeft: 40,
  },

  input1: {
    height: 40,
    borderBottomWidth: 0.5,
    padding: 10,
    marginTop: 15,
    borderColor: '#D4D3D3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#61B846',
    padding: 15,
    width: '85%',
    margin: 'auto',
    marginTop: 40,
    borderRadius: 15,
    elevation: 8,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  button_div: {
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
  },
});
export default Carts;
