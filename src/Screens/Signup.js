import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useEffect, createContext, useState} from 'react';

export const MyContext = createContext();

const SignUpScreen = ({navigation}) => {
  const [mail, setmail] = useState('');
  const [username, setusername] = useState('');
  const [pass, setpass] = useState('');
  const [usernameerr, setusernameerr] = useState(false);
  const [mailerr, setmailerr] = useState(false);
  const [passerr, setpasserr] = useState(false);
  const [loginmailerr, setloginmailerr] = useState(false);
  const [loginpasserr, setloginpasserr] = useState(false);
  const [error, seterror] = useState(null);
  const [chksignin, setchksignin] = useState(true);
  const [loginmail, setloginmail] = useState('');
  const [loginpass, setloginpass] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    if (user && user.email == 'admin@gmail.com') {
      console.log(user.email);
      navigation.navigate('AdminShow');
    } else if (user) {
      console.log(user);
      navigation.navigate('UserShow');
    }
  }, [user]);
  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      console.log(user);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const logins = () => {
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/i;
    console.log(emailRegex.test(loginmail));
    if (emailRegex.test(loginmail)) {
      setloginmailerr(false);
      if (loginpass.length >= 6) {
        setloginpasserr(false);
        auth()
          .signInWithEmailAndPassword(loginmail, loginpass)
          .then(() => {
            console.log('User account created & signed in!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
            console.error(error);
          });
      } else {
        console.log('wrong pass');
        setloginpasserr(true);
      }
    } else {
      console.log('wrong email');
      setloginmailerr(true);
    }
  };
  const FSignUp = async () => {
    const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/i;
    console.log(emailRegex.test(mail));
    if (username) {
      setusernameerr(false);
      if (emailRegex.test(mail)) {
        setmailerr(false);
        if (pass.length >= 6) {
          setpasserr(false);
          auth()
            .createUserWithEmailAndPassword(mail, pass)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
              console.error(error);
            });
        } else {
          console.log('wrong pass');
          setpasserr(true);
        }
      } else {
        console.log('wrong email');
        setmailerr(true);
      }
    } else {
      console.log('USER NAME PROB');
      setusernameerr(true);
    }
  };

  return chksignin ? (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={styles.heading}>SAYLANI WELFARE</Text>
        <Text style={styles.text}>ONLINE DISCOUNT STORE</Text>
        <View style={{width: '70%', justifyContent: 'flex-start'}}>
          <Text style={{color: 'black'}}>Username</Text>
        </View>
        <TextInput
          placeholder="Type Username"
          placeholderTextColor={'gray'}
          style={{
            width: '70%',
            padding: 8,
            color: 'gray',
            borderBottomColor: usernameerr ? 'red' : 'lightgray',
            borderBottomWidth: 1,
          }}
          onChangeText={t => setusername(t)}
          blurOnSubmit={true}
        />
        <View
          style={{width: '70%', justifyContent: 'flex-start', paddingTop: 15}}>
          <Text style={{color: 'black'}}>Email</Text>
        </View>
        <TextInput
          placeholder="Type Email"
          placeholderTextColor={'gray'}
          style={{
            width: '70%',
            padding: 8,
            color: 'gray',
            borderBottomColor: mailerr ? 'red' : 'lightgray',
            borderBottomWidth: 1,
          }}
          onChangeText={t => setmail(t)}
          keyboardType="email-address"
        />
        <View
          style={{width: '70%', justifyContent: 'flex-start', paddingTop: 15}}>
          <Text style={{color: 'black'}}>Password</Text>
        </View>
        <TextInput
          placeholder="Type Passward"
          placeholderTextColor={'gray'}
          style={{
            width: '70%',
            padding: 8,
            color: 'gray',
            borderBottomColor: passerr ? 'red' : 'lightgray',
            borderBottomWidth: 1,
          }}
          onChangeText={e => setpass(e)}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={FSignUp}
          // onPress={() => navigation.replace('UserShow')}
        >
          <Text style={styles.btntxt}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{color: '#024f9d', padding: 10}}>
          already have account
          <Text
            onPress={() => setchksignin(false)}
            style={{fontWeight: 'bold', padding: 200, color: '#024f9d'}}>
            _SignUp
          </Text>
        </Text>
      </View>
    </>
  ) : (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={styles.heading}>SAYLANI WELFARE</Text>
        <Text style={styles.text}>ONLINE DISCOUNT STORE</Text>
        <View style={{width: '70%', justifyContent: 'flex-start'}}>
          <Text style={{color: 'black'}}>Email</Text>
        </View>
        <TextInput
          placeholder="Type  Email"
          placeholderTextColor={'gray'}
          style={{
            width: '70%',
            padding: 8,
            color: 'gray',
            borderBottomColor: loginmailerr ? 'red' : 'lightgray',
            borderBottomWidth: 1,
          }}
          onChangeText={t => setloginmail(t)}
          keyboardType="email-address"
        />
        <View
          style={{width: '70%', justifyContent: 'flex-start', paddingTop: 15}}>
          <Text style={{color: 'black'}}>Passwod</Text>
        </View>
        <TextInput
          placeholder="Type Passward"
          placeholderTextColor={'gray'}
          style={{
            width: '70%',
            padding: 8,
            color: 'gray',
            borderBottomColor: loginpasserr ? 'red' : 'lightgray',
            borderBottomWidth: 1,
          }}
          onChangeText={e => setloginpass(e)}
          secureTextEntry={true}
          password={true}
          textContentType={'password'}
        />

        <TouchableOpacity
          onPress={() => {
            logins();
          }}
          style={styles.btn}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
        <Text style={{color: '#024f9d', paddingTop: 10}}>
          dont have account
          <Text
            onPress={() => setchksignin(true)}
            style={{fontWeight: 'bold', color: '#024f9d'}}>
            _register
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 336,
    height: 263,
    marginTop: 100,
  },
  heading: {
    fontSize: 38,
    color: '#61B846',
    fontWeight: '700',
  },
  text: {
    fontSize: 20,
    color: '#024F9D',
    fontWeight: '600',
    marginTop: 0,
    paddingBottom: 10,
  },
  btn: {
    backgroundColor: '#61B846',
    width: 226,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  btntxt: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
