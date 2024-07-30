import React from 'react'

export default function Parent(props) {
    console.log(props);
    if (props.auth === "admin") return props.children;
    return (
        <div>Not authorized to see children</div>
    ) 
}
