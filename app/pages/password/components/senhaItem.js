import React from 'react';
import { Text, StyleSheet, Pressable  } from 'react-native';

export function SenhaItem({data, removeSenha}){
    return(
        <Pressable onLongPress={removeSenha} style={styles.container}>
            <Text style={{color: '#FFF'}}>
                {data}
            </Text>
          
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    }
})