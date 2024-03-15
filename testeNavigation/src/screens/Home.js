import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Image
                    source={require('../img/logo3.png')}
                    style={styles.logo}
                />
                <Text style={styles.textoinicial}>Bem vindo(a) a SWEET!</Text>
                <Text style={styles.textContent}>Fique à vontade e deixe-se levar por um mundo repleto de sabores tentadores, cores vibrantes e aromas que o transportarão de volta à infância.</Text>
                <Image
                    source={require('../img/fotohome1.jpg')}
                    style={styles.imgHome}
                />
                <Text style={styles.textContent}>Navegue pelo nosso aplicativo e deixe-se encantar por uma variedade de receitas, chocolates, doces e muito mais. Desde os clássicos atemporais até as últimas tendências gourmet, cada doce é uma experiência única que desperta memórias e alegra corações.</Text>
                <Image
                    source={require('../img/fotohome2.jpg')}
                    style={styles.imgHome}
                />
                <Text style={styles.textContent}>No feed, oferecemos uma variedade de receitas para todos os gostos. Já em nosso blog, você encontrará opções de receitas fáceis e rápidas, perfeitas para momentos de desejo por algo doce sem complicações.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textoinicial: {
        fontSize: 20,
        marginBottom: 10,
    },
    textContent: {
        margin:20,
        marginHorizontal: 30,
        textAlign: 'justify',
        marginTop:20,
    },
    imgHome: {
        marginTop:20,
        width: 320,
        height: 170,
        marginBottom: 20,
    },
});
