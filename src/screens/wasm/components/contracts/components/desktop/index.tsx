import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import numeral from 'numeral';
import Link from 'next/link';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import {
  AvatarName,
} from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  WASM_CONTRACT_DETAILS,
  TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { columns } from './utils';
import { ItemType } from '../../types';

const Desktop: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({
  className,
  items,
}) => {
  const { t } = useTranslation('wasm');
  const dateFormat = useRecoilValue(readDate);
  const formattedItems = items.map((x) => {
    return ({
      contractName: (
        <Link href={WASM_CONTRACT_DETAILS(x.contractAddress)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.name}
          </Typography>
        </Link>
      ),
      contract: x.contract,
      contractAddress: (
        <AvatarName
          name={getMiddleEllipsis(x.contractAddress, {
            beginning: 10, ending: 5,
          })}
          address={x.contractAddress}
          href={WASM_CONTRACT_DETAILS}
        />
      ),
      hash: (
        <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
          <Typography variant="body1" className="value" component="a">
            {getMiddleEllipsis(x.hash, {
              beginning: 7, ending: 7,
            })}
          </Typography>
        </Link>
      ),
      creator: (
        <AvatarName
          name={getMiddleEllipsis(x.creator.address, {
            beginning: 10, ending: 5,
          })}
          address={x.creator.address}
          imageUrl={x.creator.imageUrl}
        />
      ),
      executes: numeral(x.executes).format('0,0'),
      initiatedAt: formatDayJs(dayjs.utc(x.createdAt), dateFormat),
      lastExecuted: formatDayJs(dayjs.utc(x.lastExecuted), dateFormat),
    });
  });

  return (
    <div className={classnames(className)}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{ width: `${column.width}%` }}
                >
                  {t(column.key)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedItems.map((row, i) => (
            <TableRow key={`holders-row-${i}`}>
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`holders-row-${i}-${column.key}`}
                    align={column.align}
                    style={{ width: `${column.width}%` }}
                  >
                    {row[column.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  );
};

export default Desktop;
