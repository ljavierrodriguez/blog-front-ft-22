import React, { useContext, useEffect } from 'react'
import { Context } from '../store/AppContext'

const Profile = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        if(store.currentUser !== null) actions.getProfile();
    }, [store.currentUser])

    return (
        <>
            <div>Profile</div>
            <p>Name: {store?.profile?.name}</p>
            <p>Lastname: {store?.profile?.lastname}</p>
        </>
    )
}

export default Profile