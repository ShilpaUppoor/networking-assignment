import React, { useState } from 'react';
import { Button, Form, Input, Modal, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './addPeople.scss';

import { addUser } from '../store/connectionReducer/actions';
import { RootState } from '../store/rootReducer';
import { isEmpty } from 'lodash';

const { Title } = Typography;

const AddPeople = () => {
    const [form] = Form.useForm();
    const [showModal, setModal] = useState(false);
    const dispatch = useDispatch();
    const connectionState = useSelector((state: RootState) => state.connection);
    const { friendList } = connectionState;

    const onFinish = (values: any) => {
        const { name, friend, relationship } = values;
        if (!isEmpty(name) && !isEmpty(friend)) {
            dispatch(addUser(name, friend, relationship));
        }
        setModal(false);
        form.resetFields();
    };

    return (
        <div className='add-people'>
            <Title className='add-person-title' level={3}>
                It is said that all people on average are six or fewer social connections away from each other.
                What to know how you are connected to a friend?
                <Button
                    type='ghost'
                    className='count-me-in-button'
                    onClick={() => setModal(true)}
                >
                    Count Me In!
                </Button>
            </Title>
            <Modal
                title={null}
                visible={showModal}
                footer={null}
                width={'25%'}
                maskClosable={false}
                className='custom-add-modal'
                onCancel={() => setModal(!showModal)}
                centered
                wrapClassName='add-person-popup-container'
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    initialValues={{
                        name: '',
                        friend: '',
                        relationship: ''
                    }}
                >
                    {/* 1. You should be able to add people. */}
                    <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        label='Enter your name'
                        name='name'
                    >
                        <Input className='custom-input' />
                    </Form.Item>
                    <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        label={`Enter another person's name`}
                        name='friend'
                    >
                        <Input className='custom-input' />
                    </Form.Item>
                    {/* 2. You should be able to add types of relationships (for simplicity, you can just add one -
                        friend). */}
                    <Form.Item
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        label={`What is your relationship ?`}
                        name='relationship'
                    >
                        <Input className='custom-input' />
                    </Form.Item>
                    <Button
                        htmlType='submit'
                        className='add-person-button'
                        type='primary'
                    >Add</Button>
                </Form>
            </Modal>
            {/* 3. You should be able to set the relationships between two people. (Eg. Rahul is a friend of
                Sunny) */}
            {friendList.length !== 1 &&
                <Title level={3} className='list-of-people-title'>
                    List of people added:
                </Title>
            }
            {friendList.map((list) => {
                const { person, relationship, friend } = list;
                return (!isEmpty(person) && !isEmpty(friend) &&
                    <ul className='list-of-people-title'>
                        <li>{person} is the {relationship} of {friend}.</li>
                    </ul>
                )
            })}
        </div>
    );
};

export default AddPeople;
