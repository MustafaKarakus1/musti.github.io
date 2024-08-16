import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Contact from '../Assets/contact.jpg';
import FButton from '../ButtonFloat/FButton';
import { Button, Form, Input, InputNumber } from 'antd';
import { motion } from 'framer-motion';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values) => {
  console.log(values);
};

const ContactPage = () => {
  return (
    <motion.div className="font-serif bg-brunswick-green"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth}}
    >
      <div className='bg-sage'>
        <Navbar />
        <div className='relative'>
          <img src={Contact} alt="page-image" className='w-full h-[50vh] md:h-[76vh] object-cover' />
          <div className="absolute inset-0 flex items-center justify-start pl-4 md:pl-12">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">İletişim</h1>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 px-4 md:px-12'>
          <div className="flex pl-24">
            <div className="max-w-lg">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                  maxWidth: '600px', 
                  textAlign: 'left', 
                }}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={['user', 'name']}
                  label="İsim/Soyisim"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={['user', 'email']}
                  label="Email"
                  rules={[
                    {
                      type: 'email',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={['user', 'age']}
                  label="Yaşınız:"
                  rules={[
                    {
                      type: 'number',
                      min: 0,
                      max: 99,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Telefon Numaranız:">
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Mesajınız:">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 0,
                  }}
                >
                  <Button className='bg-brunswick-green w-full' type="primary" htmlType="submit">
                    GÖNDER
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>

      
          <div className="flex items-center justify-center text-center">
            <div className="p-12  max-w-md">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brunswick-green mb-4">
                Yeni Bir Hayata Merhaba Demek Çok Kolay!
              </h2>
              <p className="text-gray-700">
                Hedeflerinize ulaşmak hiç bu kadar kolay olmamıştı. Bizimle iletişime geçin ve hayatınızı
                bir adım öteye taşıyın!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[50vh] md:h-[90vh]">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11365.234845410936!2d32.5117492!3d37.9352073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08e4b22d5b8c1%3A0x6d59484c9520249c!2sRunup%20Spor%20Merkezi%20Horozluhan%20Yeni%20%C4%B0stanbul%20Cd.%20No:58%2042060%20Sel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1696934649035!5m2!1str!2str"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <Footer />
      <FButton />
    </motion.div>
  );
}

export default ContactPage;
