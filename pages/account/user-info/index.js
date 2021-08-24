import React, { useEffect, useState } from 'react';
import moment from 'moment';

import MyAccountContainer from 'components/Layout/MyAccountContainer';
import PasswordUpdate from 'components/auths/password-update';

// actions
import { getPhoneCodes } from 'store/account/actions';
import { updateCustomerProfile } from 'store/auth/actions';

// styles
import styles from './user-info.module.css';
import { connect } from 'react-redux';
import notify from 'utils/notify';

const UserInfo = ({ user, phoneCodes = [], getPhoneCodes, updateCustomerProfile }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'firstName') {
      setFirstName(e.target.value);
    } else if (e.target.name === 'lastName') {
      setLastName(e.target.value);
    } else if (e.target.name === 'phoneCode') {
      setPhoneCode(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'birthDay') {
      setBirthDay(e.target.value);
    } else if (e.target.name === 'birthMonth') {
      setBirthMonth(e.target.value);
    } else if (e.target.name === 'birthYear') {
      setBirthYear(e.target.value);
    } else if (e.target.name === 'male') {
      setIsMale((prevState) => !prevState);
      setIsFemale(false);
    } else if (e.target.name === 'female') {
      setIsFemale((prevState) => !prevState);
      setIsMale(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    let gender = '';
    if (isFemale && !isMale) {
      gender = 'female';
    } else if (!isFemale && isMale) {
      gender = 'male';
    } else {
      gender = '';
    }
    console.log({ user });

    updateCustomerProfile({
      id: user?.id,
      firstName: firstName,
      lastName: lastName,
      email: user?.email,
      nationalId: '',
      isCorporate: false,
      phone: `${phoneCode}/${phone}`,
      birthDate: `${birthYear}-${birthMonth}-${birthDay}`,
      gender: gender,
    }, (res) => {
      if (res) {
        notify('success', 'Profile successfully updated');
      } else {
        notify('error', 'Error');
      }
    });
  };

  useEffect(() => {
    getPhoneCodes();
  }, []);

  useEffect(() => {
    if (!user) return;
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setPhoneCode(user?.PhoneCode);
    setPhone(user?.phone);

    const day = moment(user?.birthDate).format('DD');
    const month = moment(user?.birthDate).format('MM');
    const year = moment(user?.birthDate).format('YYYY');

    const phoneNumber = user?.phone?.split('/');
    if (phoneNumber) {
      setPhoneCode(phoneNumber[0]);
      setPhone(phoneNumber[1]);
    }

    setBirthDay(Number(day));
    setBirthMonth(Number(month));
    setBirthYear(Number(year));

    if (user?.gender === 'male') {
      setIsMale(true);
    } else if (user?.gender === 'female') {
      setIsFemale(true);
    } else {
      setIsMale(false);
      setIsFemale(false);
    }
  }, [user]);

  const days = new Array(31).fill(0).map((el, index) => index + 1);
  const months = new Array(12).fill(0).map((el, index) => index + 1);
  const years = new Array(121).fill(0).map((el, index) => 2021 - index);

  return (
    <MyAccountContainer>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.header_text}>Account Infos</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.content_1}>
            <form className='login-form' style={{ flex: '1 1 0px', padding: '0px' }}>
              <div className='section-title'>
                <h2>
                  <span className='dot'></span>User Info
                </h2>
              </div>
              <div className='form-group'>
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: '1 1 0px', marginRight: '8px' }}>
                    <label>First Name</label>
                    <input
                      value={firstName}
                      type='text'
                      onChange={handleChange}
                      className='form-control'
                      placeholder='First Name'
                      id='firstName'
                      name='firstName'
                    />
                  </div>
                  <div style={{ flex: '1 1 0px' }}>
                    <label>Last Name</label>
                    <input
                      value={lastName}
                      type='text'
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Last Name'
                      id='lastName'
                      name='lastName'
                    />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label>E-mail</label>
                <input disabled defaultValue={user?.email} type='email' className='form-control' id='email' />
              </div>

              <div className='form-group'>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px', width: '90px' }}>
                    <label>Phone</label>
                    <select
                      value={phoneCode}
                      type='text'
                      onChange={handleChange}
                      className='form-control'
                      placeholder='code'
                      id='phoneCode'
                      name='phoneCode'
                    >
                      {phoneCodes?.map((el) => (
                        <option className={styles.select_option} key={el.dialCode} value={el.dialCode}>
                          {el.dialCode}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ flex: '1 1 0px' }}>
                    <label>&nbsp;</label>
                    <input
                      value={phone}
                      type='text'
                      onChange={handleChange}
                      className='form-control'
                      placeholder='444 ***00'
                      id='phone'
                      name='phone'
                    />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px', flex: '1 1 0px' }}>
                    <label>Birth Date</label>
                    <select
                      value={birthDay}
                      type='text'
                      onChange={handleChange}
                      className={`form-control ${styles.select}`}
                      placeholder='code'
                      id='birthDay'
                      name='birthDay'
                    >
                      {days?.map((el) => (
                        <option className={styles.select_option} key={el} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginRight: '8px', flex: '1 1 0px' }}>
                    <label>&nbsp;</label>
                    <select
                      value={birthMonth}
                      type='text'
                      onChange={handleChange}
                      className={`form-control ${styles.select}`}
                      placeholder='444 ***00'
                      id='birthMonth'
                      name='birthMonth'
                    >
                      {months?.map((el) => (
                        <option className={styles.select_option} key={el} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ flex: '1 1 0px' }}>
                    <label>&nbsp;</label>
                    <select
                      value={birthYear}
                      type='text'
                      onChange={handleChange}
                      className={`form-control ${styles.select}`}
                      placeholder='444 ***00'
                      id='birthYear'
                      name='birthYear'
                    >
                      {years?.map((el) => (
                        <option className={styles.select_option} key={el} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label>Gender</label>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                    <input
                      type='checkbox'
                      checked={isFemale && !isMale}
                      // value={gender}
                      onChange={handleChange}
                      className={styles.check_input}
                      name='female'
                    />
                    <div>Women</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type='checkbox'
                      checked={isMale && !isFemale}
                      // value={!gender}
                      onChange={handleChange}
                      className={styles.check_input}
                      name='male'
                    />
                    <div>Men</div>
                  </div>
                </div>
              </div>

              <button onClick={handleSave} className='btn btn-primary'>
                Save
              </button>
            </form>
          </div>

          <div className={styles.content_2}>
            <PasswordUpdate />
          </div>
        </div>
      </div>
    </MyAccountContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.customer,
    phoneCodes: state.account.phoneCodes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoneCodes: () => dispatch(getPhoneCodes()),
    updateCustomerProfile: (payload, notify) => dispatch(updateCustomerProfile(payload, notify)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
