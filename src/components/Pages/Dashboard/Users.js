import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';


const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr
                                key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td><button class="btn btn-xs">Make Admin</button></td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;