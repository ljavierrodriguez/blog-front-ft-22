 /* 
 *
 * getStore: devuelve un objeto con todos los atributos del objeto store
 * getActions: devuelve un objeto con todos los atributos del objeto actions
 * setStore: permite actualizar cualquier atributo del objeto store
 *
 */
const getState = ({ getStore, getActions, setStore }) => {
    
    return {
        store: {
            // datos a utilizar
            currentUser: null,
            error: null,
            username: '',
            password: ''
        },
        actions: {
            // funciones a utilizar
        }
    }
}

export default getState