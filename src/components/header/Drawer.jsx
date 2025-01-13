import { useState } from 'react';
import { Button, Drawer, Grid } from 'antd';
import HeaderComponent from './head/Index';
import { FaBars } from 'react-icons/fa6';

const { useBreakpoint } = Grid;

const DrawerComp = () => {
    const [open, setOpen] = useState(false);
    const screens = useBreakpoint();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {!screens.md ? (
                <div>
                    <Button  onClick={showDrawer} className=' border-none'>
                        <FaBars />
                    </Button>
                    <Drawer onClose={onClose} open={open}>
                        <div className="flex">
                            <HeaderComponent />
                        </div>
                    </Drawer>
                </div>
            ) : (
                <HeaderComponent />
            )}
        </>
    );
};

export default DrawerComp;
