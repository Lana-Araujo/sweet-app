import React from 'react';
import { View, Text, StyleSheet, Pressable, Image ,ScrollView} from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Image
                    source={require('../img/logosweet2.png')}
                    style={styles.logo}
                />
            <Text style={styles.titulo}>19 Sobremesas rápidas para fazer em casa!</Text>
            <Text style={styles.texto}>
                1. Mousse de Chocolate Instantâneo
                {'\n'}
                2. Crepes de Nutella
                {'\n'}
                3. Pudim de Micro-ondas
                {'\n'}
                4. Bananas Assadas com Canela
                {'\n'}
                5. Taças de Frutas com Chantilly
                {'\n'}
                6. Torta de Limão de Última Hora
                {'\n'}
                7. Crumble de Maçã
                {'\n'}
                8. Brownie de Caneca
                {'\n'}
                9. Sorvete de Banana Congelada
                {'\n'}
                10. Torta de Sorvete de Chocolate
                {'\n'}
                11. Pavê de Bolacha
                {'\n'}
                12. Gelatina Colorida
                {'\n'}
                13. Milkshake de Oreo
                {'\n'}
                14. Tigela de Frutas com Iogurte
                {'\n'}
                15. Picolé de Frutas
                {'\n'}
                16. Torta de Ricota e Frutas
                {'\n'}
                17. Pavê de Chocolate e Morango
                {'\n'}
                18. Cheesecake de Frutas Vermelhas
                {'\n'}
                19. Mousse de Maracujá
                {'\n'}
                20. Creme de Abacaxi com Coco
            </Text>
            <Pressable
                style={styles.botao}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotao}>Voltar para o Blog</Text>
            </Pressable>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    texto: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'left',
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#ed8900',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
    },
    logo: {
        marginTop:20,
        width: 200,
        height: 100,
        marginBottom: 10,
    },
});
