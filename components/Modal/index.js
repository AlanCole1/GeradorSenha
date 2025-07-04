import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'


export function ModalPassword({senha, handleClose}){
const {postItem} = useStorage();
    async function handleCopyPassword(){
        await Clipboard.setStringAsync(senha)
        await postItem("@pass", senha)
        alert("Senha salva")
        handleClose();
    }
    return(
    <View style={styles.container}>
       <View style={styles.content}>
            
            <Pressable style={styles.password} onLongPress={handleCopyPassword}>
                <Text style={styles.text}>{senha} </Text>
                

            </Pressable>
            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                    <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    password:{
        backgroundColor: "#0e0e0e",
        width: '90%',
        padding: 15,
        borderRadius: 10,
    },
    text:{
        color: '#FFF',
        textAlign: 'center', 
    },
    buttonArea:{
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding:8,
    },
    buttonSave:{
        backgroundColor: '#382de9',
        borderRadius: 10,
    },
    buttonSaveText:{
        color: '#FFF',
        fontWeight: 'bold',
    },
})