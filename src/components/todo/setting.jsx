import React, { useContext } from 'react';
import { SettingsContext } from './setting-context';
import { Button } from 'react-bootstrap';
import { Form,Card } from 'react-bootstrap';

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
            <Card style= {{'position':'relative', 'left':'90px', 'marginTop':'30px','marginBottom':'30px'}}>
    <Card.Header as="h3">Setting</Card.Header>
      <Card.Body>
            <Form >

                <label name="itemPerPage"> Items Per Page </label>
                <input type="number" id="itemPerPage" name="itemPerPage" onChange={itemPerPageHandler} /><br />


                <Button variant="outline-primary" style={{ 'width': '100%', 'text-align': 'center', }} onClick={context.toggleHandler} >{context.complete ? 'Show Tasks' : 'Hide Completed Tasks'}</Button >
                <Form.Label name="Sort By"> Sort Tasks By:
                    <select name="Sort By" title="Sort By" onChange={sortByHandler}>
                        <option value="assignee" >Assignee</option>
                        <option value="difficulty" >Difficulty</option>
                        <option value="text" >Text</option>
                    </select>
                </Form.Label>
            </Form>
            </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default ContentSetting;