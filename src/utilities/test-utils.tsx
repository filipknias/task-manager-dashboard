import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ReactElement, ComponentType } from "react";
import { BrowserRouter, BrowserRouterProps } from "react-router";

type CustomOptions = RenderOptions & {
  router: BrowserRouterProps;
}

const customRender = (ui: ReactElement, options?: CustomOptions) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <BrowserRouter {...options?.router}>
            {children}
        </BrowserRouter>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...options });
}

export * from "@testing-library/react";
export { customRender as render };