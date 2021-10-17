export declare interface DeviceInterface {
    name: string;
    category: string;
    image: any;
    coverImage: any;
    features: string[];
    title:string
    details:string
}

export declare interface DeviceListInterface extends DeviceInterface{

    id: string;
    image: string;
    coverImage: string;

}

