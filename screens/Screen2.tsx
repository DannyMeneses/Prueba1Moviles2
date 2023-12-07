import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationProps } from '../type';

const Screen2: React.FC<NavigationProps<'Screen2'>> = ({ navigation }) => {
  const [idGasto, setIdGasto] = useState('');
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  const [informacion, setInformacion] = useState('');

  const handleMostrarInformacion = () => {
    setInformacion(`Información del Gasto con ID ${idGasto}:\nMonto: $100\nCategoría: Comida\nDescripción: Almuerzo`);
    setMostrarInformacion(true);
  };

  return (
    <View>
      <Text>Ingrese el ID del gasto para ver la información:</Text>
      <TextInput
        placeholder="ID del gasto"
        value={idGasto}
        onChangeText={(text) => setIdGasto(text)}
      />
      <Button title="Mostrar Información" onPress={handleMostrarInformacion} />
      {mostrarInformacion ? <Text>{informacion}</Text> : null}
    </View>
  );
};

export default Screen2;

