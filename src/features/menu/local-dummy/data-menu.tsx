import React from 'react';
import DoctorIcon from '../../../../assets/icons/menu-board.svg';
import ArticleIcon from '../../../../assets/icons/message-favorite.svg'
import Scan from '../../../../assets/icons/scan.svg';
import HospitalIcon from '../../../../assets/icons/message-favorite.svg';

export interface MenuItem {
    id: number;
    title: string;
    desc: string;
    bg: string;
    Icon: React.ComponentType<any>;
    iconColor: string;
    route: string;
}

export const menuData: MenuItem[] = [
    {
        id: 1,
        title: 'Book an Appointment',
        desc: 'Find a doctor or specialist',
        bg: '#C6D4F1',
        Icon: DoctorIcon,
        iconColor: '#A0B6EA',
        route: 'BAA',
    },
    {
        id: 2,
        title: 'Nearby Hospitals',
        desc: 'Locate clinics near you',
        bg: '#FFF3B0',
        Icon: HospitalIcon,
        iconColor: '#FFE066',
        route: 'NH',
    },
    {
        id: 3,
        title: 'Medicine Reminder',
        desc: 'Never miss a dose again',
        bg: '#FDE2E4',
        Icon: ArticleIcon,
        iconColor: '#FAC7CF',
        route: 'MR',
    },
    {
        id: 4,
        title: 'Other Menus',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 5,
        title: 'Pengurusan BPJS',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 6,
        title: 'Periksa Tumor Otak',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 7,
        title: 'Apotek',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 8,
        title: 'Cari dokter',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 8,
        title: 'Konsultasi',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 9,
        title: 'Terapi',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
    {
        id: 8,
        title: 'Pusat Bantuan',
        desc: 'See more menus for those of you who need them',
        bg: '#D3F8DF',
        Icon: Scan,
        iconColor: '#AAF0C4',
        route: 'OM',
    },
];

export default menuData;