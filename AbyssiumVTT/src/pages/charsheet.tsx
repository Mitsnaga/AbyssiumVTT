import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
/*import { CharInfo } from './charinfo';*/


interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
  onSubmit?: () => void;
}

function CustomTabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Charsheet = () =>  {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Character Info" {...a11yProps(0)} />
          <Tab label="Abilities" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* Character Info */}
      <CustomTabPanel value={value} index={0}>
        {/* <CharInfo /> */}
        Item One
      </CustomTabPanel>

      {/* Abilities and Score Modifier */}
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>

      {/* Saving Throw and Skills */}
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
