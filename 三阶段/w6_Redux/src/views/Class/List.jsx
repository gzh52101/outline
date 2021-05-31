import React from 'react'
import { withAuth } from '@/utils/hoc'
import request from '@/utils/request'
import { Table, Button, Row, Col, Popconfirm,message } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

class ClassList extends React.Component {
    state = {
        page: 1,
        size: 10,
        list: [],
        total: 0,
        selectedRowKeys:[]
    }
    getData = async () => {
        const { page, size } = this.state;
        const { data } = await request.get('/class', { page, size });
        console.log('list', data)
        this.setState({
            list: data.result,
            total: data.total
        })
    }
    goto = (path) => {
        const { history } = this.props;
        history.push({
            pathname: path,
            // search: '?id=123456',
            // state: { price: 998 }
        })
    }
    editItem = (id) => {
        // this.goto(`/class/edit/${id}`)
        this.props.history.push({
            pathname:`/class/edit/${id}`,
            search:'a=10&b=20',
            state:{c:30,d:40}
        })
    }
    removeItem = async (id)=>{
        const data = await request.delete('/class/'+id);
        if(data.code === 204){
            this.setState({
                list: this.state.list.filter(item=>item._id!==id),
                total: this.state.total-1
            })
            message.success('数据删除成功')
        }
    }
    removeClasses = async ()=>{
        const {selectedRowKeys} = this.state;
        const data = await request.delete('/class',{
            ids:selectedRowKeys
        });
        if(data.code === 204){
            this.setState({
                list: this.state.list.filter(item=>!selectedRowKeys.includes(item._id)),
                total: this.state.total-selectedRowKeys.length
            })
            message.success('数据删除成功')
        }
    }
    componentDidMount() {
        console.log('List.props', this.props)
        this.getData()
    }
    render() {
        const { list, total } = this.state;
        const columns = [{
            title: '#',
            width: 10,
            render(text, record, index) {
                return `${index + 1}`
            }
        }, {
            title: '班级名称',
            dataIndex: 'name',
        }, {
            title: '学科',
            dataIndex: 'category',
        }, {
            title: '城市',
            dataIndex: 'city',
        }, {
            title: '操作',
            dataIndex: '_id',
            width: 30,
            render: (id, record, index) => {
                return (
                    <>
                        <Button.Group size="small">
                            <Button type="primary" ghost onClick={this.editItem.bind(this, id)}>编辑</Button>
                            <Popconfirm
                                title="确实删除"
                                onConfirm={this.removeItem.bind(this,id)}
                                // onCancel={cancel}
                            >

                                <Button type="danger" ghost>删除</Button>
                            </Popconfirm>

                        </Button.Group>
                    </>
                )
            }
        }]
        const rowSelection = {
            type: 'checkbox',
            onChange:(selectedRowKeys, selectedRows)=>{
                console.log('selects=', selectedRowKeys, selectedRows)
                this.setState({
                    selectedRowKeys
                })
            }
        }
        const pagination = {
            total,
            showTotal: (total, range) => {
                console.log('total', total, range)
                return `共${total}条`
            },
            onChange: (page, pageSize) => {
                this.setState({
                    page
                }, () => {
                    this.getData()
                })
            }
        }
        return (
            <div>
                <Row gutter={20}>
                    <Col span={12}></Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <Button
                            type="primary"
                            style={{ marginRight: 5 }}
                            icon={<PlusOutlined />}
                            onClick={this.goto.bind(this, '/class/add')}
                        >添加</Button>
                        <Button type="danger" icon={<DeleteOutlined />} onClick={this.removeClasses}>批量删除</Button>
                    </Col>
                </Row>
                <Table
                    style={{ marginTop: 10 }}
                    rowKey="_id"
                    dataSource={list}
                    columns={columns}
                    rowSelection={rowSelection}
                    pagination={pagination}
                ></Table>
            </div>
        )
    }

}


export default ClassList;