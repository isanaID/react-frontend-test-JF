import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const index = ({ user }: any) => {
    return (
        <div className='d-flex justify-content-center'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Registered Date</th>
                    </tr>
                </thead>
                <tbody>
                    { user.map ((user:any, index:any) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.registered.age}</td>
                                <td>{user.registered.date}</td>
                            </tr>
                
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default index;