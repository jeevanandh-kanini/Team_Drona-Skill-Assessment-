import Tabs from '@mui/material/Tabs';
// import TablList from '@mui/material/TabList'
import Tab from '@mui/material/Tab'


const  D = ()=> {
  return (
    <Tabs defaultValue={1}>
        <Tabs defaultValue={1}>
        <Tab value={1}></Tab>
        <Tab value={2}></Tab>
        <Tab value={3}></Tab>
        </Tabs>
    </Tabs>
  );
}

export default  D;