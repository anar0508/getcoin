import React from "react";
import styled from "styled-components";
import CreatableSelect from 'react-select/creatable';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
    margin-bottom: 20px;
  label {
    font-size: 14px;
  }
  Select {
    min-width: 250px;
    width: 60%;
    padding: 5px;
    outline: none;
    border: 1px solid black;
    text-align: left;
    font-size: 25px;
  }
`;

function SelectComponent(props) {
  const { labelText, options, value, handleChangeState} = props; 

  const customStyles = {
    container: (base) => ({
      ...base,
      minWidth: '250px',
      width: "60%",
      padding: "1.5px",
      outline: 'none',
      border: "1px solid black"     
      }), 
      control: (base) => ({
        ...base,
        border: "none"
      }),
    }

  const handleChange = (newValue: any, actionMeta: any) => {
    handleChangeState(newValue.value);
    };

    let newOptions;
    if (Object.getOwnPropertyNames(options[0])[0]==='type'){
      newOptions = options.map((el)=>{ return {value: el.type, label: (el.type===3? 'Commemorative': el.type===2? 'Exclusive': 'Bullion')}})}
  else {let propertyName = Object.getOwnPropertyNames(options[0])[0];
  newOptions = options.map((el)=>{ return {value: el[propertyName], label: el[propertyName]} })}
  return (
    <Container>    
    <label > {labelText} </label>
    <CreatableSelect
    defaultValue={value}
    placeholder={Object.getOwnPropertyNames(options[0])[0]==='type'? value===3? 'Commemorative': value===2? 'Exclusive': 'Bullion': value}
    styles={customStyles}
    onChange={handleChange} 
    options={newOptions}/>

  </Container>
  );
}

export default SelectComponent;
