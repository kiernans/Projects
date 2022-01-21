import React from 'react';

function Membership(props) { // Start with Capital
        return (
        <><header>
        <h1> Create an Account </h1>
        </header>
        <main>
        <form id="Apply">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" minlength="1"
                    maxlength="20" required />

        <label for="email">Email: </label>
        <input type="email" id="email" name="email" minlength="1" 
                    maxlength="50" required />

        <label for="password">Password: </label>
                <input type="password" id="password" name="password" minlength="1" 
                            maxlength="20" required />
        
        <label for="choice">Favorite Raccoon Trait:</label>

        <select name="choice" id="choice">
            <option value="Chubby">Chubby</option>
            <option value="Fluffy">Fluffy</option>
            <option value="Conniving">Conniving</option>
            <option value="Friendly">Friendly</option>
        </select>

        <label for="comments">How did you hear about us? </label>
        <textarea id="comments" name="comments" cols="30" rows="6"></textarea>

        <button type="submit" id="button">Create Account</button>
        </form>
        </main></>
        );
}

export default Membership;