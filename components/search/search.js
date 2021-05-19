import { SearchOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';

import React, { useEffect, useState } from 'react';
import styles from './search.module.css';

let timeoutId;

export default function Search({
  containerStyle,
  searchTextStyle,
  companyEnabled,
  warehouseEnabled,
  dateField,
  onChange,
  disabled,
  statusOptions,
  typeOptions,
}) {
  const [searchText, setSearchText] = useState('');
  const [searchTextLast, setSearchTextLast] = useState('');

  const sendChange = () => {
    const filter = { fields: [] };
    if (searchText) filter.searchText = searchTextLast;
  };

  useEffect(() => {
    sendChange();
  }, [searchTextLast]); //eslint-disable-line

  return (
    <div style={containerStyle} className={styles.container}>
      <div className={styles.inputs_container}>
        <div style={searchTextStyle} className={styles.input_container}>
          <Input
            disabled={disabled}
            allowClear
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => setSearchTextLast(e.target.value), 500);
            }}
            placeholder='Arama yapabilirsiniz'
            suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          />
        </div>

        <div className={styles.input_container}>
          <Select
            disabled={disabled}
            style={{ width: '100%' }}
            //value={companyId}
            //onChange={(value) => setCompanyId(value)}
            //options={companyNames?.map((el) => ({ label: el.name, value: el._id, key: el._id }))}
            // filterOption={(input, option) =>
            //   option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            placeholder='Firma Seçebilirsiniz'
            allowClear
            showSearch
          />
        </div>
      </div>
    </div>
  );
}
