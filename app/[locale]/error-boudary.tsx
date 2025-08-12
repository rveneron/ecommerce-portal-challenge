'use client';
import { Component, ErrorInfo, ReactNode } from 'react';
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
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error & { digest?: string }) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error & { digest?: string }, errorInfo: ErrorInfo) {
    console.error('Server Error =>', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ServerErrorLayout />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
