
import { useState } from 'react'; 
import Modal from '../components/Modal' ;
import Button from '../components/Button';

function ModalPage(){
    const [showModal,setShowModal] = useState(false);

    const handleClick= ()=>{
        setShowModal(true);
    };
    const handleClose= ()=>{
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary rounded >I accept.</Button>
    </div>
    const modal= <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
            Here is an important agreement for you to accept.
        </p>
        </Modal>;

    return (
        <div className='relative'  >
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus enim felis, ut rutrum est ultricies sit amet. Integer bibendum tellus et sollicitudin ultricies. Nulla vel mauris id justo aliquet mattis sit amet et est. In ultrices sapien a tortor viverra aliquam. Vestibulum iaculis urna in odio elementum, eget interdum ligula malesuada. Praesent non nulla a lectus varius vulputate. Morbi elit velit, congue eu lectus non, facilisis blandit nisi. Ut quis aliquet nisl. Vestibulum scelerisque sit amet ante at porttitor. Sed quis sagittis erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est nisl, rhoncus a neque sit amet, accumsan consequat sapien.
            </p>
            <Button primary rounded  onClick={handleClick} >Open Modal</Button>
            { showModal && modal }
        </div>
    );
}


export default ModalPage;