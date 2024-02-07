import { useState, createContext,useContext } from "react";



const NotificationContext = createContext({
    showNotification: ()=>{}
})

const Notification =({ notificationData}) =>{
    const color ={
        Felicidades : 'rgba(184, 135, 11, 0.473)',
        error: 'red'
    }

    const notificationStyle ={
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: color[notificationData.type],
        color: 'whitesmoke',
        borderRadius: 15,
        padding: 30,
    }
    return (
        <div style={notificationStyle} >
            <h2>{notificationData.type}</h2>
            <h3>{notificationData.text}</h3>
        </div>
    )
}

export const NotificationProvider = ({children}) =>{
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const showNotification= (type,text) => {
        setNotificationData({type,text})
        setTimeout(() => {
            setNotificationData({type, text:''})
        }, 3000);

    }

    return(
        <NotificationContext.Provider value={{ showNotification }}>
            {notificationData.text && <Notification notificationData={notificationData}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification =()=>{
    return useContext(NotificationContext)
}