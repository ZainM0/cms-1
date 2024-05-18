import { useState } from 'react';
import storage from './firebase';
function upload() {
    const [image, setImage] = useState('');
    const upload = () => {
        if (image == null)
            return;
        storage.ref(`/images/${image.name}`).put(image)
            .on("state_changed", alert("success"), alert);
    }
 
    return (
        <div>
            <center>
                <input type="file" onChange={(e) => 
                { setImage(e.target.files[0]) }} />
                <button onClick={upload}>Upload</button>
            </center>
        </div>
    );
}
 
export default upload;