import React from 'react';
import { View, Text, StyleSheet, Pressable, Image ,ScrollView} from 'react-native';

export default function Info2({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Image
                    source={require('../img/logosweet2.png')}
                    style={styles.logo}
                />
                <Text style={styles.titulo}>Doces de páscoa: confira as receitas!</Text>
                <Text style={styles.texto}>
                    A Páscoa está chegando, e nada melhor do que celebrar essa data especial com uma mesa repleta de deliciosos doces. Se você está procurando inspiração para preparar sobremesas incríveis e surpreender a família e os amigos, você veio ao lugar certo! Neste blog, vamos compartilhar uma seleção irresistível de receitas de doces de Páscoa que vão encantar a todos.
                    {'\n\n'}
                    1. <Text style={styles.tituloReceita}>Ovos de Chocolate Recheados</Text>: Que tal preparar seus próprios ovos de chocolate recheados? Escolha seu recheio favorito, seja brigadeiro, doce de leite ou trufa, e mergulhe na doçura da Páscoa.
                    {'\n\n'}
                    2. <Text style={styles.tituloReceita}>Bolo de Cenoura com Cobertura de Chocolate</Text>: Um clássico da Páscoa, o bolo de cenoura é sempre uma escolha acertada. Finalize com uma generosa camada de cobertura de chocolate para uma explosão de sabor.
                    {'\n\n'}
                    3. <Text style={styles.tituloReceita}>Cookies de Páscoa Decorados</Text>: Deixe sua criatividade fluir e prepare cookies temáticos de Páscoa. Use cortadores em formatos de coelhinhos, ovos e cenouras, e decore com glacê colorido para uma sobremesa divertida e saborosa.
                    {'\n\n'}
                    4. <Text style={styles.tituloReceita}>Torta de Limão Merengada</Text>: Com uma massa crocante, um recheio de limão refrescante e um topo de merengue dourado, esta torta é uma verdadeira tentação para os amantes de doces.
                    {'\n\n'}
                    5. <Text style={styles.tituloReceita}>Bombons Artesanais</Text>: Surpreenda com bombons caseiros, feitos com ingredientes de qualidade e muito amor. Experimente combinações como chocolate com avelã, coco com amêndoas ou morango com creme de leite condensado.
                    {'\n\n'}
                    6. <Text style={styles.tituloReceita}>Pavê de Chocolate e Morango</Text>: Camadas de biscoito, creme de chocolate e morangos frescos se unem para criar uma sobremesa irresistível, perfeita para compartilhar com a família durante o almoço de Páscoa.
                    {'\n\n'}
                    7. <Text style={styles.tituloReceita}>Mini Cheesecakes de Frutas Vermelhas</Text>: Prepare mini cheesecakes individuais e decore com uma compota de frutas vermelhas. Além de deliciosos, eles são uma adorável adição à mesa de sobremesas.
                    {'\n\n'}
                    8. <Text style={styles.tituloReceita}>Trufas de Maracujá</Text>: Com uma casquinha de chocolate amargo e um recheio de ganache de maracujá, estas trufas são uma explosão de sabor tropical que vai surpreender a todos.
                    {'\n\n'}
                    Com estas receitas de doces de Páscoa, você pode transformar sua celebração em um momento ainda mais especial e doce. Deixe sua criatividade fluir na cozinha e aproveite cada momento com seus entes queridos. Feliz Páscoa! 🐰🍫🌷
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
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    tituloReceita: {
        color: '#ed8900',
        fontWeight: 'bold',
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
        marginBottom: 30,
        marginTop:20,
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
