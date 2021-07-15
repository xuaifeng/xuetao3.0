import styled from 'styled-components'

const TcHContainer = styled.div `
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    color: #fff;
    height: 3.28rem;
    font-size: 1.2rem;
    line-height: 3.28rem;
    text-align: center;
    font-family: Arial,sans-serif;
    background-color: #108ee9;
  }
`
const TcHContainer1 = styled.div `
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    color: #fff;
    height: 3.28rem;
    font-size: 1.2rem;
    line-height: 3.28rem;
    text-align: center;
    font-family: Arial,sans-serif;
    background-color: #108ee9;
  }
`

const BoutContainer = styled.div `
  h1 {
    height: 4.5rem;
    padding-left: 1.3rem;
    color: #514b4b;
    line-height: 3.5rem;
    font-weight: normal;
    background-color: #fff;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    border-top: 1rem solid #eee;
    margin-bottom: .3rem!important;
  }
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-left: .8rem;
    li {
      width: 50%;
      padding-right: .8rem;
      padding-bottom: .8rem;
      img {
        width: 100%;
      }
      > div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 2.8rem;
        background-color: #fff;
        margin-bottom: .1rem;
        > span:first-child {
          font-size: 1.1rem;
        }
        > span:last-child {
          font-size: 14px;
          color: #666;
          display: flex;
          align-items: center;
        }
      }
    }

  }
`

export {
  TcHContainer,
  TcHContainer1,
  BoutContainer
}
