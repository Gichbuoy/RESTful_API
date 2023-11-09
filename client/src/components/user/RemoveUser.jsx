import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import * as userService from "../../services/user.service";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

const RemoveUser = () => {
    const DELAY_BEFORE_REDIRECTION_MS = 1000;

    const { userId } = useParams();

    const submitAction = async () => {
        try {
            const response = await userService.removeUser(userId);
    
            if (response?.status) {
                toast.success('User removed successfully');
            } else {
            toast.warn(`User could not be removed.`);
            }

            setTimeout(() => {
                window.location.href = '/';
            }, DELAY_BEFORE_REDIRECTION_MS); // rediretion after 1 second
    
        } catch (error) {
            toast.error(`Error when removing the user`);
            console.error(error.message);
        }
    };

    const cancelAction = () => {
        window.location.href = '/';  // redirect user to list of users
    };

    return (
        <Layout>
            <Button variant='danger' onClick={submitAction} className='m1'>
                Remove user
            </Button>

            <Button variant='primary' onClick={cancelAction} className='m-1'>
                Cancel
            </Button>
        </Layout>
    )
};

export default RemoveUser;