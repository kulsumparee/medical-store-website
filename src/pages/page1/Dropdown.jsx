import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const DropdownComp = ({ title, item1, item2, item3, className }) => {
    return (
        <Dropdown className={`mx-2 text-lg rounded-3xl py-1 px-5 bg-[#F3F5F6] ${className}`}
            menu={{
                items: [
                    {
                        label: item1,
                        key: '0',
                    },
                    {
                        label: item2,
                        key: '1',
                    },

                    {
                        label: item3,
                        key: '3',
                    },
                ],
            }}

        >

            <Space className='hover:cursor-pointer'>
                <h1 className=' text-[15px]'> {title}</h1>
                <div className=' text-[12px] '>
                    <DownOutlined />
                </div>
            </Space>

        </Dropdown>

    )
   
};
export default DropdownComp;