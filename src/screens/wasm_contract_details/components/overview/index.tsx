import React from 'react';
import numeral from 'numeral';
import dayjs, { formatDayJs } from '@utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useRecoilValue } from 'recoil';
import { useProfileRecoil } from '@recoil/profiles';
import { readDate } from '@recoil/settings';
import {
  BoxDetails,
  AvatarName,
} from '@components';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { TRANSACTION_DETAILS } from '@utils/go_to_page';
import { ContractType } from '../../types';

const Overview: React.FC<{overview: ContractType} & ComponentDefault> = (props, { className }) => {
  const creator = useProfileRecoil(props.overview.creator);
  const { t } = useTranslation('wasm');
  const dateFormat = useRecoilValue(readDate);

  return (
    <BoxDetails
      className={className}
      title={t('overview')}
      details={[
        {
          label: t('contractName'),
          detail: props.overview.name,
        },
        {
          label: t('contract'),
          detail: props.overview.contract,
        },
        {
          label: t('contractAddress'),
          detail: props.overview.contractAddress,
        },
        {
          label: t('hash'),
          detail: (
            <Link href={TRANSACTION_DETAILS(props.overview.hash)} passHref>
              <Typography variant="body1" className="value" component="a">
                {props.overview.hash}
              </Typography>
            </Link>
          ),
        },
        {
          label: t('creator'),
          detail: (
            <AvatarName
              address={props.overview.creator}
              imageUrl={creator.imageUrl}
              name={creator.name}
            />
          ),
        },
        {
          label: t('executes'),
          detail: numeral(props.overview.executes).format('0,0'),
        },
        {
          label: t('initiatedAt'),
          detail: formatDayJs(dayjs.utc(props.overview.createdAt), dateFormat),
        },
        {
          label: t('lastExecuted'),
          detail: formatDayJs(dayjs.utc(props.overview.lastExecuted), dateFormat),
        },
      ]}
    />
  );
};

export default Overview;
