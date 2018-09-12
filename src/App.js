import React from 'react';
import {Card} from 'antd';
import Alipay from './component/Alipay';
import './globalStyle';
import './hmt';

const Tou7 = () => {
  const date = new Date();
  if (date.getDate() === 12 && date.getMonth() === 8) {
    return (
      <div>
        <h1 style={{color: '#dd2323', textAlign: 'center'}}>mtdhb 头七纪念日</h1>
        <img src={require('./static/tou7.gif')} style={{width: '100%', marginBottom: 30}} alt="头七" />
      </div>
    );
  }
  return null;
};

export default () => (
  <div
    style={{
      background: '#eee',
      padding: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}
  >
    <Card
      title="食堂见"
      bordered={false}
      style={{maxWidth: 640, width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}
    >
      <Tou7 />
      <p>感谢大家大半年以来的支持。</p>
      <p>由于不可描述的原因，本站正式宣布关闭。</p>
      <p>
        技术交流：<a href="https://github.com/mtdhb" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <p style={{textAlign: 'right'}}>
        mtdhb团队 敬上<br />2018年09月06日
      </p>
      <div style={{border: '1px dashed #eee', marginBottom: 30}} />
      <Alipay />
    </Card>
  </div>
);
