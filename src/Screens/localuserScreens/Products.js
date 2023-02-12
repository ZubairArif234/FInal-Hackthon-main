import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Products = () => {
  const seconditems = [
    {
      title: 'meat',
      price: 'Rs.800-per kg',
      image: require('../../Images/image32.png'),
      discription1: 'This is product description',
      discription2: 'This is abc product description',
    },
    {
      title: 'fish',
      price: 'Rs.800-per kg',
      image: require('../../Images/image32.png'),
      discription1: 'This is product description',
      discription2: 'This is abc product description',
    },
    {
      title: 'Beef Qeema',
      price: 'Rs.800-per kg',
      image: require('../../Images/image32.png'),
      discription1: 'This is product description',
      discription2: 'This is abc product description',
    },
    {
      title: 'meat',
      price: 'Rs.800-per kg',
      image: require('../../Images/image32.png'),
      discription1: 'This is product description',
      discription2: 'This is abc product description',
    },
  ];

  return (
    <ScrollView keyboardShouldPersistTaps="handled" scrollEnabled={true}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={styles.topview}>
            <View style={styles.toptext}>
              <Text style={styles.logotext}>SAYLANI WELFARE</Text>
              <Text style={styles.logotext2}>DISCOUNT STORE</Text>
            </View>
            <MaterialCommunityIcons
              name="cart-variant"
              size={32}
              color={'black'}
            />
          </View>
          <Image
            source={require('../../Images/Grocery.png')}
            style={styles.groceryimages}
          />

          <View style={{marginTop: 10}}>
            <View style={styles.secondlist}>
              <FlatList
                style={{width: '100%'}}
                data={seconditems}
                renderItem={items => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 20,
                      }}>
                      <View style={{width: '40%'}}>
                        <Image
                          source={items.item.image}
                          style={styles.image2}
                        />
                      </View>
                      <View
                        style={{
                          width: '60%',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          backgroundColor: 'yellow',
                          height: 0,
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',

                            height: 30,
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '700',
                              color: 'black',
                            }}>
                            {items.item.title}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '700',
                              color: 'black',
                            }}>
                            {items.item.price}
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            height: 60,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View>
                            <Text
                              style={{
                                fontWeight: '400',
                                color: '#BFBFBF',
                                fontSize: 12,
                              }}>
                              {items.item.discription1}
                            </Text>
                            <Text
                              style={{
                                fontWeight: '400',
                                color: '#BFBFBF',
                                fontSize: 12,
                              }}>
                              {items.item.discription2}
                            </Text>
                          </View>
                          <View>
                            <TouchableOpacity>
                              <View
                                style={{
                                  width: 45,
                                  height: 40,
                                  borderRadius: 10,
                                  backgroundColor: '#61B846',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <AntDesign
                                  name="plus"
                                  color="black"
                                  size={22}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  toptext: {
    alignSelf: 'center',
  },
  logotext: {
    color: '#61B846',
    fontSize: 23,
    fontWeight: '700',
  },
  logotext2: {
    color: '#024F9D',
    fontSize: 13,
    fontWeight: '600',
  },
  groceryimages: {
    width: '100%',
    height: 218,
    marginTop: 20,
    borderRadius: 15,
  },
  searching: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 37,
    width: '100%',
    backgroundColor: '#D9D9D9BF',
    borderRadius: 30,
    marginTop: 10,
  },
  categeryborder: {margin: 5, alignItems: 'center'},
  categeryimage: {
    width: 85,
    height: 49,
  },
  image2: {
    width: 115,
    height: 82,
    borderRadius: 15,
    evalution: 10,
  },
  secondlist: {
    width: '100%',
    marginTop: 20,
  },
});

export default Products;
