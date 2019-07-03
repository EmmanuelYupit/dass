import styled from "styled-components"

export const User = styled.div`
  width: 100%;
  height: 200px;
  background: url("http://dev.w4e.com.br/felipe/jhondoe.jpg") no-repeat center;
  background-size: cover;
  margin-bottom: 10px;
`

export const ContentUser = styled.div`
  text-align: center;
  strong {
    font-style: italic;
  }
`
export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  justify-content: space-between;
`
export const Profession = styled.div`
  color: #1890ff;
  font-style: italic;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
`
export const FlipCard = styled.div`
  width: 200px;
  min-height: 250px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  border-bottom: 2px solid #1890ff;
  box-shadow: 0px 0px 10px #aaa;
  transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
`

export const Front = styled.div`
  backface-visibility: hidden;
  min-height: 230px;
`

export const Back = styled.div`
  backface-visibility: hidden;
  min-height: 230px;
`
