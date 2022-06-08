import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { WasmState } from './types';

export const useWasmContractDetails = () => {
  const [state, setState] = useState<WasmState>({
    loading: true,
    exists: true,
    contract: {
      name: '',
      contract: '',
      contractAddress: '',
      hash: '',
      creator: '',
      executes: 0,
      createdAt: '',
      lastExecuted: '',
    },
  });

  // preload fake data
  useEffect(() => {
    handleSetState({
      loading: false,
    });
  }, []);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  return {
    state,
  };
};
