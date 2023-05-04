import React , {useRef , useState , useEffect} from 'react';
import { Button, Form, Tooltip, Modal , Input , Row , Popconfirm  , Col , Table} from 'antd';
import CollapsData from '../../../elements/CollapsData';
import {
    UnorderedListOutlined,
    DeleteOutlined,
    EditOutlined,
    EyeOutlined
  } from '@ant-design/icons';
import domainFinder from '../../../../api/api';
import NotificationSet from '../../../../utils/notification';


const Categories = (props) => {
    const formRef = useRef(null);
    const [categories  , setCategories] = useState([])
    const [detailed  , setDetailed] = useState({})
    const [showDetailedModal  , setShowDetailedModal] = useState(false)
    const [id , setId] = useState(null)


    useEffect(()=>{
        getCategories()
    } , [])


    const getCategories = async () => {
        await domainFinder.get('categories').then((res)=>{
            console.log(res.data)
            setCategories(res.data)
        })
    }

    const showDetails = (category) => {
      setDetailed(category)
      setShowDetailedModal(true)
    }

    const onFinish = (values) => {
       if(id){  
           domainFinder.put(`categories/${id}` , values).then(()=>{
                NotificationSet('Successfully edited' , 'success' , values.name)
                getCategories()
           })
       }
       else{
            domainFinder.post(`categories` , values).then((res)=>{
                NotificationSet('Successfully created' , 'success' , res.data.name)
                getCategories()
           })
       }
       formRef.current.resetFields()
    };
    

    const editCategory = (category) =>{
        formRef.current.setFieldsValue({
            ...category
        })
        setId(category.id)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const deleteCategory = (category) => {
      domainFinder.delete(`categories/${category.id}`).then(()=>{
        NotificationSet('Successfully deleted' , 'success' , category.name)
        getCategories()
      })
    };


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          dataIndex: 'id',
          title: 'Action',
          key: 'action',
          render: (id, category) => {
            return (
                <div className='d-flex align-items-center gap-1'>
                      <Popconfirm
                        title="Delete the category"
                        description="Are you sure to delete this category?"
                        onConfirm={()=>{ deleteCategory(category) }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Tooltip placement="topLeft" title={'Delete'} >
                            <Button className='d-flex align-items-center' shape='circle' type='primary'> <DeleteOutlined/>  </Button>
                        </Tooltip>
                    </Popconfirm>
                   
                    <Tooltip placement="topLeft" title={'Edit'} >
                        <Button onClick={()=>{ editCategory(category) }}  className='d-flex align-items-center' shape='circle' type='primary'> <EditOutlined/>  </Button>
                    </Tooltip>
                    <Tooltip placement="topLeft" title={'View'} >
                        <Button onClick={()=>{ showDetails(category) }}  className='d-flex align-items-center' shape='circle' type='primary'> <EyeOutlined/>  </Button>
                    </Tooltip>
                </div>
            )
          },
        },
      ];

    return (
        <div >

            <Row gutter={[16,16]}>
                <Col xs={24}>
                    <div className="border p-3 mt-0 bg-white">
                        <div className=" d-flex align-items-center page-name">
                            <UnorderedListOutlined className="me-2" />
                            <span className="font-weight-bold">Categories</span>
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                      <Table columns={columns} dataSource={categories} />;
                </Col>
                <Col  md={12}>
                    <div className='border pt-5 p-3'>
                        <Form
                            ref={formRef}
                            name="basic"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input name!',
                                    },
                                ]}
                            >
                            <Input placeholder='name' />
                            </Form.Item>
                       
                          

                        <div className='d-flex'>
                                <Form.Item
                                >
                                    <Button type="primary" htmlType="submit">
                                        {id ? 'Edit' : 'Add'}
                                    </Button>
                                </Form.Item>

                                <Button onClick={()=>{
                                    setId(null)
                                    formRef.current.resetFields()
                                }} className='ms-3'>
                                    Cancel
                                </Button>     
                        </div>
                        </Form>
                    </div>
                </Col>
                
            </Row>


            <Modal title="Detailed modal" open={showDetailedModal} onOk={false} onCancel={()=>{setShowDetailedModal(false)}}>
                <h4> Name </h4>
                <p> {detailed.name }</p> 
                <h4> id </h4>
                <p> {detailed.id }</p> 
            </Modal>
            
        </div>
    )
};


export default Categories