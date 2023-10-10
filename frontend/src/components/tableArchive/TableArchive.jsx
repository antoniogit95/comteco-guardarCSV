import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TableArchive.css'

export const  TableArchive = () => {
    const [datos, setDatos] = useState([]);
    const [rescatarDatos, setRescatarDatos] = useState([])
    const [select, setSelectd] = useState("");
    const [buscar, setBuscar] = useState("");

    useEffect( () => {
        getAllDatos();
    }, [])

    const getAllDatos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/files/get');
            setDatos(response.data);
            setRescatarDatos(response.data);
            console.log("datos rescatados exitosamente")
        } catch (error) {
            console.log('Error al obtener datos:', error);
        }
        
    }

    const filtrar = (terminoBusqueda, busquedaPor) => {
        console.log(terminoBusqueda +" - "+ busquedaPor + "mostrando algo")
        if(terminoBusqueda !== ''){
            var resultadoBusqueda = rescatarDatos.filter((elemento) => {
                console.log(elemento.cliente.toString + "imprimir algo de prueba")
                if(elemento.cliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                    return elemento;
                }
            });
            setDatos(resultadoBusqueda);
        }
    }
    
    return (
        <div>
            <h1>Lista de Datos</h1>
            <input 
                type='text'
                id='buscar'
                name='buscar'
                placeholder='escribe tu elemento de busqueda'
                value={buscar}
                onChange={ (e) => setBuscar(e.target.value) }
            ></input>
            <select 
                value={select}
                onChange={(e) => setSelectd(e.target.value)}
                >
                <option value = '' >seleccione un elemnto</option>
                <option value = 'fecha_creacion' >FECHA_CREACION</option>
                <option value = 'cod_tipo_sol'>COD_TIPO_SOL</option>
                <option value = 'tipo_solicitud'>TIPO_SOLICITUD</option>
                <option value = 'cod_tipo'>COD_TIPO</option>
                <option value = 'tipo_trabajo'>TIPO_TRABAJO</option>
                <option value = 'cod_plan_comercial'>COD_PLAN_COMERCIAL</option>
                <option value = 'plan_comercial'>PLAN_COMERCIAL</option>
                <option value = 'componente'>COMPONENTE</option>
                <option value = 'clase_servicio'>CLASE_SERVICIO</option>
                <option value = 'area_servicio'>AREA_SERVICIO</option>
                <option value = 'ubicacion'>UBICACION</option>
                <option value = 'producto'>PRODUCTO</option>
                <option value = 'orden'>ORDEN</option>
                <option value = 'desc_servicio'>DESC_SERVICIO</option>
                <option value = 'numero_servicio'>NUMERO_SERVICIO</option>
                <option value = 'estado_componente'>ESTADO_COMPONENTE</option>
                <option value = 'nap'>NAP</option>
                <option value = 'posicion'>POSICION</option>
                <option value = 'descripcion'>DESCRIPCION</option>
                <option value = 'cliente'>CLIENTE</option>
                <option value = 'direccion'>DIRECCION</option>
                <option value = 'cod_estado_ot'>COD_ESTADO_OT</option>
                <option value = 'unidad_operativa'>UNIDAD_OPERATIVA</option>
            </select>
            <button onClick={ () => filtrar(buscar, select)}>Buscar</button>
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