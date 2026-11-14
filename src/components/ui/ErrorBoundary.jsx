import React from 'react';
import { Btn, MonoLabel } from '../mono/ui';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper px-5 font-inter text-ink">
        <div className="max-w-md text-center">
          <MonoLabel>Error</MonoLabel>
          <h1 className="mt-5 text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.04em]">
            Something went wrong.
          </h1>
          <p className="mt-4 text-[14px] leading-relaxed text-ink-3">
            We hit an unexpected error. Try again, or head back to the home page.
          </p>
          <div className="mt-8 flex justify-center gap-2.5">
            <Btn onClick={() => window.location.reload()}>Try again</Btn>
            <Btn variant="light" onClick={() => (window.location.href = '/')}>
              Go home
            </Btn>
          </div>
          {import.meta.env.DEV && this.state.error && (
            <pre className="mt-8 overflow-auto bg-white p-4 text-left font-mono text-[11px] text-ink-2">
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
