import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErrors:false,
        }
    }

    static getDerivedStateFromError = (error) => {
        return {hasErrors:true}
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({error,errorInfo})
        console.log(error, errorInfo)
    }


    render() {
        if (this.state.hasErrors) return <h2>Something went wrong</h2>
        return this.props.children
    }
}
