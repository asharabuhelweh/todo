import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = (props) => {

    const [itemPerPage, setItemPerPage] = useState(4);
    const [taskSum, setTaskSum] = useState(0);
    const [complete, setComplete] = useState(true);
    const [sortBy, setSortBy] = useState('difficulty');
    function toggleHandler() {
        setComplete(complete => !complete)
    }

    const setting = {
        itemPerPage,
        setItemPerPage,
        taskSum,
        setTaskSum,
        complete,
        setComplete,
        toggleHandler,
        sortBy,
        setSortBy
    }
    return (
        <SettingsContext.Provider value={setting}>

            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsProvider;