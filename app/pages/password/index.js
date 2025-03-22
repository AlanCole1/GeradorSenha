import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useState, useEffect} from 'react'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '@/hooks/useStorage'
import {SenhaItem} from './components/senhaItem'

export function Password(){
    const [listSenha, setListSenha] = useState([])
    const focused = useIsFocused();
    const {getItem, deleteItem} = useStorage();

    useEffect(() => {
        async function loadPassword() {
            const senha = await getItem("@pass")
            setListSenha(senha);
        }
        loadPassword();
    }, [focused])

    async function handleDeleteSenha(item){
        const senha = await deleteItem("@pass", item)
        setListSenha(senha)
    }


    return(
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
            <Text style={styles.title}>Senhas</Text>
        </View>
        <View style={styles.content}>
            <FlatList
            style={styles.flatList}
            data={listSenha}
            keyExtractor={(item) => String(item)}
            renderItem={({item}) => <SenhaItem data={item} removeSenha={() => handleDeleteSenha(item)}/>}
            />
        </View>
    </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 25,
        paddingBottom: 20,
        paddingLeft: 14,
        paddingRight: 14,
        
    },
    title: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    },
    flatList:{
        flex: 1,
        paddingTop: 14,
    }

})