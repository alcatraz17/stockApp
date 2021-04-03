import React, { useEffect, useState } from 'react';

import API from '../../utils/api';
import "./Table.css";

const Table = (props) => {
    const [stockData, setStockData] = useState([]);
    const [inputData, setInputData] = useState("");
    console.log(inputData);


    useEffect(() => {
        fetchData();
    }, [inputData]);

    const fetchData = async () => {
        try {
            const { data } = await API.get(`/search?name=${inputData}`);
            setStockData(data);
        } catch (error) {
            console.error(error);
        }
    }

    const searchEvent = (event) => {
        setInputData(event.target.value);
      };

    return (
        <div className="dataTable">
            <input type="text" id="myInput" onChange={searchEvent} placeholder="Search by Company Name" />

            <table id="myTable">
                <tr id="tableHeader">
                    <th >COMPANY NAME</th>
                    <th>SYMBOL</th>
                    <th>Market CAP</th>
                    <th>Action</th>
                    <th>CURRENT PRICE</th>
                </tr>
                {stockData.map(({ name, symbol, marketCap, currentPrice}) => {
                    return (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{symbol}</td>
                            <td>{marketCap}</td>
                            <button>View</button>
                            <td>{currentPrice}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Table;
