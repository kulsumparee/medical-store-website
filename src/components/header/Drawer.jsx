import { useState } from 'react';
import { Button, Drawer, Grid } from 'antd';
import HeaderComponent from './head/Index';
import { FaBars } from 'react-icons/fa6';
import image from "../../assets/images/pakdeals.svg"

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
                    <div className='flex justify-between text-center'>
                        <img src={image} alt="logo" width={80} height={50} />
                        <Button onClick={showDrawer} className=' border-none'>
                            <FaBars />
                        </Button>
</div>
                    
                    <Drawer  onClose={onClose} open={open}>
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
