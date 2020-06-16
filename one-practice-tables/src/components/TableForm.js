import React, { useState, useContext } from "react"
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Form
} from "reactstrap"
import { DataContext } from "../context/DataContext"
import { ADD_ITEM } from "../context/action.types"
import { v4 } from "uuid"

const TableForm = () => {

    const [itemString, setItemString] = useState("")
    const { dispatch } = useContext(DataContext)

    const handleSubmit = e => {
        e.preventDefault();
        if (itemString === "")
            return alert("Please enter a item")
        const item = {
            itemString,
            id: v4()
        }
        dispatch({
            type: ADD_ITEM,
            payload: item
        })
        setItemString("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" placeholder="Please fill this form" id="item" value={itemString} onChange={e => setItemString(e.target.value)} />
                    <InputGroupAddon addonType="prepend">
                        <Button color="primary">Add X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TableForm