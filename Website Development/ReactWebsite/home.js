import React from 'react';
import raccoon from "./images/raccoon1.jpg";

function Home(props) { // Start with Capital
        return <body>
        <header>
            <h1> Raccoon Lovers of California</h1>
        </header>
        
        <main>
            <figure>
                <img src={raccoon}
                    alt="A gaggle of raccoons"
                    title="Raccoons." />
                <figcaption> Our favorite little pets.</figcaption>
            </figure>
            <div>
                <h2> Why we do what we do </h2>
                <p> Here is where we explain why we love raccoons and why you should too </p>  
                <h2> How to get started </h2>
                <p> Here we explain the procedures and items needed to begin this hobby </p>
                <h2> RACCOONS </h2>
                <p> HERE IS WHERE WE DISPLAY IMAGES OF OUR FAVORITE RACCOONS &#x1f99d; </p>
            </div>
        </main>
        <footer> © 2020 Kiernan Soriano </footer>
    </body>
}

export default Home;