import React, { useState } from 'react';

export const SaveArchive = () => {

    const [archivo, setArchivo] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setArchivo(file);
    };

    const subirArchivo = async () => {
        const formData = new FormData();
        formData.append('archive', archivo);
        try {
            await fetch('http://localhost:8080/api/v1/files/save', {
                method: 'POST',
                body: formData,
            });
            alert('Archivo cargado con éxito.');
        } catch (error) {
            console.error('Error al cargar el archivo:', error.message);
            alert('Error al cargar el archivo.');
        }
    };

    return (
        <div>
            <h1>Carga de Archivos</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={subirArchivo}>Subir Archivo</button>
        </div>
    );
};

