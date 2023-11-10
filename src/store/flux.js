/* 
*
* getStore: devuelve un objeto con todos los atributos del objeto store
* getActions: devuelve un objeto con todos los atributos del objeto actions
* setStore: permite actualizar cualquier atributo del objeto store
*
*/
import { toast } from 'react-toastify';

const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            // datos a utilizar
            apiURL: 'http://127.0.0.1:5000',
            currentUser: null,
            error: null,
            username: '',
            password: '',
            result: 0,
        },
        actions: {
            // funciones a utilizar
            saludar: () => {
                const store = getStore();
                console.log(store.username);

                const result = getActions().sumar(10, 10);
                console.log(result)

                // actualizamos el atributo result del objeto store
                setStore({
                    result: result
                })

                //console.log(getStore().currentUser)

            },
            sumar: (a, b) => a + b,
            handleChange: e => {
                const { name, value } = e.target;
                setStore({
                    [name]: value
                })
            },
            handleSubmitLogin: e => {
                e.preventDefault()
                const { username, password } = getStore()
                const { register } = getActions()
                register({ username, password }) // { username: username, password: password }
                console.log("Enviando Formulario")
            },
            login: (credentials) => {
                const { apiURL } = getStore();
                console.log(credentials)
                const url = `${apiURL}/api/login`;
                const options = {
                    method: 'POST',
                    body: JSON.stringify(credentials), //  { username: 'lrodriguez@4geeks.co', password: '123456' }
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                fetch(url, options)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => console.log(error))
            },
            register:  (credentials) => {
                const { apiURL } = getStore();
                //console.log(credentials)
                const url = `${apiURL}/api/register`;
                const options = {
                    method: 'POST',
                    body: JSON.stringify(credentials), //  { username: 'lrodriguez@4geeks.co', password: '123456' }
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                fetch(url, options)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        if(data.msg){
                            toast.error(data.msg)
                        }else{
                            setStore({
                                currentUser: data
                            })
                            toast.success(data.success)
                        }

                    })
                    .catch(error => console.log(error))
            },
        }
    }
}

export default getState