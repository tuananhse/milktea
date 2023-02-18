import {AlertDialog, Button, Text} from 'native-base';
import React from 'react';
const CDialog = props => {
  const {onClose, onSubmit, title, content, confirmTitle} = props;
  const cancelRef = React.useRef(null);

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={true}
      onClose={onClose}>
      <AlertDialog.Content bg={'text.0'}>
        <AlertDialog.CloseButton />
        <AlertDialog.Header bg={'text.0'} borderBottomColor={'text.200'}>
          <Text fontWeight={'semibold'} color={'text.100'}>
            {title}
          </Text>
        </AlertDialog.Header>
        <AlertDialog.Body bg={'text.0'} color={'text.100'}>
          <Text color={'text.100'}>{content}</Text>
        </AlertDialog.Body>
        <AlertDialog.Footer borderTopColor={'text.200'} bg={'text.0'}>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}>
              <Text fontWeight={'semibold'}>Huỷ</Text>
            </Button>
            <Button bg={'primary.100'} colorScheme="danger" onPress={onSubmit}>
              <Text fontWeight={'semibold'} color={'text.0'}>
                {confirmTitle}
              </Text>
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
export default CDialog;
