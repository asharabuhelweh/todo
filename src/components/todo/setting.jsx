import React , {useContext} from 'react';
import {SettingsContext} from './setting-context';

const ContentSetting = (props) =>{
    const context   = useContext (SettingsContext)

    const itemPerPageHandler = e =>{
        context.setItemPerPage (parseInt (e.target.value))
    }
    return (
        <React.Fragment>
            <h2>Settings</h2>
            <form>
            {/* <input type="switch" name="complete" /> 
            <input type="switch" name="pending" /> 

            <input type="switch" name="difficultySort" />  */}
            <label name="itemPerPage"> Items per page </label>
            <input type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler}/><br/>
         
            {/* <button type="submit"></button> */}
            </form>
        </React.Fragment>
    )
}

export default ContentSetting;