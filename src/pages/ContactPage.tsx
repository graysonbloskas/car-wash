import React, { ChangeEvent, FormEvent, useState } from 'react';
import formId from '../config';
import axios from 'axios';

type FormState = {
  email: string;
  name: string;
  message: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};

function ContactPage() {
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: '',
    name: '',
    message: '',
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: 'bg-green-500',
        text: 'Thanks, We will be in touch shortly',
      });
    } catch (error) {
      console.log(error);
      setMessage({
        class: 'bg-red-500',
        text: 'Sorry, there was an issue. Please try again',
      });
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <div className='w-2/3 m-auto p-8 shadow-lg '>
        <h1 className='text-4xl font-bold flex items-center'>
          <i className='fas fa-paper-plane mr-3'> </i>
          <span> Contact Us</span>
        </h1>
        {message && (
          <div className={`my-4 text-white w-full p-4 ${message.class}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={submitForm} className='flex flex-col'>
          <div className='my-2 flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={updateFormControl}
              type='text'
              className='border-2 p-2'
              id='name'
              value={formState.name}
            />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              onChange={updateFormControl}
              type='text'
              className='border-2 p-2'
              id='email'
              value={formState.email}
            />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              className='border-2 p-2'
              onChange={updateFormControl}
              value={formState.message}
            ></textarea>
          </div>
          <button
            disabled={submitting}
            className='font-bold text-lg my-2 bg-gradient-to-r from-green-300 to-green-400  text-white w-full p-2 hover:from-green-600 hover:to-green-600 transition-colors duration-200 '
          >
            {submitting ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
