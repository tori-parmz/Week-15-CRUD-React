import NewItemForm from "./NewItemForm";
import { Button } from "react-bootstrap";


export function MenuCategory(props){

  const menuApi = "https://64150cdae8fe5a3f3a143d74.mockapi.io/menuCategories";

    async function deleteCategory(id) {
        try {
            const response = await fetch(menuApi+`${id}`, {
                method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      }

    let {categoryName, categoryId, menuItems} = props;

    return(
        <div id={`menu-category-${categoryId}`}>
            <h3>{categoryName} <span mb-2><Button variant='danger'><i className="bi bi-trash3"></i></Button></span></h3>
            
            {/* {menuItems.map((menuItem, index) => {
            return {itemName}...............{"$"+itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span>}

                <br></br>
                <br></br>
                <NewItemForm key={index} /> } */}
            

         </div>
    
    )
    
}