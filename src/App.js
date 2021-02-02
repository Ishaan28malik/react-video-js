import React, { useState } from 'react';
import './index.css';
import { Modal, Popover } from 'antd';
import {
  CaretRightOutlined,
  EllipsisOutlined,
  ScissorOutlined,
  DeploymentUnitOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
// Video react
// import 'video-react/dist/video-react.css';

// import 'video.js/dist/video-js.min.css';
import 'video.js/dist/video-js.css';

/* CSS Bug not resolved

// City
import '@videojs/themes/dist/city/index.css';

// Fantasy
import '@videojs/themes/dist/fantasy/index.css';

// Forest
import '@videojs/themes/dist/forest/index.css';

// Sea
import '@videojs/themes/dist/sea/index.css';

*/
import videojs from 'video.js';
const content = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <a className='menu-link'>
      <ScissorOutlined className='menu-link-icon' />
      Trim
    </a>
    <a className='menu-link'>
      <DeploymentUnitOutlined className='menu-link-icon' />
      Child Asset
    </a>
  </div>
);

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='container'>
      <div className='mainContainer'>
        <div style={{ width: '350px', marginTop: '70px' }}>
          <Popover placement='leftTop' content={content} trigger='hover'>
            <button className='menu-button'>
              <EllipsisOutlined
                style={{
                  transform: 'rotate(90deg)',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </button>
          </Popover>
          <button className='video-play-button' onClick={showModal}>
            <CaretRightOutlined
              style={{
                color: 'white',
                fontSize: '25px',
                marginLeft: '5px',
                marginTop: '5px'
              }}
            />
          </button>
          <div>
            <h2 style={{ color: 'rgba(0,0,0,.85)' }}>hindi test</h2>
            <span style={{ color: '#9a9fa7' }}>2021-01-18 09:45:57201__9</span>
          </div>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose={true}
        width={310}
        closeIcon={() => {}}
      >
        <div data-vjs-player>
          <video
            id='my-player'
//             className='vjs-theme-forest'
            controls
            preload='auto'
            poster='https://images.unsplash.com/photo-1578116922645-3976907a7671?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
            autoPlay
            style={{
              height: '533px',
              border: '1px solid #bcc1c5',
              marginLeft: '-20px',
              marginTop: '-20px',
              marginBottom: '-20px'
            }}
          >
            <source
              src='https://s3.us-west-2.amazonaws.com/content-creation-platform/d6a5f93d6037160875fbfb1cf016a877.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </Modal>
    </div>
  );
}
