import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/logo3.png')}
                style={styles.imagemPerfil}
            />
            <Text style={styles.titulo}>Nome do Usuário</Text>
            <Text style={styles.texto}>E-mail: usuario@email.com</Text>
            <Text style={styles.texto}>Telefone: (99) 99999-9999</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 16,
        marginBottom: 5,
    },
});
