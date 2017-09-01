export class Profissional {

    public id: number
    public email: string
    public first_name: string
    public fullname: string
    public thumbnail: string
    public photo_url: string
    public resume: string
    public rate: number
    public endorsements: number
    public account_type: number
    public categories: Array<number>
    public skills: Array<object>
    public costumer_service: boolean
    public place_to_work: boolean
    public attendance_in_domicile: boolean
    public core_endorsement_worker: Array<object>
    public phone_number: string
    public full_phone: string
    
}