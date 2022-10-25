INSERT INTO
    user (
        username,
        email,
        password,
        name,
        addr1,
        phone_number,
        tax_id
    )
VALUES (
        'dannydanger',
        'dangerman992@gmail.com',
        'dangerismymiddlename#11',
        'Dan Danger',
        '100 Broadway, San Antonio TX 78254',
        '5555555551',
        123456001
    ), (
        'tabletop27',
        'tableluv22@gmail.com',
        'tiptiptop$900',
        'Tim Top',
        '101 Broadway, San Antonio TX 78254',
        '5555555552',
        123456002
    ), (
        'stuntdouble2000',
        'pain4pay@gmail.com',
        'jumpthroughfire#!',
        'Skip Scoop',
        '103 Broadway, San Antonio TX 78254',
        '5555555553',
        123456003
    ), (
        'superman13',
        'hero1234@gmail.com',
        'flyingisfun!#',
        'Chip Chomp',
        '104 Broadway, San Antonio TX 78254',
        '5555555554',
        123456004
    ), (
        'left_twix99',
        'leftyisbesty@gmail.com',
        'righttwixsucks11$!',
        'Star Skittles',
        '106 Broadway, San Antonio TX 78254',
        '5555555555',
        123456005
    ), (
        'happycat22',
        'catlover3@gmail.com',
        'ilovekitty22',
        'Kat Krisp',
        '107 Broadway, San Antonio TX 78254',
        '5555555556',
        123456006
    ), (
        'amazingbear2',
        'fuzzywuzzy32@gmail.com',
        'bigbear99',
        'Ben Baird',
        '108 Broadway, San Antonio TX 78254',
        '5555555557',
        123456007
    ), (
        'funkySkunk',
        'Skss99@gmail.com',
        'skyskoool99',
        'Steve Shy',
        '109 Broadway, San Antonio TX 78254',
        '5555555558',
        123456008
    ), (
        'appleberrypie19',
        'boooooo9@gmail.com',
        'hibyehi29',
        'Daisy Miller',
        '110 Broadway, San Antonio TX 78254',
        '5555555559',
        123456009
    ), (
        'sunnydayz29',
        'glowspirit@gmail.com',
        'dreambig99',
        'Flower Young',
        '111 Broadway, San Antonio TX 78254',
        '5555555560',
        123456010
    ), (
        'wallflowerjam2',
        'papercastle@gmail.com',
        'rcast20pacom',
        'Mark Miller',
        '112 Broadway, San Antonio TX 78254',
        '5555555561',
        123456011
    ), (
        'iamironman2000',
        'steelspirit99@gmail.com',
        'lspir21stcom',
        'Nestle Nice',
        '113 Broadway, San Antonio TX 78254',
        '5555555562',
        123456012
    ), (
        'fadingdream12',
        'dancinggirl2311334@gmaill.com',
        'inggi22dacom',
        'Oscar Olive',
        '114 Broadway, San Antonio TX 78254',
        '5555555563',
        123456013
    ), (
        'cloudydayz23',
        'cloudayz2323@gmail.com',
        'dayz223clcom',
        'Pete Pan',
        '115 Broadway, San Antonio TX 78254',
        '5555555564',
        123456014
    ), (
        'roadtrippin33',
        'roadtpin3324@gmail.com',
        'tpin324rocom',
        'Quince Que',
        '116 Broadway, San Antonio TX 78254',
        '5555555565',
        123456015
    ), (
        'worldcupmaster12',
        'worldter1225@gmail.com',
        'dter125wocom',
        'Ronald Reed',
        '117 Broadway, San Antonio TX 78254',
        '5555555566',
        123456016
    ), (
        'anonymous3333',
        'anonys333326@gmail.com',
        'ys33326ancom',
        'Sam Soon',
        '118 Broadway, San Antonio TX 78254',
        '5555555567',
        123456017
    ), (
        'singingPenguin',
        'singinguin27@gmail.com',
        'ingui27sicom',
        'Trixie Tiny',
        '119 Broadway, San Antonio TX 78254',
        '5555555568',
        123456018
    ), (
        'flyskyhigh90',
        'flyskigh9028@gmail.com',
        'kigh928flcom',
        'Ursa Ump',
        '120 Broadway, San Antonio TX 78254',
        '5555555569',
        123456019
    ), (
        'deididi21129',
        'deidi2112929@gmail.com',
        'i211229decom',
        'Violet Vee',
        '121 Broadway, San Antonio TX 78254',
        '5555555570',
        123456020
    ), (
        'fff2233',
        'fff22f223330@gmail.com',
        '2f22330ffcom',
        'Winston Wild',
        '122 Broadway, San Antonio TX 78254',
        '5555555571',
        123456021
    ), (
        'rockinRick41',
        'rockiick4131@gmail.com',
        'iick431rocom',
        'Xavier Exav',
        '123 Broadway, San Antonio TX 78254',
        '5555555572',
        123456022
    ), (
        'fas321',
        'fas32as32132@gmail.com',
        '2as3232facom',
        'Ace Dive',
        '124 Broadway, San Antonio TX 78254',
        '5555555573',
        123456023
    );

INSERT INTO
    company (
        name,
        addr1,
        phone_number,
        tax_id
    )
VALUES (
        'ABC COMPANY',
        '123 March Circle, San Antonio, TX 78251',
        '555-555-5599',
        99 -9999999
    ), (
        'WE DELIVER',
        '1234 March Circle, San Antonio, TX 78251',
        '555-555-5594',
        99 -9999991
    ), (
        'HELPING HAND',
        '1223 March Circle, San Antonio, TX 78251',
        '555-555-5593',
        99 -9999993
    );

INSERT INTO
    role (company_id, role_name)
VALUES (1, 'Employer'), (1, 'Team Leader'), (1, 'Employee'), (2, 'Boss'), (2, 'Middle Man'), (2, 'Grunt');

INSERT INTO
    job (company_id, job, hourly_rate)
VALUES (1, 'MOW LAWN', 10), (1, 'DELIVER FOOD', 10), (2, 'PAINT HOUSE', 20), (3, 'REPAIR', 20), (2, 'LANDSCAPING', 12);

INSERT INTO
    employee (
        company_id,
        role_id,
        manager_id,
        user_id
    )
VALUES (1, 1, NULL, 1), (1, 2, 1, 2), (1, 3, 2, 3), (1, 3, 2, 4), (1, 3, 2, 5), (1, 3, 2, 6), (1, 3, 2, 7), (1, 3, 2, 8), (1, 2, 1, 9), (1, 3, 9, 10), (1, 3, 9, 11), (1, 3, 9, 12), (1, 3, 9, 13), (1, 3, 9, 14), (2, 1, NULL, 1), (2, 2, 1, 2), (2, 3, 2, 3), (2, 3, 2, 4), (2, 3, 2, 5), (2, 3, 2, 6), (2, 3, 2, 7), (2, 3, 2, 8), (2, 2, 1, 9), (2, 3, 9, 10), (2, 3, 9, 11), (2, 3, 9, 12), (2, 3, 9, 13), (2, 3, 9, 14);

INSERT INTO
    timelog (
        company_id,
        employee_id,
        job_id,
        hours_worked
    )
VALUES (1, 1, 1, 4), (1, 2, 3, 2.17), (1, 1, 1, 5), (1, 1, 1, 8), (1, 1, 1, 1), (1, 3, 2, 5), (1, 3, 2, 16), (1, 2, 3, 5), (1, 2, 3, 8), (1, 5, 5, 8), (1, 10, 5, 4), (1, 10, 5, 5), (1, 5, 5, 10), (1, 1, 4, 5.5), (1, 5, 5, 1.6), (1, 4, 2, 2.2), (1, 3, 4, 8), (2, 7, 2, 2.9), (2, 7, 2, 7), (1, 9, 5, 5.7), (2, 12, 1, 6.5), (2, 12, 1, 1.15);