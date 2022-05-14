import React from 'react';
import { QuantityContainer, Decrease, Quantity, Increase } from './style';

interface QuantityArguments{
    value: any, // no acepta number ni string
    setValue: any, // funcion 
    available: number,
    color: string, 
    disabled: any
}


const QuantityCounter = ({value, setValue, available, color, disabled}: QuantityArguments)=>{
	
	const notIncrease = value > available - 1
	const notDecrease = value < 2
	
	const handleAdd = ()=>{
        if(notIncrease) {
            return null 
        }  
		const quantity: number = parseInt(value) + 1;
		setValue(quantity)
	}

	const handleSubtract = ()=>{
        if(notDecrease) {
            return null 
        }
		const quantity: number = parseInt(value) - 1;
		setValue(quantity)
	}

	const handleChange = (e: number)=>{

		if(isNaN(e)){
			setValue(0)
		}
		if(e >0 && e <= available){
			setValue(e)
		} 
	}

	const handleOnBlur = ()=>{
		if(value === 0)setValue(1)
	}

	return(        
        <QuantityContainer>
            
			<Decrease 
				// disabled={value !== 1 ? false : true} 				
                onClick = {handleSubtract}
				color={color}
				disabled={notDecrease}
				
			>
			</Decrease>
			<Quantity
				type="number" 
                pattern="[0-9]*" 
                min="0"
				value={parseInt(value,10)}
				onChange={(e:any)=>handleChange(parseFloat(e.target.value))}
				onBlur={()=>handleOnBlur()}
				color={color}
				
			/>
            <Increase
        		// disabled={value === available  ? true : available === 0 && true }  
                onClick = {handleAdd}
				color={color}
				disabled={notIncrease}
				
            >
			</Increase>
		</QuantityContainer>
	)

}

// IncreaseProduct.defaultProps = {
// 	value : 1
// }

export default QuantityCounter;