import {useState} from 'react'

function Dropdown ({selected, setSelected}){

    const [isActive, setIsActive] = useState(false);
    const options = ['Psychiatrist','Urologist','Dermatologist','Gastroenterologist','Infectious diseases','Gynecologist','ENT Specialist','Fertility Specialist','Orthopedics']
    return (
        <div className="dropdown">
            <div className = "dropdown-btn" onClick={(e)=> setIsActive(!isActive)}>
                {selected}
                <span className = "fas fa-caret-down"></span>
            </div>
            {isActive &&(
             <div className = "dropdown-content">
                 {options.map((option)=>(
                     <div onClick={(e) =>{
                     setSelected(option);
                     setIsActive(false);
                     }}
                     classname = "dropdown-item">
                         {option}
                     </div>
                 ))}
             </div>
             )}
        </div>
    )
}

export default Dropdown