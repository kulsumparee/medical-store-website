import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';

const DropdownComp = ({ title, item1, item2, item3, item4, item5 }) => (
    <Dropdown
    
        menu={{
            items: [
                {
                    key: '1',
                    label: item1,
                },
                {
                    key: '2',
                    label: item2,
                },
                {
                    key: '3',
                    label: item3,
                },
                {
                    key: '4',
                    label: item4,
                },
                {
                    key: '5',
                    label: item5,
                },
            ],
            selectable: true,
            defaultSelectedKeys: ['5'],
        }}
    >
        <div className=' text-black'>

            <Typography.Link style={{ color: 'black' }}>
            <Space>
                {title}
                <DownOutlined />
            </Space>
        </Typography.Link>
        </div>
    </Dropdown>
);
export default DropdownComp;
    ;