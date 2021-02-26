import React from 'react'
import Popover from 'react-bootstrap/Popover'

export default function BookInformation(props) {
    return (
        <div>
                <Popover id="popover-contained">
                    <Popover.Title as="h3">Book Details</Popover.Title>
                    <Popover.Content>
                        {props.description.description}
                    </Popover.Content>
                </Popover>
        </div>
    );
}