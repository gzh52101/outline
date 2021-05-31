import React from 'react'
import { withAuth } from '@/utils/hoc'
import request from '@/utils/request'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    message
} from 'antd';

class AddClass extends React.Component {
    state = {
        categories: [],
        cities: []
    }
    onFinish = async (values) => {
        console.log('onFinish', values);
        const data = await request.post('/class',values);
        if(data.code === 201){
            message.success('添加成功');
            this.props.history.push('/class/list');
        }
    }
    getCategory = async () => {
        const { data } = await request.get('/category', { total: false, size: 100 })
        this.setState({
            categories: data
        })
    }
    getCity = async () => {
        const { data } = await request.get('/city', { total: false, size: 100 })
        this.setState({
            cities: data
        })
    }
    componentDidMount() {
        this.getCategory();
        this.getCity();
    }
    render() {
        const { cities, categories } = this.state;
        const initialValues = {
            name:'',
            city:'广州',
            category:'HTML5'
        }
        const rules = {
            name:[{
                required:true,message:'请填写班级名称'
            }]
        }
        return (
            <div>
                <h1>添加班级</h1>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={this.onFinish}
                    initialValues={initialValues}
                >
                    <Form.Item label="班级名称" name="name" rules={rules.name}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="城市" name="city">
                        <Select>
                            {
                                cities.map(item => (
                                    <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="学科" name="category">
                        <Select>
                            {
                                categories.map(item => (
                                    <Select.Option key={item._id} value={item.name}>{item.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Button type="primary" htmlType="submit">添加</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

}


export default AddClass;