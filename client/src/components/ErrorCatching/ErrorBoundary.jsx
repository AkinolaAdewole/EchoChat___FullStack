import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });

    // You can also log the error or send it to a logging service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render a custom error message or UI
      return <div>Something went wrong. Please try again later.</div>;
    }
    // Render the child components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
