import { View, Text, Image, StyleSheet } from 'react-native'
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Orders() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Pending', value: 'pending' },
        { label: 'In-Progress', value: 'in-progress' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' }
    ]);

    return (
        <View style={{ padding: 5 }}>
            {/* header */}
            < View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
                    <IIcon
                        onPress={() => navigation.goBack()}
                        size={70}
                        color="#aaa"
                        style={{ marginLeft: -10 }}
                        name="chevron-back-sharp"
                    />
                    <Image
                        style={{ width: 70, height: 70, marginLeft: -20, borderRadius: 35, borderColor: 'black', borderWidth: 2 }}
                        source={require('../../Images/image32.png')}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <View><Text style={{ color : 'black'}}>Mr. Ahmed</Text></View>
                    <View><Text style={{ color : 'black'}}>Admin</Text></View>
                </View>
            </View >

            <View style={{ width: '100%', height: 2, backgroundColor: '#aaa', marginTop: 10, marginBottom: 20 }}></View>

            {/* conditional if product show, it'll show other wise it will now show the product details */}
            {
                <Text style={{ marginBottom: 7 , color : 'black'}}>Orders</Text>
            }
            <View >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color : 'black'}}>Inzamam Malik</Text>
                    <Text style={{ color : 'black'}}>03123445566</Text>
                </View>

                <View>
                    <Text style={{ color : 'black'}}>just now - pending</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color : 'black'}}>2</Text>
                    <Text style={{ color : 'black'}}>x</Text>
                    <Text style={{ color : 'black'}}>ITEM Name</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color : 'black'}}>Total</Text>
                    <Text style={{ color : 'black'}}>200.00</Text>
                </View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                <View style={{ width: '100%', height: 2, backgroundColor: '#afafaf', marginTop: 10 }}></View>
            </View>

        </View >
    )}