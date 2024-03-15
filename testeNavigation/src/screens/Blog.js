
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog( {navigation} ) {
    return (
        <View style={styles.container}>
                <Image
                    source={require('../img/logosweet2.png')}
                    style={styles.logo}
                />
            <Text style={styles.textoinicial}>Bem vindo ao Blog!</Text>
            <Pressable style={styles.botao} onPress={()=> navigation.navigate('Info2')}>
                <Text style={styles.textoBotao}>Doces de páscoa: confira as receitas!</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={()=> navigation.navigate('Info1')}>
                <Text style={styles.textoBotao}>19 Sobremesas rápidas para fazer em casa!</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 75,
        backgroundColor: "#ed8900",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
    },
    textoBotao: {
        color: "white",
        fontSize: 17,
        justifyContent: 'center',

    },
    textoinicial: {
        fontSize: 20,
        marginTop: 20,
    },
    logo: {
        width: 200,
        height: 100,
        marginBottom: 5,
    },
}
);
