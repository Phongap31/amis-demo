const employees = [{
        'ID': 1,
        'FirstName': 'John',
        'LastName': 'Heart',
        'Position': 'CEO',
        'BirthDate': '1964/03/16',
        'HireDate': '1995/01/15',
        'Title': 'Mr.',
        'Address': '351 S Hill St.',
        'City': 'Los Angeles',
        'State': 'California',
        'Zipcode': 90013,
        'Email': 'jheart@dx-email.com',
        'Skype': 'jheartDXskype',
        'HomePhone': '(213) 555-9208',
        'DepartmentID': 6,
        'MobilePhone': '(213) 555-9392'
    }, {
        'ID': 2,
        'FirstName': 'Olivia',
        'LastName': 'Peyton',
        'Position': 'Sales Assistant',
        'BirthDate': '1981/06/03',
        'HireDate': '2012/05/14',
        'Title': 'Mrs.',
        'Address': '807 W Paseo Del Mar',
        'City': 'Los Angeles',
        'State': 'California',
        'Zipcode': 90036,
        'Email': 'oliviap@dx-email.com',
        'Skype': 'oliviapDXskype',
        'HomePhone': '(310) 555-2728',
        'DepartmentID': 5,
        'MobilePhone': '(818) 555-2387'
    }, {
        'ID': 3,
        'FirstName': 'Robert',
        'LastName': 'Reagan',
        'Position': 'CMO',
        'BirthDate': '1974/09/07',
        'HireDate': '2002/11/08',
        'Title': 'Mr.',
        'Address': '4 Westmoreland Pl.',
        'City': 'Bentonville',
        'State': 'Arkansas',
        'Zipcode': 91103,
        'Email': 'robertr@dx-email.com',
        'Skype': 'robertrDXskype',
        'HomePhone': '(818) 555-2438',
        'DepartmentID': 6,
        'MobilePhone': '(818) 555-2387'
    }, {
        'ID': 4,
        'FirstName': 'Greta',
        'LastName': 'Sims',
        'Position': 'HR Manager',
        'BirthDate': '1977/11/22',
        'HireDate': '1998/04/23',
        'Title': 'Ms.',
        'Address': '1700 S Grandview Dr.',
        'State': 'Georgia',
        'City': 'Atlanta',
        'Zipcode': 91803,
        'Email': 'gretas@dx-email.com',
        'Skype': 'gretasDXskype',
        'HomePhone': '(818) 555-0976',
        'DepartmentID': 5,
        'MobilePhone': '(818) 555-6546'
    }, {
        'ID': 5,
        'FirstName': 'Brett',
        'LastName': 'Wade',
        'Position': 'IT Manager',
        'BirthDate': '1968/12/01',
        'HireDate': '2009/03/06',
        'Title': 'Mr.',
        'Address': '1120 Old Mill Rd.',
        'State': 'Idaho',
        'City': 'Boise',
        'Zipcode': 91108,
        'Email': 'brettw@dx-email.com',
        'Skype': 'brettwDXskype',
        'HomePhone': '(626) 555-5985',
        'DepartmentID': 7,
        'MobilePhone': '(626) 555-0358'
    }, {
        'ID': 6,
        'FirstName': 'Sandra',
        'LastName': 'Johnson',
        'Position': 'Controller',
        'BirthDate': '1974/11/15',
        'HireDate': '2005/05/11',
        'Title': 'Mrs.',
        'Address': '4600 N Virginia Rd.',
        'State': 'Utah',
        'City': 'Beaver',
        'Zipcode': 90807,
        'Email': 'sandraj@dx-email.com',
        'Skype': 'sandrajDXskype',
        'HomePhone': '(562) 555-8272',
        'DepartmentID': 5,
        'MobilePhone': '(562) 555-2082'
    },
    {
        'ID': 1,
        'FirstName': 'John',
        'LastName': 'Heart',
        'Position': 'CEO',
        'BirthDate': '1964/03/16',
        'HireDate': '1995/01/15',
        'Title': 'Mr.',
        'Address': '351 S Hill St.',
        'City': 'Los Angeles',
        'State': 'California',
        'Zipcode': 90013,
        'Email': 'jheart@dx-email.com',
        'Skype': 'jheartDXskype',
        'HomePhone': '(213) 555-9208',
        'DepartmentID': 6,
        'MobilePhone': '(213) 555-9392'
    }, {
        'ID': 2,
        'FirstName': 'Olivia',
        'LastName': 'Peyton',
        'Position': 'Sales Assistant',
        'BirthDate': '1981/06/03',
        'HireDate': '2012/05/14',
        'Title': 'Mrs.',
        'Address': '807 W Paseo Del Mar',
        'City': 'Los Angeles',
        'State': 'California',
        'Zipcode': 90036,
        'Email': 'oliviap@dx-email.com',
        'Skype': 'oliviapDXskype',
        'HomePhone': '(310) 555-2728',
        'DepartmentID': 5,
        'MobilePhone': '(818) 555-2387'
    }, {
        'ID': 3,
        'FirstName': 'Robert',
        'LastName': 'Reagan',
        'Position': 'CMO',
        'BirthDate': '1974/09/07',
        'HireDate': '2002/11/08',
        'Title': 'Mr.',
        'Address': '4 Westmoreland Pl.',
        'City': 'Bentonville',
        'State': 'Arkansas',
        'Zipcode': 91103,
        'Email': 'robertr@dx-email.com',
        'Skype': 'robertrDXskype',
        'HomePhone': '(818) 555-2438',
        'DepartmentID': 6,
        'MobilePhone': '(818) 555-2387'
    }, {
        'ID': 4,
        'FirstName': 'Greta',
        'LastName': 'Sims',
        'Position': 'HR Manager',
        'BirthDate': '1977/11/22',
        'HireDate': '1998/04/23',
        'Title': 'Ms.',
        'Address': '1700 S Grandview Dr.',
        'State': 'Georgia',
        'City': 'Atlanta',
        'Zipcode': 91803,
        'Email': 'gretas@dx-email.com',
        'Skype': 'gretasDXskype',
        'HomePhone': '(818) 555-0976',
        'DepartmentID': 5,
        'MobilePhone': '(818) 555-6546'
    }, {
        'ID': 5,
        'FirstName': 'Brett',
        'LastName': 'Wade',
        'Position': 'IT Manager',
        'BirthDate': '1968/12/01',
        'HireDate': '2009/03/06',
        'Title': 'Mr.',
        'Address': '1120 Old Mill Rd.',
        'State': 'Idaho',
        'City': 'Boise',
        'Zipcode': 91108,
        'Email': 'brettw@dx-email.com',
        'Skype': 'brettwDXskype',
        'HomePhone': '(626) 555-5985',
        'DepartmentID': 7,
        'MobilePhone': '(626) 555-0358'
    }, {
        'ID': 6,
        'FirstName': 'Sandra',
        'LastName': 'Johnson',
        'Position': 'Controller',
        'BirthDate': '1974/11/15',
        'HireDate': '2005/05/11',
        'Title': 'Mrs.',
        'Address': '4600 N Virginia Rd.',
        'State': 'Utah',
        'City': 'Beaver',
        'Zipcode': 90807,
        'Email': 'sandraj@dx-email.com',
        'Skype': 'sandrajDXskype',
        'HomePhone': '(562) 555-8272',
        'DepartmentID': 5,
        'MobilePhone': '(562) 555-2082'
    }
];

const titles = [{
        Caption: "Người duyệt",
        FieldName: "LastName",
        HeaderTemplate: "FirstName"
    },
    {
        Caption: "Ngày lập",
        FieldName: "HireDate"
    },
    {
        Caption: "Đi muộn đầu ca",
        FieldName: "Position"
    },
    {
        Caption: "Về sớm giữa ca",
        FieldName: "City"
    },
    {
        Caption: "Vào muộn giữa ca",
        FieldName: "Address"
    },
    {
        Caption: "Về sớm cuối ca",
        FieldName: "BirthDate"
    },
    {
        Caption: "Áp dụng cho",
        FieldName: "HomePhone"
    },
    {
        Caption: "Trạng thái",
        FieldName: "State"
    }
]

export default {
    getEmployees() {
        return employees;
    },
    getTitles() {
        return titles;
    }

};