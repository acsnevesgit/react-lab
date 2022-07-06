import React, { useContext, useState } from 'react';
import { Button, Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { DarkModeContext } from '../contexts/DarkModeContext';

// !Inspired in: https://mui.com/material-ui/react-transfer-list/

// Components
import checklist from '../assets/collections/3D/checklist.png';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const ListManagement = () => {
  const [checked, setChecked] = useState([]);

  // TODO: replace with personalized list. For now lists have 8 items in total
  const [left, setLeft] = useState([0, 1, 2, 3]);
  const [right, setRight] = useState([4, 5, 6, 7]);

  const { darkMode } = useContext(DarkModeContext);

  // ------------------------------------------ Functions ---------------------------------------
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper className={darkMode ? 'custom-list dark-custom-list' : 'custom-list light-custom-list'}>
      {items === left ? (<h3 className='list-title'>TODO</h3>) : (<h3 className='list-title'>DONE</h3>)}
      <List component='div' role='list'>
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role='listitem'
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  className={darkMode ? 'dark-checkbox-list' : ''}
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  // ------------------------------------------ Render ------------------------------------------
  return (
    <div className='main'>
      <h3>List Management</h3>
      <p className='first-line paragraph'>Here you can see an interactive transfer list, where one or more list items can be transferred between left and right columns.</p>
      <p className='last-line paragraph'>By default all items can be transferred at once using <b>&gt;&gt;</b> or <b>&lt;&lt;</b> buttons from one column to another. If no item is selected <b>&gt;</b> and <b>&lt;</b> buttons are disabled. But if at least one item is specifically checked, it is possible to only trasfer that(those) checked item(s).</p>
      <div className='side-by-side'>
        <div>
          <img
            className='activity-img-vert'
            src={checklist}
            alt='woman with pencil'
          />
        </div>
        <div className='to-do-list'>
          <Grid container spacing={4} justifyContent='center' alignItems='center'>
            <Grid item>{customList(left)}</Grid>
            <Grid item>
              <Grid container direction='column' alignItems='center'>
                <Button
                  sx={{ mx: 1, my: 1 }}
                  className='list-btn'
                  variant='contained'
                  size='medium'
                  onClick={handleAllRight}
                  disabled={left.length === 0}
                  aria-label='move all right'
                >
                  ≫
                </Button>
                <Button
                  sx={{ mx: 1, my: 1 }}
                  className='list-btn'
                  variant='contained'
                  size='medium'
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label='move selected right'
                >
                  &gt;
                </Button>
                <Button
                  sx={{ mx: 1, my: 1 }}
                  className='list-btn'
                  variant='contained'
                  size='medium'
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label='move selected left'
                >
                  &lt;
                </Button>
                <Button
                  sx={{ mx: 1, my: 1 }}
                  className='list-btn'
                  variant='contained'
                  size='medium'
                  onClick={handleAllLeft}
                  disabled={right.length === 0}
                  aria-label='move all left'
                >
                  ≪
                </Button>
              </Grid>
            </Grid>
            <Grid className='done-list' item>{customList(right)}</Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ListManagement;
