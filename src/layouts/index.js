import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ProductList from '../components/ProductList';
import Header from '../components/Header'
// import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <ProductList name="product " data={[1,2,3,4,5,6,7,8,9]}/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
