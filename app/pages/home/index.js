import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import {ModalPassword} from '../../../components/Modal/index';
import Slider from '@react-native-community/slider';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"



export function Home(){
  
  const [size, setSize] = useState(6)
  const [passwordValue, setPasswordValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  
  function gerarSenha(){
    
    let senha  = '';
    for(let i = 0, n = charset.length; i < size; i++){
      senha += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(senha)
    setModalVisible(true)
    
   
  }
  
  
  return(
    <View style={styles.container}>
    
      <Image
       source={require("../../../assets/images/logo.png")}
       style={styles.logo}
       />
      <Text style={styles.title}>{size} caracteres</Text>
      
      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={4}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#05ac0a"
          thumbTintColor="#000"
          value={size}
          onValueChange={ (value) => setSize(Math.trunc(value)) }
        />

      </View>

    
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}>Gerar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword senha = {passwordValue} handleClose = {() => setModalVisible(false)} />
      </Modal>

    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F3F3FF',
    justifyContent:'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom: 30,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  area:{
    marginTop: 5,
    marginBottom: 14,
    width: '70%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 5,
  },
  button:{
    backgroundColor: "#382de9",
    borderRadius: 8,
    width: '70%',
    height: 40,
    justifyContent:'center',
    alignItems: 'center',
  },
  textButton:{
    color: "#FFF",
    fontSize: 20,
  },
})