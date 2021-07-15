import styled from 'styled-components'

const CategoryWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.28rem;
        background-color: #108ee9;
        ul {
            display: flex;
            width: 10rem;
            height: 2.88rem;
            border: 1px solid #fff;
            border-radius: 1.8rem;
            position: relative;
            li {
                flex: 1;
                line-height: 2.88rem;
                color: #fff;
                text-align: center;
                transation: all 100ms ease-li;
                cursor: pointer;
                &.active {
                    color: #108ee9;
                    z-index: 3;
                }
                &.slide {
                    position: absolute;
                    left: -0.1rem;
                    width: 5rem;
                    background-color: #fff;
                    height: 2.82rem;
                    z-index: 2;
                    border-radius: 1.8rem;
                }
                &.slide.right {
                    left: 5rem;
                }
            }
        }
    }
    .cate-search {
        display: flex;
        aligin-items: center;
        justify-content: center;
        width: 100%;
        .tian-h-search {
            width: 100%;
        }

    }
`

const CateMenuWrap = styled.div `
    overflow: hidden;
    border-top: 1px solid #eee;
    flex: 1;
    display: flex;

    section {
      flex: 1;
      padding: 2rem 1.6rem;
      background-color: #fff;
      overflow-y: scroll;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          height: 3.6rem;
          line-height: 3.6rem;
          cursor: pointer;
          width: 50%
        }
      }
    }

    aside {
      width: 6rem;
      overflow-y: scroll;
      ul {
        li {
          text-align: center;
          line-height: 2.6rem;
          &.active {
            background-color: #fff;
            color: #108ee9;
            padding-bottom: .2rem;
            span {
              display: inline-block;
              height: 100%;
              border-bottom: 1px solid #108ee9;
            }
          }
        }
      }
    }
`

export {
    CategoryWrap,
    CateMenuWrap
}