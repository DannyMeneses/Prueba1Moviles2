import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationProps } from '../type';

const Screen3: React.FC<NavigationProps<'Screen3'>> = ({ navigation }) => {
  const [idGasto, setIdGasto] = useState('');
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  const [informacion, setInformacion] = useState('');
  const [editable, setEditable] = useState(false);

  const handleEliminar = () => {

    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que deseas eliminar este gasto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => handleConfirmarEliminar() },
      ]
    );
  };

  const handleConfirmarEliminar = () => {

    Alert.alert('Gasto eliminado con éxito');

  };

  const handleEditar = () => {

    setEditable(true);
  };

  const handleGuardarEdicion = () => {

    setEditable(false);
    Alert.alert('Edición del gasto guardada con éxito');
  };

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

      {mostrarInformacion && (
        <View>
          <Text>{informacion}</Text>
          {editable ? (
            <>
              <TextInput
                placeholder="Nuevo Monto"
              />
              <Button title="Guardar Edición" onPress={handleGuardarEdicion} />
            </>
          ) : (
            <>
              <Button title="Eliminar" onPress={handleEliminar} />
              <Button title="Editar" onPress={handleEditar} />
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default Screen3;
