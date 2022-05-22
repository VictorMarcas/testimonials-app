import { useState, useEffect } from 'react';
import Header from '../layouts/Header.jsx';
import ButtonAdded from '../ui/ButtonAdded';
import Card from '../ui/Card.jsx';
import { getUsers } from '../services/services.js';

const Index = () => {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        getUsers()
            .then(([users, error]) => {
                if(!error) setUsers(users);
            });
    }, []);

    return (
        <>
            <Header title="Testimonials" children={<ButtonAdded />}></Header>
            <section className='grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6 py-8'>
                {users.map((user) => {
                    return (
                        <Card 
                            fullname={`${user.name} ${user.last_name}`} 
                            profession={user.profession} 
                            avatar={user.avatar}
                            companyLogo={user.company_logo}
                            key={user.id} />
                    )
                }) }
            </section>
        </>
    )
}

export default Index;