import React from 'react';
import { Button } from 'reactstrap';

function CategoryButton(props) {
    return (
            <Button outline color="primary" size="sm" className="mr-2 mb-1" id={props.id} onClick={props.onClickCategory}>{props.id}</Button>
    )
}

export default CategoryButton;