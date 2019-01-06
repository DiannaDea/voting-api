import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const GroupSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    margin: 50px 5px;
`;

export const CircleGroup = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    color: var(--main-color-blue);
    font-weight: bold;
    font-size: 20px !important;
`;

export const CircleGroupShadow = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 200px;
    position: absolute;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.3)
    );
`;

export const CircleGroupText = styled.p`
    margin: 0;
`;

export const AddGroupBtn = styled(Button)`
    margin-top: 30px !important;
    width: 75px !important;
    height: 75px !important;
    background-color: var(--main-color-blue) !important;
`;
