import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const getItem = async (key) => {
        try{
            const senha = await AsyncStorage.getItem(key);
            return JSON.parse(senha) || [];
        }catch(error){
            console.log("Erro ao buscar", error)
            return [];

        }
    }

    const postItem = async (key, value) => {
        try{
            let senha = await getItem(key);
            senha.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(senha))
            
        }catch(error){
            console.log("Erro ao salvar", error)
        }
    }

    const deleteItem = async (key, item) => {
        try{
            let senha = await getItem(key);
            let minhaSenha = senha.filter((senha) => {
                return (senha !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(minhaSenha))
            return minhaSenha;
        }catch(error){
            console.log("Erro ao deletar", error)
        }
    }

    return{
        getItem,
        postItem,
        deleteItem,
    }

}

export default useStorage;