import {
  VStack,
  Input,
  View,
  HStack,
  Text,
  Avatar,
  Modal,
  Button,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../routes/AuthProvider';
import CButton from '../../components/CButton';
import {TouchableOpacity} from 'react-native';
import CDialog from '../../components/Dialog';
import {BLACK} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';
import * as ImagePicker from 'react-native-image-picker';

const MyProfile = () => {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const {state} = useAuth();
  const [openEdit, setOpenEdit] = useState(false);
  const [formData, setData] = useState({});
  const toast = useToast();

  const [response, setResponse] = useState();

  const [openDialog, setOpenDialog] = useState(false);

  const {user} = state;

  useEffect(() => {
    if (user) {
      setData({
        ...formData,
        firstName: user?.firstname,
        lastName: user?.lastname,
        phone: user?.phone,
        email: user?.email,
        gender: user?.gender,
        avatar: user?.avatar,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onPressUpdateProfile = () => {};

  const onPressDeleteAccount = () => {
    setOpenDialog(true);
  };

  const onPressAvatar = () => {
    setOpenEdit(true);
  };

  const onButtonPress = React.useCallback(type => {
    setOpenEdit(false);
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (type === 'capture') {
      ImagePicker.launchCamera(options, response => {
        if (response.didCancel) {
        } else if (response.error) {
          toast.show({
            description: 'Khởi động camera thất bại, vui lòng thử lại!',
          });
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          setResponse(response);
        }
      });
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <Container>
      <Header title={'Cập nhật thông tin'} />
      {openDialog && (
        <CDialog
          title={'Xoá tài khoản'}
          content={'Bạn chắc chắn muốn xoá tài khoản?'}
          confirmTitle={'Xác nhận'}
          onSubmit={() => {
            setOpenDialog(false);
          }}
          onClose={() => setOpenDialog(false)}
        />
      )}
      <Modal
        isOpen={openEdit}
        placement={'bottom'}
        onClose={() => setOpenEdit(false)}
        safeAreaTop={false}>
        <Modal.Content bg={'transparent'}>
          <Modal.Body mb={'1'} bg={'text.0'} borderRadius={'6'}>
            <Button
              colorScheme={'text.50'}
              bg={'text.0'}
              onPress={() => onButtonPress('gallery', null)}>
              <Text color={'text.100'}>Chọn từ bộ sưu tập ảnh</Text>
            </Button>
            <Button
              colorScheme={'text.50'}
              bg={'text.0'}
              onPress={() => onButtonPress('capture', null)}>
              <Text color={'text.100'}>Chụp hình</Text>
            </Button>
          </Modal.Body>
          <Modal.Footer
            borderRadius={'6'}
            p={'0'}
            bg={'text.0'}
            justifyContent={'center'}>
            <Button
              colorScheme={'text.0'}
              width={'100%'}
              bg={'text.0'}
              onPress={() => setOpenEdit(!openEdit)}>
              <Text color={'text.100'}>HUỶ</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack mx={4} space={4}>
        <View alignItems={'center'} style={commonStyle.iconSupportAvatar}>
          {user?.avatar ? (
            <Avatar
              size={'xl'}
              source={{
                uri: user?.avatar,
              }}>
              <Avatar.Badge
                bg={'text.0'}
                borderWidth={'0'}
                justifyContent={'center'}
                alignItems={'center'}>
                <TouchableOpacity onPress={() => onPressAvatar()}>
                  <Icon size={20} name="camera" color={BLACK} />
                </TouchableOpacity>
              </Avatar.Badge>
            </Avatar>
          ) : (
            <Avatar size={'xl'} source={IMG.user}>
              <Avatar.Badge
                bg={'text.0'}
                borderWidth={'0'}
                justifyContent={'center'}
                alignItems={'center'}>
                <TouchableOpacity onPress={() => onPressAvatar()}>
                  <Icon size={20} name="camera" color={BLACK} />
                </TouchableOpacity>
              </Avatar.Badge>
            </Avatar>
          )}
        </View>

        <Input
          onChangeText={val => {
            setData({...formData, firstName: val});
          }}
          placeholder="Nhập tên đăng nhập"
          autoCapitalize="none"
          borderRadius={10}
          value={formData.firstName}
        />
        <Input
          onChangeText={val => {
            setData({...formData, lastName: val});
          }}
          placeholder="Nhập tên đăng nhập"
          autoCapitalize="none"
          borderRadius={10}
          value={formData.lastName}
        />
        <Input
          onChangeText={val => {
            setData({...formData, email: val});
          }}
          placeholder="Nhập Email"
          autoCapitalize="none"
          borderRadius={10}
          value={formData.email}
        />

        <CButton onPress={() => onPressUpdateProfile()}>
          Cập nhật tài khoản
        </CButton>
        <View alignItems={'center'}>
          <TouchableOpacity onPress={() => onPressDeleteAccount()}>
            <HStack space={2} alignItems={'center'}>
              <Icon name="trash-outline" size={24} />
              <Text>Xoá tài khoản</Text>
            </HStack>
          </TouchableOpacity>
        </View>
      </VStack>
    </Container>
  );
};

export default MyProfile;
