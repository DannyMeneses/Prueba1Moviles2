
import React from 'react';

export interface InformacionProps {
  categoria: string;
  descripcion: string;
}

const Informacion: React.FC<InformacionProps> = ({ categoria, descripcion }) => {
  return (
    <div>
      <p>Categoría: {categoria}</p>
      <p>Descripción: {descripcion}</p>
    </div>
  );
};

export default Informacion;
