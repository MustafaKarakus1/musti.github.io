import React from 'react';
import { WhatsAppOutlined , PhoneOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const FButton = () => {

  const handleClickWP = () =>{
    window.open("https://wa.me/+905302598800", "_blank");
  }

  const handleClickPhone = () =>{
    window.location.href= "tel:+905302598800";
  }


  return (
    <div>
      <FloatButton.Group
        shape="circle"
        style={{ insetInlineEnd: 24 }}>
          
        <FloatButton icon={<WhatsAppOutlined style={{ fontSize: '20px', color: '#25D366' }}
          onClick= {handleClickWP} /> } />
        <FloatButton icon={<PhoneOutlined style={{ fontSize: '20px', color:'red'}} 
          onClick={handleClickPhone} />} />
        <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    </div>
  )
}

export default FButton;
