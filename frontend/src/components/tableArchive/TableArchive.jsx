import './TableArchive.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const  TableArchive = () => {
    const [datos, setDatos] = useState([]);

    useEffect( () => {
        getAllDatos();
    }, [])

    const getAllDatos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/files/get');
            setDatos(response.data);
            console.log("datos rescatados exitosamente")
        } catch (error) {
            console.log('Error al obtener datos:', error);
        }
        
    }

    return (
        <div className='tabla'> 
            <h1>Lista de Datos</h1>
            <table>
                <thead>
                    <tr>
                        <th>FECHA_CREACION</th>
                        <th>COD_TIPO_SOL</th>
                        <th>TIPO_SOLICITUD</th>
                        <th>COD_TIPO</th>
                        <th>TIPO_TRABAJO</th>
                        <th>COD_PLAN_COMERCIAL</th>
                        <th>PLAN_COMERCIAL</th>
                        <th>COMPONENTE</th>
                        <th>CLASE_SERVICIO</th>
                        <th>AREA_SERVICIO</th>
                        <th>UBICACION</th>
                        <th>PRODUCTO</th>
                        <th>ORDEN</th>
                        <th>DESC_SERVICIO</th>
                        <th>NUMERO_SERVICIO</th>
                        <th>ESTADO_COMPONENTE</th>
                        <th>NAP</th>
                        <th>POSICION</th>
                        <th>DESCRIPCION</th>
                        <th>CLIENTE</th>
                        <th>DIRECCION</th>
                        <th>COD_ESTADO_OT</th>
                        <th>UNIDAD_OPERATIVA</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                        <tr key={dato.id}>
                            <td>{dato.fecha_CREACION}</td>
                            <td>{dato.cod_TIPO_SOL}</td>
                            <td>{dato.tipo_SOLICITUD}</td>
                            <td>{dato.cod_TIPO}</td>
                            <td>{dato.tipo_TRABAJO}</td>
                            <td>{dato.cod_PLAN_COMERCIAL}</td>
                            <td>{dato.plan_COMERCIAL}</td>
                            <td>{dato.componente}</td>
                            <td>{dato.clase_SERVICIO}</td>
                            <td>{dato.area_SERVICIO}</td>
                            <td>{dato.ubicacion}</td>
                            <td>{dato.producto}</td>
                            <td>{dato.orden}</td>
                            <td>{dato.desc_SERVICIO}</td>
                            <td>{dato.numero_SERVICIO}</td>
                            <td>{dato.estado_COMPONENTE}</td>
                            <td>{dato.nap}</td>
                            <td>{dato.posicion}</td>
                            <td>{dato.descripcion}</td>
                            <td>{dato.cliente}</td>
                            <td>{dato.direccion}</td>
                            <td>{dato.cod_ESTADO_OT}</td>
                            <td>{dato.unidad_OPERATIVA}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}