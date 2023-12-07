import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationProps } from '../type';

const Screen1: React.FC<NavigationProps<'Screen1'>> = ({ navigation }) => {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  const handleGuardar = () => {

    setConfirmacion('Gasto guardado con éxito');
  };

  return (
    <View>
      <Text>Ingrese información del gasto:</Text>
      <TextInput
        placeholder="ID del gasto"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        placeholder="Monto"
        value={monto}
        onChangeText={(text) => setMonto(text)}
      />
      <TextInput
        placeholder="Categoría"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
      <Button title="Guardar Gasto" onPress={handleGuardar} />
      {confirmacion ? <Text>{confirmacion}</Text> : null}
    </View>
  );
};

export default Screen1;

