import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

function ContentRowProducts(){

    // Estados
	const [ products, setProducts ] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [ users, setUsers ] = useState([]);
	const [ categories, setCategories ] = useState(0);

    // Lo que vendria a reemplazar a componentDidMount()
	useEffect( () => {
		fetch(`http://localhost:5000/api/products`)
			.then(response => response.json())
			.then(products => {
				setProducts(products.products.length);
				setCategories(products.categorie.length);
			})
			.catch(error => {
				console.error();
			})
         fetch(`http://localhost:5000/api/users`)
	 	.then(response => response.json())
	 	.then(users => {
	 		setUsers(users.users.length);			
	 	})
     	.catch(error => {
 		console.error();
	 	})
         fetch(`http://localhost:5000/api/products`)
			.then(response => response.json())
			.then(categories => {
				setCategories(categories.meta.categories);
			})
			.catch(error => {
				console.error();
			})
	 }, []);

    /* <!-- Movies in DB --> */

    let productsInDB = {
        title: 'Productos en DB',
        color: 'primary', 
        quantity: products,
        icon: 'fas fa-briefcase'
    }
    

    /* <!-- Total awards --> */

    let usersInDb = {
        title:'Usuarios en DB', 
        color:'success', 
        quantity: users,
        icon:'fas fa-users'
    }

    /* <!-- Actors quantity --> */

    let categoriesInDB = {
        title: 'Categorías en DB' ,
        color: 'warning',
        quantity: categories,
        icon: 'fad fa-folder-open'
    }

    let cartProps = [productsInDB, usersInDb, categoriesInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (prop, i) => {

                return <SmallCard {...prop} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;