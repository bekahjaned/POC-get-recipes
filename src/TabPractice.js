import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function TabPractice({ summary, ingredients, stepsList }) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function createMarkup() {
    return {__html: `${summary}`};
  }

  const getIngredients = ingredients.map((ingredient) => {
    return (
        <li key={ingredient.original}>{ingredient.original}</li>
    )
  })

  const getSteps = stepsList.map((stepList) => {
      const steps = stepList.steps.map((step) => {
          return (
              <li key={step.step}>{step.step}</li>
          )
      })
      return steps
  })

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Summary" value="1" />
            <Tab label="Ingredients" value="2" />
            <Tab label="Directions" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div dangerouslySetInnerHTML={createMarkup()} />
        </TabPanel>
        <TabPanel value="2">
          <ul>
            {getIngredients}
          </ul>
        </TabPanel>
        <TabPanel value="3">
          <ol>
            {getSteps}
          </ol>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabPractice