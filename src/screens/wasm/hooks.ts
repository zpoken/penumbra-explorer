import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { WasmState } from './types';
import { fakeContracts } from './fakeData';

const itemDefault = {
  data: {},
  count: 0,
  loading: true,
};

const PAGE_LIMIT = 10;

export const useWasm = () => {
  const [state, setState] = useState<WasmState>({
    loading: true,
    exists: true,
    contracts: itemDefault,
  });

  // preload fake data
  useEffect(() => {
    const paginatedData = createPagination(fakeContracts);

    handleSetState({
      loading: false,
      contracts: {
        count: fakeContracts.length,
        loading: false,
        data: paginatedData,
      },
    });
  }, []);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const createPagination = (data: any[]) => {
    const pages = {};
    data.forEach((x, i) => {
      const selectedKey = Math.floor(i / PAGE_LIMIT);
      pages[selectedKey] = pages[selectedKey] || [];
      pages[selectedKey].push(x);
    });
    return pages;
  };

  return {
    state,
  };
};
