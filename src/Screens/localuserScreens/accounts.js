import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import userImage from '../../Images/Ellipse.png';
import auth from '@react-native-firebase/auth';

const Accounts = ({navigation}) => {
  const COLORS = {
    green: '#61B846',
    blue: '#024F9D',
    white: '#FFF',
    grey: '#D4D3D3',
    grey1: '#BFBFBF',
    black: '#000',
  };
  return (
    <View style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 3, width: '100%', alignItems: 'center', top: 8}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            color: COLORS.blue,
          }}>
          Settings
        </Text>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Image
            source={userImage}
            style={{
              width: 100,
              height: 100,
            }}></Image>
          <TextInput
            placeholder="Update Full Name"
            style={{
              textAlign: 'center',
              letterSpacing: 0.5,
              borderBottomWidth: 1,
              width: '60%',
              fontSize: 20,
              color: COLORS.grey,
              fontWeight: '700',
            }}
          />
          <Text
            style={{
              color: COLORS.blue,
              fontSize: 20,
              fontWeight: '700',
              left: '-40%',
              top: '30%',
            }}>
            Orders
          </Text>
        </View>

        <View
          style={{
            flex: 7,
            width: '100%',
            top: 20,
            maxHeight: '60%',
          }}>
          <FlatList
            keyExtractor={key => {
              return key.index;
            }}
            // horizontal
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <Text
                    style={{
                      left: '12%',
                      color: COLORS.black,
                      top: 90,
                      fontSize: 20,
                      fontWeight: 400,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      left: '12%',
                      color: COLORS.black,
                      top: 89,
                      fontSize: 12,
                      fontWeight: 400,
                    }}>
                    {item.time}
                  </Text>
                  <Text
                    style={{
                      left: '70%',
                      top: 73,
                      fontSize: 10,
                      fontWeight: 400,
                    }}>
                    {item.phone}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.grey1,
                      left: '12%',
                      top: 75,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      letterSpacing: 0.5,
                      fontWeight: '400',
                    }}>
                    {item.oneX}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.grey1,
                      left: '12%',
                      top: 73,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      letterSpacing: 0.5,
                      fontWeight: '400',
                    }}>
                    {item.threeX}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.black,
                      letterSpacing: 1,
                      top: '69%',
                      left: '12.5%',
                    }}>
                    Total
                  </Text>
                  <Text
                    style={{
                      color: COLORS.green,
                      top: '43%',
                      left: '70%',
                    }}>
                    PKR {item.price}
                  </Text>
                </View>
              );
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SplashScreen")
              auth()
                .signOut()
                .then(() => console.log('User signed out!'));
            }}>
            <View
              style={{
                left: '6%',
                top: 12,
                width: '88%',
                height: 59,
                backgroundColor: COLORS.green,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  letterSpacing: 1.5,
                  textTransform: 'capitalize',
                  top: '17%',
                  fontSize: 25,
                  fontWeight: '900',
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const data = [
  {
    index: 1,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 2,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 3,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 4,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 5,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 6,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 7,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 8,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 9,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 10,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
  {
    index: 11,
    name: 'Inzamam Malik',
    phone: '03243343722',
    time: 'Just Now - Pending',
    price: '185.00',
    oneX: '1XTime Name ',
    threeX: '3XTime Name ',
  },
];

export default Accounts;
