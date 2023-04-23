import NewItemForm from "./NewItemForm";
import { MenuApi } from './MenuApi';


function MenuCategory(){

    return(
        <div id={`menu-category-${MenuCategory.id}`}>
            <h3>{menuCategoryName} <span mb-2><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span></h3>
                {/* map menu items here:
                {itemName}...............{"$"+itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span> */}
                <br></br>
                <br></br>
                <NewItemForm />

        </div>
    
    )
    
}
//use API verb methods here to pull in data

//map the rooms here

{/* <h3>{menuCategoryName} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span></h3>
                {itemName}...................{"$", itemPrice} <span><Button variant='danger'><i className="bi bi-trash3"></i></Button>
                </span>
                <br></br>
                <br></br>
                <NewItemForm /> */}

//include the modal for new items