import React from 'react';

import {SafeAreaView, Image, Text, View} from 'react-native';

export const App = props => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          height: '30%',
          width: '95%',
          backgroundColor: 'pink',
          flexDirection: 'row',
          marginLeft: '2.5%',
        }}>
        <View
          style={{
            height: '100%',
            width: '50%',
            backgroundColor: 'black',
            alignItems: 'center',
            paddingVertical: '10%',
          }}>
          <View style={{}}>
            <Image
              style={{height: 24, width: 120}}
              source={require('./image/apelogo.png')}
            />
          </View>

          <View
            style={{
              width: '100%',
              marginTop: '32%',
              paddingLeft: 25,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: '#00BA70',
                fontFamily: 'sofiapro-light',
              }}>
              C R E A T E{' '}
              <Text
                style={{
                  fontSize: 13,
                  color: '#00BA70',
                  fontFamily: 'sofiapro-light',
                  marginLeft: 10,
                }}>
                {' '}
                A P E
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            width: '50%',
            backgroundColor: '#212129',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '17%',
              borderWidth: 0.5,
              marginTop: '90%',
              marginLeft: '71%',
              backgroundColor: '#FFFFFF',
            }}></View>
          <View
            style={{
              height: '85%',
              borderWidth: 0.5,
              backgroundColor: '#00BA70',
              marginLeft: 15,
            }}></View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          paddingLeft: '8.8%',
          justifyContent: 'center',
          marginTop: '-23%',
        }}>
        <Text
          style={{
            fontSize: 27,
            color: '#FFFFFF',
            fontWeight: '600',
            fontFamily: 'sofiapro-light',
            fontWeight: '500',
          }}>
          React Native Challenge
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
