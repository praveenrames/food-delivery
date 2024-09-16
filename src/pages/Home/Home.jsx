import React, { useState } from "react";
import AppDownload from '../../Components/AppDownload/AppDownload.jsx';
import Menu from '../../Components/ExploreMenu/Menu.jsx';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay.jsx';
import Header from '../../Components/Header/Header.jsx';
import './Home.css';

const Home = () => {
    const [category, setCategory] = useState('All');
    return (
        <div>
            <Header />
            <Menu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home;