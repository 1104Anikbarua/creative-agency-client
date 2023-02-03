import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useToken = (user) => {
    // console.log(user)
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/v1/exist/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(response => response.json())

                .then(data => {
                    console.log(data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(data)
                })
        }
    }, [user])

    return [token];
};

export default useToken;