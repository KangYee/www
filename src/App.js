import React from 'react';
import {Card} from 'antd';
import Alipay from './component/Alipay';
import './globalStyle';
import './hmt';

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
      <h1>域名出售：<a href="https://mi.aliyun.com/detail/online.html?spm=5176.8070854.1024.4.66fb2c4fxvRPDN&domainName=mtdhb.com&orgType=0&productType=2" target="_blank" rel="noopener noreferrer">点击购买</a></h1>
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
