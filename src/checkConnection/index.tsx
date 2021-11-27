import React, { useState } from 'react';
import { Button, Form, Select, Space, Typography } from 'antd';

import './checkConnection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, uniq } from 'lodash';
import { computeRelationship, setFriend, setPerson } from '../store/connectionReducer/actions';

const { Text, Title } = Typography;
const { Option } = Select;

const AddPeople = () => {
    const dispatch = useDispatch();
    const connectionState = useSelector((state: any) => state.connection);
    const { personName, allPeople, distance, path, error } = connectionState;
    const allUsers: Array<any> = uniq(allPeople);
    const [isClicked, setClicked] = useState(false);

    const onSelectPersonOne = (name: any) => {
        dispatch(setPerson(name));
    };

    const onSelectPersonTwo = (name: any) => {
        dispatch(setFriend(name));
    };

    const onFinish = (values: any) => {
        console.log("finish");
        setClicked(true);
        dispatch(computeRelationship(connectionState));
    };

    return (allUsers.length !== 1 ?
        <div className='check-connection'>
            <Title level={3}>Show Connections</Title>
            <Text>Check how you are related by selecting two names in the list</Text>
            <Form onFinish={onFinish}>
                <Space direction='horizontal'>
                    <Form.Item wrapperCol={{ span: 24 }} name='personOne'>
                        <Select
                            placeholder='Select'
                            onChange={onSelectPersonOne}
                        >
                            {allUsers.map((user: any) => {
                                return (!isEmpty(user) &&
                                    <Option key={user} value={user}>
                                        {user}
                                    </Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 24 }} name='personTwo'>
                        <Select
                            placeholder='Select'
                            onChange={onSelectPersonTwo}
                        >
                            {allUsers.map((user: any) => {
                                return (!isEmpty(user) && user !== personName &&
                                    <Option key={user} value={user}>
                                        {user}
                                    </Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                </Space>
                <Button
                    htmlType='submit'
                    type='ghost'
                    className='see-connection-button'
                >
                    See Connection
                </Button>
            </Form>
            {console.log("error", !isEmpty(error))}
            {isEmpty(error) && isClicked &&
                <>
                    <Title level={4}>
                        The degree of seperation is {distance}
                    </Title>
                    <Title level={4}>
                        The two users are connected as follows:
                    </Title>
                    <Text>{path}</Text>
                </>
            }
        </div> :
        <React.Fragment>
        </React.Fragment>
    );
};

export default AddPeople;
