import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  LogBox
} from 'react-native';

import {COLORS, dummyData, FONTS, Icons, Images, SIZES} from '../Constants';
import { PriceAlert, TransactionHistory } from '../Components';

const Home = ({navigation}) => {
  //const {trending, setTrending} = React.useState(dummyData.trendingCurrencies);

  const trending = dummyData.trendingCurrencies;
  const transactionHistory = dummyData.transactionHistory;

  React.useEffect(()=>{
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  },[])

  function renderHeader() {
    const renderItem = ({item, index}) => (
      //<View>{console.log(item)}</View>

      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
        }}
        onPress={() => navigation.navigate("CryptoDetails", {currency: item})}
        >
        {/* Currency */}
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                marginTop: 5,
                width: 25,
                height: 25,
              }}
            />
          </View>
          <View style={{marginLeft: SIZES.base}}>
            <Text style={{...FONTS.h2}}>{item.currency}</Text>
            <Text style={{color: COLORS.gray, ...FONTS.body3}}>
              {item.code}
            </Text>
          </View>
        </View>
        {/* Vlaue */}
        <View style={{marginTop: SIZES.radius}}>
          <Text style={{...FONTS.h2}}>${item.amount}</Text>
          <Text
            style={{
              color: item.type == 'I' ? COLORS.green : COLORS.red,
              ...FONTS.h3,
            }}>
            {item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={{height: 270, width: '100%', ...styles.shadow}}>
        <ImageBackground
          source={Images.banner}
          resizeMode="cover"
          style={styles.imgbackground}>
          {/* Header Bar */}
          <View style={styles.headerBarView}>
            <TouchableOpacity
              style={styles.touchableopacity}
              onPress={() => console.log('Notification on Pressed')}>
              <Image
                source={Icons.notification_white}
                resizeMode="contain"
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>

          {/* Balance */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              Your Profile Balance
            </Text>
            <Text
              style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1}}>
              ${dummyData.portfolio.balance}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>
              {dummyData.portfolio.changes}Last 24 Hours
            </Text>
          </View>

          {/* Trending */}
          <View style={{position: 'absolute', bottom: '-30%'}}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}>
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{marginTop: SIZES.base}}
              data={trending}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderAlert() {
      return(
        <PriceAlert />
      )
  };

  function renderNotice() {
      return(
          <View
          style={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.padding,
              padding: 20,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.secondary,
              ...styles.shadow
          }}
          >
              <Text style={{color: COLORS.white, ...FONTS.h3}} >Investing Saferty</Text>
              <Text style={{marginTop: SIZES.base, color: COLORS.white, 
            ...FONTS.body4, lineHeight: 18}} >It's very difficlt to time an investment, especially 
                  when the market is volatile. Learn how to use dollar const
                  averaging to your advantage</Text>
                <TouchableOpacity
                style={{
                    marginTop: SIZES.base
                }}
                onPress={() => console.log("Learn More") }
                >
                    <Text
                    style={{textDecorationLine: 'underline', 
                color: COLORS.green, ...FONTS.h3}}>Learn More</Text>
                </TouchableOpacity>
          </View>
      )
  };

  function renderTransactionHistory() {
    return(
      <TransactionHistory 
      customContainerStyle = {{...styles.shadow}}
      history = {transactionHistory}
      />
    )
  };

  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 130}}>
          {renderHeader()}
          {renderAlert()}
          {renderNotice()}
          {renderTransactionHistory()}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  imgbackground: {
    flex: 1,
    alignItems: 'center',
  },
  headerBarView: {
    marginTop: SIZES.padding,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  touchableopacity: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
