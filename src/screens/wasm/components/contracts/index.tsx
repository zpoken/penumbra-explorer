import React from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import dynamic from 'next/dynamic';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  usePagination,
  useScreenSize,
} from '@hooks';
import {
  Pagination,
  NoData,
  Loading,
  Box,
} from '@components';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';
import { ContractsType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Contracts: React.FC<{
  contracts: ContractsType,
} & ComponentDefault> = (props) => {
  const { t } = useTranslation('wasm');
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination({});

  const pageItems = R.pathOr([], ['contracts', 'data', page], props);

  const dataProfiles = useProfilesRecoil(pageItems.map((x) => x.creator));

  const mergedDataWithProfiles = pageItems.map((x, i) => {
    return ({
      ...x,
      creator: dataProfiles[i],
    });
  });

  const items = mergedDataWithProfiles;

  let component = null;

  if (props.contracts.loading) {
    component = <Loading />;
  } else if (!items.length) {
    component = <NoData />;
  } else if (isDesktop) {
    component = <Desktop items={items} />;
  } else {
    component = <Mobile items={items} />;
  }

  return (
    <Box className={classnames(props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('contracts')}
      </Typography>
      {component}
      <Pagination
        className={classes.paginate}
        total={props.contracts.count}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Contracts;
