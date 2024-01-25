import React from 'react'
import {IncButton} from './MyButton'
import {DecButton} from './MyButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        <div>
            This is main panel <IncButton></IncButton>
            <DecButton></DecButton>
            <DivPanel></DivPanel>
        </div>
    );
}

export default MainPanel;
