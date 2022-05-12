import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '../Table';

const TableContainer = ({user} : any) => {
    const [current, setCurrent] = React.useState(1);
    const [paginatedData, setPaginatedData] = React.useState([]);
    const itemsPerPage = 10;
    let pagesNumber: any = [];
    for (let i = 1; i <= Math.ceil(user.users.length / itemsPerPage); i++) {
        pagesNumber.push(i);
    }

    const handleClick = (number: any) => {
        setCurrent(number);
        changePaginatedData(number);
    };

    const changePaginatedData = (index = current) => {
        pagesNumber = [];
        for (let i = 1; i <= Math.ceil(user.users.length / itemsPerPage); i++) {
            pagesNumber.push(i);
        }
        const indexOfLastUser = index * itemsPerPage;
        const indexOfFirstUser = indexOfLastUser - itemsPerPage;
        setPaginatedData(user.users.slice(indexOfFirstUser, indexOfLastUser));
    };

    React.useEffect(() => {
        setCurrent(1);
        changePaginatedData(1);
    }, [user]);

    return (
        <div>
            <Table user={paginatedData} current={current} />
            <div className='d-flex justify-content-center'>
                <ul className="pagination">
                    {pagesNumber.map((number: any) => {
                        return (
                            <li key={number} className={current === number ? "page-item active" : "page-item"}>
                                <a className="page-link" onClick={() => handleClick(number)}>
                                    {number}
                                </a>
                            </li>
                        );
                    }
                    )}
                </ul>
            </div>
        </div>
    );
}

export default TableContainer;