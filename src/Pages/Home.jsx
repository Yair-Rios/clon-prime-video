import React from 'react';
import '../Styles/Home.css';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

const Home = () => {
    return (
        <div className='container'>
            <h1>Soy la pagina principal</h1>
            {<Menu/>}
            {/* carrucel */}
            <main>
               <h3><strong>prime</strong> Amazon Originals y Exclusivos</h3>
                {/* carrucel card originales de amazon */}
               <h3><strong>prime</strong> Películas que te recomendamos </h3>
               <h3><strong>prime</strong> Basadas en libros </h3>
               <h3><strong>prime</strong> Las Películas más populares de Clon Video </h3>
               <h3><strong>prime</strong> Novedades en Películas </h3>
               <h3><strong>prime</strong> Avances para ti</h3>
               <h3><strong>prime</strong> Exitos de taquilla</h3>
               <h3><strong>prime</strong> Peliculas de acción y aventura</h3>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;