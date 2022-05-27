export class Users{
    public id: number;
    public name: string;
    public email: string;
    public number: number;
    public role: string;
    public place: string;
    public password: string;
    
}
export class Services{
    public id: number;
    public user_id: number;
    public fullname: string;
    public email: string;
    public cpNumber: string;
    public role: string;
    public address: string;
}
export class RequestSrv {
    public id: number;
    public fullName: string;
    public eMail: string;
    public cpNumber: number;
    public details: string;
    public service_id: number;
}