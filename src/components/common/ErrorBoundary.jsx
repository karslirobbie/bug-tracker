import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ""
    };
  }

  static getDerivedStateFromError (error) {
    return { hasError: true };
  }

  componentDidCatch (error, errorInfo) {
    // log the error to an error reporting service
    this.setState({ error: error })
  }

  render () {
    if (this.state.hasError) {
      return <h1 className="text-gray-400">
        Something went wrong check the console for more information.
      </h1>;
    }

    return this.props.children;
  }
}