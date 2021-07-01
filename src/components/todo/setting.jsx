import React, { useContext } from 'react';
import { SettingsContext } from './setting-context';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const ContentSetting = (props) => {
    const context = useContext(SettingsContext)

    const itemPerPageHandler = e => {
        context.setItemPerPage(parseInt(e.target.value))
    }

    const sortByHandler = e => {
        context.setSortBy(e.target.value.toString())
    }
    return (
        <React.Fragment>
            <h2 style= {{'position':'relative', 'left':'70px','padding-top':'30px','textAlign':'center'}}>Setting</h2>
            <Form style= {{'position':'relative', 'left':'70px','textAlign':'center'}}>

                <label name="itemPerPage"> Items per page </label>
                <input type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler} /><br />


                <Button variant="outline-primary" style={{ 'width': '100%', 'text-align': 'center', }} onClick={context.toggleHandler} >{context.complete ? 'Show Tasks' : 'Hide Completed Tasks'}</Button >
                <Form.Label name="Sort By"> Sort Tasks By :
                    <select name="Sort By" title="Sort By" onChange={sortByHandler}>
                        <option value="assignee" >assignee</option>
                        <option value="difficulty" >difficulty</option>
                        <option value="text" >text</option>
                    </select>
                </Form.Label>
            </Form>
        </React.Fragment>
    )
}

export default ContentSetting;