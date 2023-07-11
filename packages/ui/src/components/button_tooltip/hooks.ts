import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { readIsUserLoggedIn } from '@/recoil/user';

const useButtonTooltipHook = () => {
    const loggedIn = useRecoilValue(readIsUserLoggedIn);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (!loggedIn) {
            handleOpen();
        }
    }, [loggedIn]);

    return {
        open,
        handleClose
    };

};

export default useButtonTooltipHook;