import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  /* flex: 1; */
  padding: 32px;
  /* background-color: #7f47f8; */
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const LoginLogo = styled.Image`
  margin-top: 40%;
  margin-bottom: 20%;
`;

export const LoginInput = styled.TextInput`
  background-color: #e9e9e9;
  width: 100%;
  height: 42px;
  font-size: 14px;
  padding: 0px 16px;
  color: black;
  margin-top: 22px;
  border-radius: 6px;
`;

export const BottonContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
  padding: 0 10px;
  margin-bottom: 7.5%;
`;

export const RemembermeContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Rememberme = styled.Text`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;

export const TicOrNot = styled.Image`
  margin-left: 5px;
`;

export const ForgotPassword = styled.Text`
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 247px;
  justify-content: center;
  align-items: center;
  margin-top: 7.5%;
`;
export const LoginButtonText = styled.Text`
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

export const CreateAccountContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
`;

export const CreateAccountFirstText = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

export const NewAccountTouch = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const NewAccountTouchText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #4b2994;
`;

export const AlertText = styled.Text`
  font-size: 13px;
  color: #FF2A00;
  font-weight: 400;
`;
