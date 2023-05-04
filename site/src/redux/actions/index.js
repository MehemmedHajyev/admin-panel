import { Types } from "../types"
import { Categories } from "../../const/data"
import domainFinder from "../../api/api"
import NotificationSet from "../../utils/notification"

// export const testAction = () => {
//     return {
//         type: TYPE,
//         payload: 'test 2'
//     }
// }




export const getCategory = () => {
    return {
        type: Types.GET_CATEGORY,
        payload: {
            categories:Categories
        }
    }
}



export const getProduct = () => async (dispatch) => {
    await domainFinder.get('/products').then((response)=>{
        dispatch({
            type: Types.GET_PRODUCT,
            payload: {
                products:  response.data
            }
        })
    }).catch((error)=>{
        dispatch({
            type: Types.ERROR_PRODUCT,
            payload: {
               message:error.response.message
            }
        })
    })
}


export const addProduct = (product) => async (dispatch) => {
    await domainFinder.post('/products' , product).then((response)=>{
        // notification.info({
        //     message:'Successfully created',
        //     icon:<SmileOutlined /> 
        // });
        NotificationSet('Successfully created' , 'success')
        dispatch(getProduct())
    }).catch((error)=>{
        dispatch({
            type: Types.ERROR_PRODUCT,
            payload: {
               message:error.response.message
            }
        })
    })
}



export const deleteProduct = (id) => async (dispatch) =>  {
    await domainFinder.delete(`/products/${id}`).then((response)=>{
        dispatch(getProduct())

        NotificationSet('Successfully deleted' , 'success')

        // notification.info({
        //     message:'Successfully deleted',
        //     icon:<SmileOutlined /> 
        // });
    }).catch((error)=>{
        NotificationSet('problem var' , 'error' , error.response.message)
        dispatch({
            type: Types.ERROR_PRODUCT,
            payload: {
               message:error.response.message
            }
        })
    })
}


export const editProduct = (product) => async (dispatch) => {
    await domainFinder.put(`/products/${product.id}` , product).then((response)=>{
        dispatch(getProduct())

        NotificationSet(`Successfully edited ${response.data.name}` , 'success')


        // notification.info({
        //     message:`Successfully edited ${response.data.name}`,
        //     icon:<SmileOutlined /> 
        // });
    }).catch((error)=>{
        dispatch({
            type: Types.ERROR_PRODUCT,
            payload: {
               message:error.response.message
            }
        })
    })
}




export const filterProducts = (category) => {
    let Products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : []

    
    let arr = [...Products]
    return {
        type: Types.GET_PRODUCT,
        payload: {
            products:arr.filter((product)=>{
                return product.tags.includes(category)
            })
        }
    }
}
