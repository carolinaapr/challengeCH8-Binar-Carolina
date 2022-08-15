import React, { useState } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import SearchBar from './components/SearchBar';
import Layout from './layouts/Layout';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    level: '',
    experience: '',
  });

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <Layout>
      <Form
        formData={formData}
        setFormData={setFormData}
        data={data}
        setData={setData}
        setFilteredData={setFilteredData}
      />

      <SearchBar
        data={data}
        setData={setData}
        setFilteredData={setFilteredData}
      />

      {filteredData.length !== 0
        ? filteredData.map((item, idx) => (
            <Card
              username={item.username}
              exp={item.experience}
              lvl={item.level}
              email={item.email}
              key={idx}
            />
          ))
        : 'No data'}
    </Layout>
  );
};

export default App;
