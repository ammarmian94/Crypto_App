import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import { Icons, Images, SIZES } from '../Constants';


const Home = ({ navigation }) => {

    function renderHeader() {
        return(
            <View style={{height:290, width:'100%', ...styles.shadow}}>
                <ImageBackground
                    source={Images.banner}
                    resizeMode='cover'
                    style={styles.imgbackground}
                >
                    {/* Header Bar */}
                    <View
                        style={styles.headerBarView}
                    >
                        <TouchableOpacity
                            style={styles.touchableopacity}
                            onPress={()=>console.log("Notification on Pressed")}
                        >
                            <Image source={Icons.notification_white}
                            resizeMode="contain" style={{flex:1}} />
                        </TouchableOpacity>
                    </View>

                    {/* Balance */}

                    {/* Trending */}

                </ImageBackground>

            </View>
        )
    }
    return (
        <ScrollView>
            <View>
            {renderHeader()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    imgbackground:{
        flex: 1,
        alignItems: 'center'
    },
    headerBarView:{
        marginTop: SIZES.padding,
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding
    },
    touchableopacity:{
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;