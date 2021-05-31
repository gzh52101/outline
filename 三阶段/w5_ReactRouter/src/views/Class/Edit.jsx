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

const querystring = require('querystring');
console.log('queryString',querystring)


class EditClass extends React.Component {
    state = {
        categories: [],
        cities: [],
        classData:{}
    }
    onFinish = async (values) => {
        console.log('onFinish', values);
        const {_id} = this.state.classData
        const data = await request.put('/class/'+_id,values);
        if(data.code === 201){
            message.success('修改成功');
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
    getData = async ()=>{
        // 获取传入的班级id
        const {id} = this.props.match.params;
        const { data } = await request.get('/class/'+id)
        this.setState({
            classData: data
        })
    }
    componentDidMount() {
        console.log('Eidt.props',this.props)
        // console.log('qs.parse',querystring.decode(this.props.location.search.slice(1)))

        // 根据id获取当前班级信息
        this.getCategory();
        this.getCity();
        this.getData();
    }
    render() {
        const { cities, categories,classData } = this.state;
        const fields = [{
            name:'name',
            value:classData.name
        },{
            name:'city',
            value:classData.city
        },{
            name:'category',
            value:classData.category
        }]
        const rules = {
            name:[{
                required:true,message:'请填写班级名称'
            }]
        }

        return (
            <div>
                <h1>修改班级信息</h1>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={this.onFinish}
                    fields={fields}
                >
                    <Form.Item label="班级名称" name="name" rules={rules.name}>
                        <Input value />
                    </Form.Item>
                    <Form.Item label="城市" name="city">
                        <Select>
                            {
                                cities.map(item => (
                                    <Select.Option key={item._id} value={item.code}>{item.name}</Select.Option>
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
                        <Button type="primary" htmlType="submit">修改</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

}


export default EditClass;