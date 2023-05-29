export interface Order {
    id: number,
    name: string,
    itemName: string,
    
    oStatus: string,
    pStatus: string,
    price: number,
    total: number;
    quantity: number;

}
export const ORDER = [
    {
        id: 1,
        name: 'Cris March',
        itemName: 'Product 1',
        
        oStatus: 'Order Placed',
        pStatus: 'Unpaid',
        price: 500,
        total: 2000,
        quantity: 4
    },
    {
        id: 2,
        name: 'Cris March',
        itemName: 'Product 2',
       
        oStatus: 'In Process',
        pStatus: 'Paid',
        price: 250,
        total: 1000,
        quantity: 4

    },
    {
        id: 3,
        name: 'Cris March',
        itemName: 'Product 3',
       
        oStatus: 'Delivered',
        pStatus: 'Paid',
        price: 1600,
        total: 16000,
        quantity: 10
    },
    {
        id: 4,
        name: 'Cris March',
        itemName: 'Product 4',

        oStatus: 'Cancelled',
        pStatus: 'Unpaid',
        price: 500,
        total: 500,
        quantity: 1
    },
    {
        id: 5,
        name: 'Cris March',
        itemName: 'Product 5',
       
        oStatus: 'Order Placed',
        pStatus: 'Paid',
        price: 100,
        total: 200,
        quantity: 2
    },
];