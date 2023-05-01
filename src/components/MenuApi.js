//export function MenuApi() {
    //const [menuCategories, setMenuCategories] = useState([]);
    
    export async function getCategories () {
        // fetch(menuApi)
        // .then(res => res.json())
        // .then((data) =>setMenuCategories(data))
        //option return data 
        try {
            //handle response
            const response = await fetch('https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories');
            console.log(response);
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.log(error);
        }
        
    
    }

    export async function getCategory(id) {
        // fetch(menuApi)
        // .then(res => res.json())
        // .then((data) =>setMenuCategories(data))
        //option return data 
        try {
            //handle response
            const response = await fetch('https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories'+`${id}`);
            console.log(response);
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.log(error);
        }
        
    
    }

    export async function updateCategory(menuCategory) {
        try {

            fetch(`'https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories'/${menuCategory.id}`, {
                method: 'PUT',
                headers: {
                 'Content-Type': 'application/json'
                },
                body: JSON.stringify(menuCategory)
            });

        } catch(error) {
            console.log(error);
        }
        
        
    }

    export async function deleteCategory(id) {
        try {
            const response = await fetch('https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories'+`${id}`, {
                method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

            // id on end of
            // ids are unique and handled by API
            // take a parameter of id, then put the parameter to the end of the URL
            // "menuApi"

    export async function postCategory(newCategoryData) {
        fetch('https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories', {
            //options
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategoryData)
           
        });
    }

//}

