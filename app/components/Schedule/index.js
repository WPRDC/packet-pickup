/**
 *
 * Schedule
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedDate, FormattedMessage } from 'react-intl';
import Table from 'react-bootstrap/Table';
import messages from './messages';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DateCell = styled.td`
  display: table-cell;
  vertical-align: middle !important;
`;

function Schedule() {
  return (
    <Table bordered striped responsive>
      <caption>Pickup dates by grade level</caption>
      <thead>
        <th>
          <FormattedMessage {...messages.gradeLevel} />
        </th>
        <th>
          <FormattedMessage {...messages.distDay} />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <List>
              <li>Early Childhood Education (PreK & Early Head Start)</li>
              <li>Kindergarten</li>
              <li>First Grade</li>
              <li>
                2<sup>nd</sup> Grade
              </li>
            </List>
            <tr />
          </td>
          <DateCell>
            Thursday, April 16<sup>th</sup>
          </DateCell>
        </tr>
        <tr>
          <td>
            <List>
              <li>
                3<sup>rd</sup> Grade
              </li>
              <li>
                4<sup>th</sup> Grade
              </li>
              <li>
                5<sup>th</sup> Grade
              </li>
            </List>
          </td>
          <DateCell>
            Friday, April 17<sup>th</sup>
          </DateCell>
        </tr>
        <tr>
          <td>
            <List>
              <li>
                6<sup>th</sup>Grade
              </li>
              <li>
                7<sup>th</sup>Grade
              </li>
              <li>
                8<sup>th</sup>Grade
              </li>
            </List>
          </td>
          <DateCell>
            Monday, April 20<sup>th</sup>
          </DateCell>
        </tr>
        <tr>
          <td>
            <List>
              <li>
                9<sup>th</sup> Grade
              </li>
              <li>
                10<sup>th</sup> Grade
              </li>
              <li>
                11<sup>th</sup> Grade
              </li>
            </List>
          </td>
          <DateCell>
            Tuesday, April 21<sup>st</sup>
          </DateCell>
        </tr>
      </tbody>
    </Table>
  );
}

Schedule.propTypes = {};

export default memo(Schedule);
