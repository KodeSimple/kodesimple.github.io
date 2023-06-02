const users = [
    { 
        businessName: '0',
        firstName: '0',
        lastName: '0',
        userName: '0',
        email: '0',
        password: '0',
        confirmPassword: '0',
        productList: [
            {id: '01', entryDate: '2023-01-01', serialNumber: '01', category: '1', description: '1', quantity: '1', buyPrice: '1', sellPrice: '1'},
            {id: '02', entryDate: '2023-01-01', serialNumber: '02', category: '2', description: '2', quantity: '2', buyPrice: '2', sellPrice: '3'}
        ]
    },
    { 
        businessName: '1',
        firstName: '1',
        lastName: '1',
        userName: '1',
        email: '1',
        password: '1',
        confirmPassword: '1',
        productList: [
            { id: '01', entryDate: '2023-01-01', serialNo: '123456', category: 'Electronics', description: 'Smartphone', buyPrice: 500, sellPrice: 700, profit: 200 },
            { id: '02', entryDate: '2023-01-02', serialNo: '789012', category: 'Appliances', description: 'Refrigerator', buyPrice: 1000, sellPrice: 1500, profit: 500 },
            { id: '03', entryDate: '2023-01-03', serialNo: '345678', category: 'Furniture', description: 'Sofa', buyPrice: 800, sellPrice: 1200, profit: 400 },
        ]
    }
];

module.exports = users;
