/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/08/2023
 */

'use client';
import { Component, ReactNode, ErrorInfo } from 'react';
import ServerErrorLayout from '@/components/core/errors/server-error-layout';

type ErrorBoundaryProps = {
  children: ReactNode;
  error?: Error & { digest?: string };
  reset?: () => void;
  fallback: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error & { digest?: string };
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error & { digest?: string }) {
    // Update state so the next render will show the fallback UI

    return { hasError: true, error };
  }

  componentDidCatch(error: Error & { digest?: string }, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.error('Next.js Global Error =======:', { error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ServerErrorLayout />;
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
