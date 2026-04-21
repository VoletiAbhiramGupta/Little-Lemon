import './Testimonials.css';
import TestimonialCard from './TestimonialCard';
import { useEffect, useState } from 'react';

function Testimonials() {
    const [customers, setcustomers] = useState([]);

    useEffect(() => {
        const fetchusers = async() => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=4');
                const data = await response.json();
                setcustomers(data.results);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };
        fetchusers();
    }, []);

    return (
        <div className="testimonials">
            <div className="testimonials-header">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonials-container">
                {customers.map(customer => (
                    <TestimonialCard key={customer.login.uuid}
                        image={customer.picture.medium}
                        name={`${customer.name.first} ${customer.name.last}`}
                        rating={Math.floor(Math.random() * 2) + 4} // Random rating between 4 and 5
                        review="Hey, I'm from randomuser.me and this is a sample review. Lorum ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                ))}
            </div>
        </div>

    );
}

export default Testimonials;