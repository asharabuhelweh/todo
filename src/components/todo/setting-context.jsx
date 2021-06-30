import React , {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = (props) =>{

    const [itemPerPage , setItemPerPage] = useState (4);
    const [taskSum, setTaskSum] = useState(0);

    const setting = {
        itemPerPage,
        setItemPerPage,

        taskSum,
        setTaskSum,
    }
    return (
        <SettingsContext.Provider value={setting}>

            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsProvider;