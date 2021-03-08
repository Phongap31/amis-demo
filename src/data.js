const employees = [{
        'ID': 1,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 20,
        'EarlyCenter': 10,
        'LateCenter': 15,
        'EarlyEnd': 20,
        'ApprovedBy': 'Tống Giang',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Từ chối'
    }, {
        'ID': 2,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 5,
        'EarlyCenter': 20,
        'LateCenter': 15,
        'EarlyEnd': 30,
        'ApprovedBy': 'Ngô Dụng',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Đã duyệt'
    }, {
        'ID': 3,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 10,
        'EarlyCenter': 5,
        'LateCenter': 15,
        'EarlyEnd': 10,
        'ApprovedBy': 'Tiều Cái',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Từ chối'
    }, {
        'ID': 4,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 20,
        'EarlyCenter': 15,
        'LateCenter': 15,
        'EarlyEnd': 10,
        'ApprovedBy': 'Tôn Thắng',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Chờ duyệt'
    }, {
        'ID': 5,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 0,
        'EarlyCenter': 10,
        'LateCenter': 5,
        'EarlyEnd': 0,
        'ApprovedBy': 'Lâm Sung',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Chờ duyệt'
    }, {
        'ID': 6,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 20,
        'EarlyCenter': 10,
        'LateCenter': 15,
        'EarlyEnd': 20,
        'ApprovedBy': 'Võ Tòng',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Từ chối'
    },
    {
        'ID': 7,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 7,
        'EarlyCenter': 1,
        'LateCenter': 5,
        'EarlyEnd': 2,
        'ApprovedBy': 'Vương Anh',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Chờ duyệt'
    }, {
        'ID': 8,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 30,
        'EarlyCenter': 20,
        'LateCenter': 15,
        'EarlyEnd': 30,
        'ApprovedBy': 'Trương Thanh',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Từ chối'
    }, {
        'ID': 9,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 20,
        'EarlyCenter': 10,
        'LateCenter': 15,
        'EarlyEnd': 20,
        'ApprovedBy': 'Trương Thuận',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Từ chối'
    }, {
        'ID': 10,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 20,
        'EarlyCenter': 10,
        'LateCenter': 15,
        'EarlyEnd': 20,
        'ApprovedBy': 'Thời Thiên',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Chờ duyệt'
    }, {
        'ID': 11,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 10,
        'EarlyCenter': 20,
        'LateCenter': 12,
        'EarlyEnd': 2,
        'ApprovedBy': 'Yến Thanh',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Chờ duyệt'
    }, {
        'ID': 12,
        'FullName': 'Lê Hồng Phong',
        'Position': 'NGD',
        'HireDate': '1995/01/15',
        'FromDate': '2021/05/13',
        'ToDate': '2021/05/17',
        'ApplyFor': 'Thứ 2',
        'WorkShift': 'Sáng',
        'ResionFor': 'Xe hỏng',
        'LateBegin': 20,
        'EarlyCenter': 10,
        'LateCenter': 15,
        'EarlyEnd': 20,
        'ApprovedBy': 'Cao Cầu',
        'PersionRelation': 'Võ Tòng',
        'Note': 'Không có gì',
        'Status': 'Từ chối'
    }
];

const titles = [{
        ID: 1,
        Caption: "Người duyệt",
        FieldName: "ApprovedBy",
        HeaderTemplate: "FirstName"
    },
    {
        ID: 2,
        Caption: "Ngày lập",
        FieldName: "HireDate"
    },
    {
        ID: 3,
        Caption: "Đi muộn đầu ca",
        FieldName: "LateBegin"
    },
    {
        ID: 4,
        Caption: "Về sớm giữa ca",
        FieldName: "EarlyCenter"
    },
    {
        ID: 5,
        Caption: "Vào muộn giữa ca",
        FieldName: "LateCenter"
    },
    {
        ID: 6,
        Caption: "Về sớm cuối ca",
        FieldName: "EarlyEnd"
    },
    {
        ID: 7,
        Caption: "Áp dụng cho",
        FieldName: "ApplyFor"
    },
    {
        ID: 8,
        Caption: "Trạng thái",
        FieldName: "Status"
    }
]

export const products = [{
    'ID': 1,
    'Name': 'HD Video Player',
    'Price': 330,
    'Current_Inventory': 225,
    'Backorder': 0,
    'Manufacturing': 10,
    'Category': 'Video Players',
    'ImageSrc': 'images/products/1.png'
}, {
    'ID': 2,
    'Name': 'SuperHD Video Player',
    'Price': 400,
    'Current_Inventory': 150,
    'Backorder': 0,
    'Manufacturing': 25,
    'Category': 'Video Players',
    'ImageSrc': 'images/products/2.png'
}, ]

export default {
    getEmployees() {
        return employees;
    },
    getTitles() {
        return titles;
    }

};