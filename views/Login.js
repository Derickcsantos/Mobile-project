import { View, Button, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { style } from "./Style";
import { useState } from "react";


export default function Login ( { navigation } )
{
    const [ usuario, setUsuario ] = useState( '' );
    const [ senha, setSenha ] = useState( '' );


    async function sendForm ()
    {
        let response = await fetch( 'http://10.10.10.132:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                nome: usuario,
                password: senha
            } )
        } );
        let json = await response.json();

        if ( json === 'error' )
        {
            setDisplay( 'flex' );
            setTimeout( () =>
            {
                setDisplay( 'none' );
            }, 5000 );
        }
        else
        {
            await AsyncStorage.setItem( 'userData', JSON.stringify( json ) );
            navigation.navigate( 'Home' );
        }

    }

    return (
        <View style={ style.body }>
            <View style={ style.container }>

                <Image
                    source={ require( '../assets/logo.webp' ) } // Caminho da imagem local
                    style={ style.image }
                />

                <TextInput style={ style.usuario }
                    placeholder="Usuario"
                    onChangeText={ setUsuario }
                    value={ usuario }
                />
                <TextInput style={ style.senha }
                    placeholder="Senha"
                    onChangeText={ setSenha }
                    secureTextEntry={ true }
                    value={ senha }
                />
                <TouchableOpacity style={ style.button } onPress={ () => sendForm() }>
                    <Text style={ style.texto }>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>

    )

}