import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { LoginDataItem } from '../../components/LoginDataItem';

import {
  Container,
  Metadata,
  Title,
  TotalPassCount,
  LoginList,
} from './styles';

interface LoginDataProps {
  id: string;
  service_name: string;
  email: string;
  password: string;
};

type LoginListDataProps = LoginDataProps[];

export function Home() {
  const [searchText, setSearchText] = useState('');
  const [searchListData, setSearchListData] = useState<LoginListDataProps>([]);
  const [data, setData] = useState<LoginListDataProps>([]);

  async function loadData() {
    const dataKey = '@savepass:logins';
    const response = await AsyncStorage.getItem(dataKey);

    if(response){
      setSearchListData(JSON.parse(response));
      setData(JSON.parse(response));
    }
  }

  function handleFilterLoginData() {
    const filteredData = searchListData.filter( data => {
      const isValid = data.service_name.toLowerCase().includes(searchText.toLowerCase());
      
      if(isValid){
        return data;
      }
    });

    setSearchListData(filteredData);
  }

  function handleChangeInputText(text: string) {
    if(!text){
      setSearchListData(data);
    }

    setSearchText(text)
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return (
    <>
      <Header
        user={{
          name: 'José',
          avatar_url: 'https://lh3.googleusercontent.com/a-/AOh14Gg5mhaKU_vLBg0IGe-S4DBcMlNgf_XPebTINRdr3Q=s360-p-rw-no'
        }}
      />
      <Container>
        <SearchBar
          placeholder="Qual senha você procura?"
          onChangeText={handleChangeInputText}
          value={searchText}
          returnKeyType="search"
          onSubmitEditing={handleFilterLoginData}

          onSearchButtonPress={handleFilterLoginData}
        />

        <Metadata>
          <Title>Suas senhas</Title>
          <TotalPassCount>
            {searchListData.length
              ? `${`${searchListData.length}`.padStart(2, '0')} ao total`
              : 'Nada a ser exibido'
            }
          </TotalPassCount>
        </Metadata>

        <LoginList
          keyExtractor={(item) => item.id}
          data={searchListData}
          renderItem={({ item: loginData }) => {
            return <LoginDataItem
              service_name={loginData.service_name}
              email={loginData.email}
              password={loginData.password}
              funcReload={loadData}
            />
          }}
        />
      </Container>
    </>
  )
}