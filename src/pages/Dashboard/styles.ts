import styled from 'styled-components'

export const Container = styled.div`
  font-family: "Georgia", serif;
  width: 100%;
  max-width: 100%;
  margin: 50px auto 0;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  border: solid;
  padding: 100px;


  input {
    border: solid;
    padding: 10px;
    margin-bottom: 10px;
  }

  table td {
    font-family: "Georgia", serif;
    padding-bottom: 8px;
    margin-left: 15px;
  }
  table tr {
    padding-bottom: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    border: solid;
    padding: 15px;
    margin-right: 10px;
  }

`
export const Button = styled.button`

background-color: #006400;
  color: white;

  height: 40px;
  width: 150px;
  border: none;
  border-radius: 150px;
`
export const Form = styled.form`
 font-family: " Gill Sans Extrabold", sans-serif;
  width: 100%;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 20px;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: solid;
  padding: 50px;
  border-radius: 50px;
  input {
    margin-bottom: 80px;
  }
`

