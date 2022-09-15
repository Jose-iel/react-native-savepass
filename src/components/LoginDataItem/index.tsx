import React, { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Modal } from "react-native";

import {
  Container,
  ShowPasswordButton,
  Icon,
  PassData,
  Title,
  Password,
  LoginData,
  BoldTitle,
  Email,
  ButtonRemoveLogin,
  TrashIcon,
  ModalContainer,
  BoxModal,
  TextTitleModal,
  ButtonYesModal,
  TextButtonYes,
  ButtonNoModal,
  TextButtonNo
} from './styles';

interface Props {
  service_name: string;
  email: string;
  password: string;
  funcReload: () => void;
}

export function LoginDataItem({
  service_name,
  email,
  password,
  funcReload
}: Props) {
  const [passIsVisible, setPassIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleTogglePassIsVisible() {
    setPassIsVisible(!passIsVisible);
  }

  async function handleRemoveStand(){
    const dataKey = '@savepass:logins';

    const response = await AsyncStorage.getItem(dataKey);
    const logins = response ? JSON.parse(response) : [];  
    
    const removed = logins.filter(function(el: Props) { 
      return el.service_name !== service_name; 
    });
    
    await AsyncStorage.setItem(dataKey, JSON.stringify(removed));
    setModalVisible(false);
    funcReload();
  };

  return (
    <Container
      colors={[
        passIsVisible
          ? '#EBF2FF'
          : '#ffffff',
        '#ffffff'
      ]}
    >
      <ShowPasswordButton
        onPress={handleTogglePassIsVisible}
      >
        <Icon
          name={passIsVisible ? "eye" : "eye-off"}
          color={passIsVisible ? '#1967FB' : '#888D97'}
        />
      </ShowPasswordButton>

      {passIsVisible
        ? (
          <PassData>
            <Title>{service_name}</Title>
            <Password>{password}</Password>
          </PassData>
        )
        : (
          <LoginData>
            <BoldTitle>{service_name}</BoldTitle>
            <Email>{email}</Email>
          </LoginData>
        )
      }

      <ButtonRemoveLogin onPress={() => setModalVisible(true)}>
        <TrashIcon name="trash"/> 
      </ButtonRemoveLogin>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContainer>
          <BoxModal>
            <TextTitleModal>Você realmente deseja apagar a senha de - {service_name}</TextTitleModal>
            <ButtonYesModal onPress={handleRemoveStand}>
              <TextButtonYes>SIM</TextButtonYes>
            </ButtonYesModal>
            <ButtonNoModal onPress={() => setModalVisible(false)}>
              <TextButtonNo>NÃO</TextButtonNo>
            </ButtonNoModal>
          </BoxModal>
        </ModalContainer>
      </Modal>
    </Container>
  );
}