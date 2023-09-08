import { createContext, useContext } from "react";

function assertContextExists(
  contextVal: unknown,
  msgOrCtx: string | React.Context<any>
): asserts contextVal {
  if (!contextVal) {
    throw typeof msgOrCtx === "string"
      ? new Error(msgOrCtx)
      : new Error(`${msgOrCtx.displayName} not found`);
  }
}

type ContextOf<T> = React.Context<T | undefined>;
type UseCtxFn<T> = () => T;
type Options = { assertCtxFn?: (v: unknown, msg: string) => void };

export const createContextAndHook = <CtxVal>(
  displayName: string,
  options?: Options
): [ContextOf<CtxVal>, UseCtxFn<CtxVal>] => {
  const { assertCtxFn = assertContextExists } = options || {};
  const Ctx = createContext<CtxVal | undefined>(undefined);
  Ctx.displayName = displayName;

  const useCtx = () => {
    const ctx = useContext(Ctx);
    assertCtxFn(ctx, `${displayName} not found`);
    return (ctx as any) as CtxVal;
  };

  return [Ctx, useCtx];
};
