import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native';

export default function Home(){
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Image
                source={require('../img/logosweet2.png')}
                style={styles.logo}
            />
            <Text style={styles.textoinicial}>Sobre nós!</Text>
            <Text style={styles.textContent}>Nossa jornada começou em 2023, com a simples missão de levar alegria e doçura para a vida das pessoas, oferecendo uma ampla variedade de receitas cuidadosamente selecionadas.</Text>
            <Image
                source={require('../img/fotosobre1.jpg')}
                style={styles.imgSobre}
            />
            <Text style={styles.textContent}> Desde o momento em que abrimos nossas portas virtuais, temos nos empenhado em proporcionar experiências doces e memoráveis para os nossos clientes. </Text>
            <Image
                source={require('../img/fotosobre2.jpg')}
                style={styles.imgSobre}
            />
            <Text style={styles.textContent}>Com receitas artesanais de alta qualidade e um compromisso inabalável com a satisfação do cliente, estamos ansiosos para continuar adoçando vidas e construindo laços através das nossas deliciosas criações. Obrigado por fazer parte da nossa jornada doce!</Text>
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
        width: 200,
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
    imgSobre: {
        marginTop:20,
        width: 320,
        height: 170,
        marginBottom: 20,
    },
});