import styled from 'styled-components';

export const SiteHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;
    max-width: 1200px;

    margin-top: 10px;

    img{
        width: 177px;
        height: 45px;
    }
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    height: 100%;
    list-style: none;

    ul{
        display: flex;
        align-items: flex-end;
        gap: 10px;
        height: 100%;
        list-style: none;

        li{
            font-size: 1rem;
            font-weight: 500;
            color: #202020;
        }

        a{
            text-decoration: none;
            color: #202020;
            transition: 0.1s;
            &:hover{
                color: #29c441;
            }
        }
    }
`