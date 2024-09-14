import { useState } from 'react';
import {
  Box, FormControl, FormLabel, Input, Textarea, Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, FormErrorMessage
} from '@chakra-ui/react';
import PageTitle from '../components/UI/PageTitle';

export default function Contact() {
  // Chakra modal 
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Initalize values of form to track
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Track whether a field has been touched (focused then blurred)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  // Handle changes to form
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Handle blur event to mark fields as touched
  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  // Check if the form field is empty and was touched
  const isFieldEmpty = (field) => touched[field] && !formData[field];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open modal
    onOpen();

    // Clear form after submit
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset if touched
    setTouched({
      name: false,
      email: false,
      message: false
    });
  };

  return (
    <>
      <Box mt={4} p={5} maxW='600px' mx='auto' border='solid' borderRadius={10} >
        <PageTitle title='Contact Me' />

        <form onSubmit={handleSubmit}>
          <FormControl id='name' isRequired mb={4} isInvalid={isFieldEmpty('name')}>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='Your name' value={formData.name} onChange={handleChange} 
            onBlur={handleBlur}/>
            {isFieldEmpty('name') && (
              <FormErrorMessage>Name is required</FormErrorMessage>
            )}
          </FormControl>

          <FormControl id='email' isRequired mb={4} isInvalid={isFieldEmpty('email')}>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Your email' value={formData.email} onChange={handleChange} 
            onBlur={handleBlur}/>
            {isFieldEmpty('email') && (
              <FormErrorMessage>Email is required</FormErrorMessage>
            )}
          </FormControl>

          <FormControl id='message' isRequired mb={4} isInvalid={isFieldEmpty('message')}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder='Your message' value={formData.message} onChange={handleChange} 
            onBlur={handleBlur}/>
            {isFieldEmpty('message') && (
              <FormErrorMessage>Message is required</FormErrorMessage>
            )}
          </FormControl>

          <Button type='submit' colorScheme='my'>
            Submit
          </Button>
        </form>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalBody>
            Your message has been sent successfully!
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme='my'>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
