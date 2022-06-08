import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { WasmState } from './types';
import { fakeContract } from './fakeData';

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
      contract: fakeContract,
    });
  }, []);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  return {
    state,
  };
};
