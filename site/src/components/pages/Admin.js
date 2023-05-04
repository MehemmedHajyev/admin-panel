import React , {useRef , useState} from 'react';
import { Button, Select, Form, Input, InputNumber  , Row , Col } from 'antd';
import { Categories } from '../../const/data';
import CollapsData from '../elements/CollapsData';
import { addProduct , editProduct , deleteProduct  } from '../../redux/actions';
import { connect } from 'react-redux';
const {Option} = Select

const Admin = ( { addProduct , editProduct , deleteProduct , products  } ) => {
    const formRef = useRef(null);

    const [id , setId] = useState(null)

    const onFinish = (values) => {
       if(id){
            editProduct({
                ...values,
                id
            })
            setTimeout(() => {
                setId(null)
            }, 500);
       }
       else{
            let obj = {
                ...values,
            }
            console.log(obj)
            addProduct(obj)
       }
       formRef.current.resetFields()
    };
    

    const editProd = (id) =>{

        let product = products.find((f)=> f.id === id)

        
        formRef.current.setFieldsValue({
            ...product
        })

        setId(id)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='p-5'>

            <Row gutter={[16,16]}>
                <Col md={12}>
                     <CollapsData
                        deleteProduct={deleteProduct}
                        editProd={editProd}
                     />                     
                </Col>
                <Col className='bg-success pt-5' md={12}>
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


                        <Form.Item
                            name="heading"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your heading!',
                                },
                            ]}
                        >
                        <Input placeholder='heading' />
                        </Form.Item>

                        <Form.Item 
                            name="description"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your description!',
                                },
                            ]}
                        >
                        <Input  placeholder='description' />
                        </Form.Item>

                        <Form.Item
                            name="link"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your link!',
                                },
                            ]}
                        >
                        <Input placeholder='link' />
                        </Form.Item>

                        <Form.Item
                            name="local_rating"
                            rules={[
                                {
                                required: true,
                                message: 'Please input local rating!',
                                },
                            ]}
                        >
                        <InputNumber placeholder='local_rating' className='w-100' />
                        </Form.Item>

                        <Form.Item
                            name="global_rating"
                            rules={[
                                {
                                required: true,
                                message: 'Please input global rating!',
                                },
                            ]}
                        >
                            <InputNumber  placeholder='global_rating' className='w-100' />
                        </Form.Item>

                        <Form.Item
                            name="tags"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your tags!',
                                },
                            ]}
                        >
                            <Select
                                mode="multiple"
                                size={'md'}
                                placeholder="Please select tags"
                                style={{ width: '100%' }}
                            >
                                {Categories.map((cat)=>{
                                    return (
                                        <Option value={cat}>{cat}</Option>
                                    )
                                })}
                            </Select>
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
                </Col>
                
            </Row>
            
        </div>
    )
};



const mapStateToProps = (state) => ({
    products: state.products
})


export default connect(mapStateToProps  , { addProduct , editProduct , deleteProduct   })(Admin)