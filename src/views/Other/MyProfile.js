import {
  Avatar,
  Button,
  HStack,
  Input,
  Modal,
  Text,
  useToast,
  View,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import CButton from '../../components/CButton';
import Container from '../../components/Container';
import CDialog from '../../components/Dialog';
import Header from '../../components/Header';
import {useAuth} from '../../routes/AuthProvider';
import {BLACK, PRIMARY} from '../../styles/colors';
import commonStyle from '../../styles/commonStyle';
import {IMG} from '../../styles/images';

const MyProfile = () => {
  const {state} = useAuth();
  const [openEdit, setOpenEdit] = useState(false);
  const [formData, setData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    gender: '',
    avatar: '',
  });
  const toast = useToast();

  const [response, setResponse] = useState({});

  const [openDialog, setOpenDialog] = useState(false);

  const {user} = state;

  useEffect(() => {
    if (user) {
      const {firstname, lastname, phone, email, gender, avatar} = user || {};
      setData({...formData, firstname, lastname, phone, email, gender, avatar});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onPressUpdateProfile = val => {
    console.log('update profile');
  };

  const onPressDeleteAccount = () => {
    setOpenDialog(true);
  };

  const onPressAvatar = () => {
    setOpenEdit(true);
  };

  const onButtonPress = React.useCallback((type = 'gallery') => {
    setOpenEdit(false);
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (type === 'capture') {
      ImagePicker.launchCamera(options, res => {
        if (res.didCancel) {
        } else if (res.error) {
          toast.show({
            description: 'Khởi động camera thất bại, vui lòng thử lại!',
          });
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
        } else {
          setResponse(res);
        }
      });
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeFormData = (name, value) => {
    setData(prevFormData => ({...prevFormData, [name]: value}));
  };

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
      <VStack mx={4} space={4} mt={4}>
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
            <Avatar size={'xl'} source={IMG.user} />
          )}
        </View>

        <Input
          onChangeText={val => onChangeFormData('firstName', val)}
          placeholder="Nhập họ"
          autoCapitalize="none"
          borderRadius={10}
          value={formData.firstName}
        />
        <Input
          onChangeText={val => onChangeFormData('lastName', val)}
          placeholder="Nhập tên "
          autoCapitalize="none"
          borderRadius={10}
          value={formData.lastName}
        />
        <Input
          onChangeText={val => onChangeFormData('email', val)}
          placeholder="Nhập Email"
          autoCapitalize="none"
          borderRadius={10}
          value={formData.email}
          keyboardType="email-address"
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
