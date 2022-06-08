import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dayjs, { formatDayJs } from '@utils/dayjs';
import numeral from 'numeral';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import {
  AvatarName,
} from '@components';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { WASM_DETAILS } from '@utils/go_to_page';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { columns } from './utils';
import { ItemType } from '../../types';
import { Verified } from '..';

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
      verified: (
        <Verified verified={x.verified} />
      ),
      id: x.id,
      contract: x.contract,
      hash: getMiddleEllipsis(x.hash, {
        beginning: 15, ending: 15,
      }),
      creator: (
        <AvatarName
          name={getMiddleEllipsis(x.creator.address, {
            beginning: 10, ending: 15,
          })}
          address={x.creator.address}
          imageUrl={x.creator.imageUrl}
        />
      ),
      version: x.version,
      instantiates: numeral(x.instantiates).format('0,0'),
      createdAt: formatDayJs(dayjs.utc(x.createdAt), dateFormat),
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
