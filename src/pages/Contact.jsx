import { useState } from 'react';
import {
  Box, FormControl, FormLabel, Input, Textarea, Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure
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

  // Handle changes to form
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

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
  };

  return (
    <>
      <Box mt={4} p={5} maxW='600px' mx='auto' border='solid' borderRadius={10} >
        <PageTitle title='Contact Me' />

        <form onSubmit={handleSubmit}>
          <FormControl id='name' isRequired mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='Your name' value={formData.name} onChange={handleChange} />
          </FormControl>

          <FormControl id='email' isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Your email' value={formData.email} onChange={handleChange} />
          </FormControl>

          <FormControl id='message' isRequired mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder='Your message' value={formData.message} onChange={handleChange} />
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
