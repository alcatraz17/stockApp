import React, { useEffect, useState } from 'react';


import API from '../../utils/api';
import "./Table.css";

const Table = (props) => {
    const [stockData, setStockData] = useState([]);
    const [inputData, setInputData] = useState("");
    const [paginationData, setPaginationData] = useState({});
    const [currentPage, setcurrentPage] = useState(1);
    // console.log(inputData);


    useEffect(() => {
        fetchData();
    }, [inputData, currentPage]);

    const fetchData = async () => {
        try {
            const { data } = await API.get(`/search?name=${inputData}&page=${currentPage}`);
            setcurrentPage(data.page);
            setPaginationData(data);
            setStockData(data.docs);
        } catch (error) {
            console.error(error);
        }
    }

    const searchEvent = (event) => {
        setInputData(event.target.value);
    };

    const changePage = (isNext) => {
        setcurrentPage(isNext ? currentPage + 1 : currentPage - 1);
    }

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
                {stockData.map(({ name, symbol, marketCap, currentPrice }) => {
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Page {currentPage} of {paginationData.totalPages}</td>
                    <td><div>
                        {paginationData.hasPrevPage && <button onClick={() => changePage(false)}>{`<`}</button>}
                        {`    `}
                        {paginationData.hasNextPage && <button onClick={() => changePage(true)}>{`>`}</button>}
                    </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Table;
