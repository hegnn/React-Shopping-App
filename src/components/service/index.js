
export const fetchProducts = async(id) => 
    ( await (await fetch(`https://fakestoreapi.com/products/${id}`)).json())

    
    
    