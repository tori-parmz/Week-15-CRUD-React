import NewItemForm from "./NewItemForm";
import { Button } from "react-bootstrap";
import { deleteCategory } from "./MenuApi";


export function MenuCategory(props){

    let {categoryName, categoryId, items, itemName, itemPrice} = props;

    return(
        <div id={`menu-category-${categoryId}`}>
            <h3>{categoryName} <span mb-2><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span></h3>
                <h4 > {itemName}..............{"$"+itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
            </span>
                 </h4>
                {/* {props.menuItems.map((menuItem, index) => {
            return {...menuItem}  */}
            
            
        {/* })} */}
                {/* map menu items here:
                {itemName}...............{"$"+itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span> */}
                <br></br>
                <br></br>
                <NewItemForm />

        </div>
    
    )
    
}

//map the rooms here

{/* <h3>{menuCategoryName} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span></h3>
                {itemName}...................{"$", itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span>
                <br></br>
                <br></br>
                <NewItemForm /> */}

//include the modal for new items