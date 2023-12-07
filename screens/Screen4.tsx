import React from 'react';
import Informacion, { InformacionProps } from './Informacion';

const Screen4: React.FC = () => {

  const informacionProps: InformacionProps = {
    categoria: 'Comida',
    descripcion: 'Almuerzo',
  };

  return (
    <Informacion {...informacionProps} />
  );
};

export default Screen4;

