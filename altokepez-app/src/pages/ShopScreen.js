import React, {useState} from 'react';
import './ShopScreen.scss';

const ShopScreen = props => {

    const [categories, setCategories] = useState(["Ofertas","Clásicos", "Combos", "A la Carta", "Bebidas", "Especiales"]);
    const [categorySelected, setCategorySelected] = useState(categories[0]);

    return (
        <section className="shopscreen">
            <div className="shopscreen__banner">
                <h2>Qué comemos hoy?</h2>
            </div>
            <div className="shopscreen__dropdown">
                <h4>{categorySelected}</h4><i class="fas fa-caret-down"></i>
                <ul className="shopscreen__dropdownItems">
                    {
                        categories.filter(item => item !== categorySelected).map(item => {
                            return <li key={item} className="shopscreen__dropdownItem">{item}</li>
                        })
                    }
                </ul>
            </div>
            <div className="shopscreen__products"></div>
        </section>
    );
}

export default ShopScreen;