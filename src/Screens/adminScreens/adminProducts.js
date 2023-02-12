import React from 'react';
import {View, SafeAreaView, Text, FlatList, Image} from 'react-native';

const AdminProducts = () => {
  const greencolor = '#61b846';
  const bluecolor = '#024f9d';

  const toppingsobj = [
    {
      index: '1',
      toppings: 'Pepperoni',
      image: require('../../Images/Logo.png'),
      // imagepiz: require("../../assets/pepro.png"),
      // [toggleCheckBox, setToggleCheckBox] = useState(false)
      // check: toggleCheckBox == 1 ? true:false
      // prics:
      checked: false,
      // imagepizza :setpizzaimage(require("../../assets/pepperonipizza.png"))
    },
    {
      index: '2',
      toppings: 'Mashroom',
      image: require('../../Images/Logo.png'),
      // image : require("../../assets/mashroom.png"),
      // imagepiz: require("../../assets/pepro.png"),
      // check: toggleCheckBox == 2 ? true:false
      checked: false,
      // imagepizza : setpizzaimage(require("../../assets/mashroomspizza.png")),
    },
    {
      index: '3',
      toppings: 'Olive',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/olive.jpg"),
      // imagepiz: require("../../assets/pepro.png"),
      // imagepizza :setpizzaimage(require("../../assets/olivepizza.png")),
      // check: toggleCheckBox == 3 ? true:false
      checked: false,
    },
    {
      index: '4',
      toppings: 'Onions',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/onions.jpg"),
      // imagepiz: require("../../assets/pepro.png"),
      checked: false,
      // check: toggleCheckBox == 4 ? true:false
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    },
    {
      index: '5',
      toppings: 'Capsicum',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/capsicum.jpg"),
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
      checked: false,
      // check: toggleCheckBox == 5 ? true:false
    },
    {
      index: '6',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/jalapeno.jpg"),
      // check: toggleCheckBox == 6 ? true:false
      checked: false,
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    },
    {
      index: '7',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/jalapeno.jpg"),
      // check: toggleCheckBox == 6 ? true:false
      checked: false,
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    },
    {
      index: '8',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/jalapeno.jpg"),
      // check: toggleCheckBox == 6 ? true:false
      checked: false,
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    },
    {
      index: '9',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/jalapeno.jpg"),
      // check: toggleCheckBox == 6 ? true:false
      checked: false,
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    },
    {
      index: '10',
      toppings: 'Jalapeno',
      image: require('../../Images/Logo.png'),
      // image :require("../../assets/jalapeno.jpg"),
      // check: toggleCheckBox == 6 ? true:false
      checked: false,
      // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    },
    // {
    //     index:'11',
    //     toppings:'Jalapeno',
    //     // image :require("../../assets/jalapeno.jpg"),
    //     // check: toggleCheckBox == 6 ? true:false
    //     checked: false
    //     // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    // },
    // {
    //     index:'12',
    //     toppings:'Jalapeno',
    //     // image :require("../../assets/jalapeno.jpg"),
    //     // check: toggleCheckBox == 6 ? true:false
    //     checked: false
    //     // imagepizza :setpizzaimage(require("../../assets/onionspizza.png")),
    // },
  ];
  return (
    <View style={{backgroundColor: 'white', flex: 10}}>
      <View style={{flex: 2}}>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
            alignItems: 'center',
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
                  height: '40%',
                }}>
                <Image source={require('../../Images/Ellipse.png')} />
              </View>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{color: '#024f9d', fontSize: 30, fontWeight: 'bold'}}>
                  Mr.Ahmed
                </Text>
                <Text
                  style={{color: '#61b846', fontSize: 30, fontWeight: 'bold'}}>
                  Admin
                </Text>
              </View>
            </View>
            <Image source={require('../../Images/pool.png')} />
          </View>
        </View>
      </View>
      <View style={{flex: 8}}>
        <Text
          style={{
            color: '#024f9d',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,        
            marginLeft: 20,
            // marginTop: 10,
            // marginBottom: 10,
          }}>
        
          ALL PRODUCTS
        </Text>

        <FlatList
          keyExtractor={key => {
            return key.index;
          }}
          // horizontal
          data={toppingsobj}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: '#ffffff',
                  marginLeft: 20,
                  marginRight: 20,
                  width: 320,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 5,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  margin: 10,
                  borderWidth: 1,
                  alignSelf: 'center',
                  borderColor: greencolor,
                  height: 100,
                }}>
                <View style={{width: 90, marginLeft: 10}}>
                  <Image
                    style={{width: 90, height: 60, marginTop: 10}}
                    source={require('../../Images/Logo.png')}
                  />
                </View>
                <View
                  style={{
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: greencolor,
                    }}>
                    {item.toppings}
                  </Text>
                  <Text style={{fontSize: 11, color: '#6d6e9c'}}>1 kg</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#F4F3F9',

                    alignSelf: 'center',
                  }}>
                  <Text>PKR 150.00</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default AdminProducts;
