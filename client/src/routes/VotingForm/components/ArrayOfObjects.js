import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import ArrayItem from './ArrayItem';
import { YellowButton } from './styled';

const ArrayOfObjects = ({
  array, fields, onChange, addItemToArray, buttonText,
}) => (
  <Fragment>
    <Table>
      <TableBody>
        {array.map((item, i) => (
          <ArrayItem
            onChange={onChange(i)}
            fields={fields}
            item={item}
            index={i}
            key={i}
          />
        ))}
      </TableBody>
    </Table>
    <YellowButton
      style={{ margin: '10px 0' }}
      color='primary'
      onClick={addItemToArray}
    >
      {buttonText}
    </YellowButton>
  </Fragment>
);

export default ArrayOfObjects;
