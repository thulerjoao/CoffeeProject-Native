import styled from 'styled-components/native';

export const CreateAccountContainer = styled.View`
  /* flex: 1; */
  padding: 32px;
  /* background-color: #7f47f8; */
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const TopText = styled.Text`
  width: 100%;
  font-size: 24px;
  color: #4b2994;
  font-weight: 700;
  margin-top: 30%;
  margin-bottom: 10%;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 9%;
`;


export const Inputdescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-top: 11px;
  margin-left: 5px;
`;

export const CreateAccountInput = styled.TextInput`
  background-color: #e9e9e9;
  width: 100%;
  height: 42px;
  font-size: 14px;
  padding: 0px 16px;
  color: black;
  /* margin-top: 22px; */
  border-radius: 6px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width: 247px;
  justify-content: center;
  align-items: center;
  margin-top: 9%;
`;
export const CreateAccountButtonText = styled.Text`
  color: white;
  background-color: #4b2994;
  width: 100%;
  border-radius: 6px;
  text-align: center;
  justify-content: center;
  padding: 14px 0;
  font-size: 13px;
  font-weight: 600;
`;

export const AlertText = styled.Text`
  font-size: 14px;
  color: #ff2a00;
  font-weight: 400;
`;
