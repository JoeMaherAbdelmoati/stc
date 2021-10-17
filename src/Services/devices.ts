import Firebase from '../Firebase/firebase.index'
import {DeviceInterface} from "../Interfaces/device.interface";

export const getAllDevices = async () => {
    return Firebase.getData('devices').then(data => data)
};

export const createDevice = async (data: DeviceInterface) => {
    const image = await Firebase.uploadImage('images', data.image);
    const coverImage = await Firebase.uploadImage('images', data.coverImage);
    return Firebase.createDocument('devices', {...data, image, coverImage});
};