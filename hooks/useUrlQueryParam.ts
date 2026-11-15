import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Keeps a string state value in sync with a URL query parameter (Pages Router).
 * Empty values remove the parameter from the URL.
 */
export const useUrlQueryParam = (
  name: string,
  defaultValue = ""
): readonly [string, (next: string | ((prev: string) => string)) => void] => {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    setValue(readQueryParam(router.query, name, defaultValue));
  }, [router.isReady, name, defaultValue]); // eslint-disable-line react-hooks/exhaustive-deps -- hydrate once when the router is ready

  useEffect(() => {
    const onRouteChangeComplete = (url: string) => {
      setValue(readParamFromUrl(url, name, defaultValue));
    };

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events, name, defaultValue]);

  const setParam = useCallback(
    (next: string | ((prev: string) => string)) => {
      const resolved =
        typeof next === "function" ? next(valueRef.current) : next;

      setValue(resolved);

      const query = { ...router.query };

      if (resolved === "" || resolved === defaultValue) {
        delete query[name];
      } else {
        query[name] = resolved;
      }

      void router.replace({ pathname: router.pathname, query }, undefined, {
        shallow: true,
      });
    },
    [router, name, defaultValue]
  );

  return [value, setParam] as const;
};

const readQueryParam = (
  query: ParsedUrlQuery,
  name: string,
  fallback: string
): string => {
  const value = query[name];

  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value) && typeof value[0] === "string") {
    return value[0];
  }

  return fallback;
};

const readParamFromUrl = (url: string, name: string, fallback: string): string =>
  new URL(url, window.location.origin).searchParams.get(name) ?? fallback;
