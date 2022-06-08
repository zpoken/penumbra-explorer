import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  LoadAndExist,
} from '@components';
import { useWasm } from './hooks';
import { Contracts } from './components';
import { useStyles } from './styles';

const Wasm = () => {
  const { t } = useTranslation('wasm');
  const { state } = useWasm();
  const classes = useStyles();
  return (
    <>
      <Layout navTitle={t('wasmContracts')} className={classes.root}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <Contracts contracts={state.contracts} />
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Wasm;
