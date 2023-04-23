import { useState, useEffect } from "react";


export function MenuApi() {
    const [menuCategories, setMenuCategories] = useState([]);

    const menuApi = 'https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories'
    
    function getCategories () {
        fetch(menuApi)
        .then(res => res.json())
        .then((data) =>setMenuCategories(data))
        
    
    }

    useEffect (() => {
        getCategories()
    }, [])

    function updateCategory(menuCategory) {
        fetch(`${menuApi}/${menuCategory.id}`, {
            method: 'PUT',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify(menuCategory)
        });
    }

    function deleteCategory(id) {
        fetch(menuApi, {
            method: 'DELETE',

            // id on end of
            // ids are unique and handled by API
            // take a parameter of id, then put the parameter to the end of the URL
            // "menuApi"


        })
    }

    // function postCategory() {
    //     fetch(menuApi, {
    //         //options
    //         method: 'POST',
    //         body: JSON.stringify({
    //         name: ,
    //         menuItems: []
    //         }),
    //         headers: {'Content-Type': 'application/json'},
    
    //     })
    // }

}

