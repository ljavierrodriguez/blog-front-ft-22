import { createContext, useState } from "react";
import getState from "./flux";

export const Context = createContext(null)

const injectContext = Component => {
    const StoreWrapper = props => {

        const [state, setState] = useState(getState({ 
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions}
            }) 
        }))


        return (
            <Context.Provider value={state}>
                <Component {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper
}

export default injectContext