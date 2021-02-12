import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'umi';
import { parse } from 'qs';
import type { IParseOptions } from 'qs';

import { createPaginationQuery } from 'services/helpers';

/**
 * Helper hook function to get query parameters from query string
 * @return {string} search - history.location.search
 * @return {IParseOptions & { decoder?: never }} options - query parse options
 * @return {boolean}
 */
export function useQuery(options?: IParseOptions & { decoder?: never }): API.RequestParams {
  const { location } = useHistory();
  const [query, setQuery] = useState<API.RequestParams>({} as API.RequestParams);
  const optionsRef = useRef(options);
  useEffect(() => {
    const parsed = parse(location.search, {
      ignoreQueryPrefix: true,
      ...(optionsRef.current || {}),
    }) as API.RequestParams;
    setQuery(createPaginationQuery(parsed));
  }, [location.search, options]);
  return query;
}
