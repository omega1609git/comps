
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage () {
    const [selection,setSelection] = useState(null);

    const handleSelect= (option)=> {
        setSelection(option);
    };

    const options= [
        { id: '7475', label:'I want red.', value: 'RED' },
        { id: '2848', label:'I want blue.', value: 'BLUE' },
        { id: '2673', label:'I want green.', value: 'GREEN' },
        { id: '7539', label:'I want yellow.', value: 'YELLOW' }
    ];
    

    return (
        <div className='flex'  >
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default DropdownPage ;