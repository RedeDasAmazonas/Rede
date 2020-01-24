import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'
import { colors, globalStyles } from '../styles/global';

export default function Slide({ item, navigation }) {

    return (
        <View style={globalStyles.wrapper}>

            <View style={styles.imageView}>
                <Image style={{
                    width: item.width,
                    height: item.height
                }} source={item.img} />
            </View>

            <View style={styles.about}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>

            {
                navigation &&
                <View style={styles.btview}>
                    <Button
                        // icon={{
                        //     name: "home",
                        //     color: "#fff"
                        // }}
                        raised
                        // type="outline"
                        buttonStyle={{
                            backgroundColor: colors.red,
                            // borderWidth: 2,
                            width: "100%",
                            // borderRadius: 25
                        }}
                        onPress={() => navigation.navigate('SignUp')}
                        title="Cadastrar"
                        titleStyle={{
                            color: "#fff"
                        }}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        margin: 16,
        flex: 1,
    },
    imageView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    about: {
        flex: 1.5,
        alignItems: "center",
        padding: 10
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16
    },
    text: {
        fontSize: 18,
        marginTop: 4,
        color: '#fff',
        textAlign: "justify"
    },
    btview: {
        flex: 0.5,
        // alignItems: "center"
        // backgroundColor: "coral",
        // justifyContent: "center"
    },
})

