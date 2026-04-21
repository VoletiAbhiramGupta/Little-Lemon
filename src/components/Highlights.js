import SpecialCard from './SpecialCard';
import './Highlights.css';
import greekSalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.jpg';
import lemonDessert from '../images/lemon dessert.jpg';

const highlights = [
    {
        id: 1,
        image: greekSalad,
        title: 'Greek Salad',
        price: "$12.99",
        description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        id: 2,
        image: bruchetta,
        title: 'Bruschetta',
        price: "$9.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with a delicious tomato and basil mixture."
    },
    {
        id: 3,
        image: lemonDessert,
        title: 'Lemon Dessert',
        price: "$10.99",
        description: "This comes from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
];

function Highlights() {
    return (
        <div className="highlights-section">
            <div className='highlights-header'>
                <h1>This Week's Specials!</h1>
                <button className='highlights-button'>Online Menu</button>
            </div>
            <div className="special-card-section">
                {highlights.map(highlight => (
                    <SpecialCard
                        key={highlight.id}
                        image={highlight.image}
                        title={highlight.title}
                        price={highlight.price}
                        description={highlight.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Highlights;