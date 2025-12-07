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
        title: 'Chat dengan Dokter',
        desc: 'Telekonsultasi terpraktis dan terpercaya',
        bg: '#E6F0FF',
        Icon: DoctorIcon,
        iconColor: '#7FA9FF',
        route: 'CHAT',
    },
    {
        id: 2,
        title: 'Toko Kesehatan',
        desc: 'Apotek online andalanmu',
        bg: '#FFF7E6',
        Icon: HospitalIcon,
        iconColor: '#FFC66A',
        route: 'APOTEK',
    },
    {
        id: 3,
        title: 'Lab Vaksin & Homecare',
        desc: 'Tes lab dan layanan vaksinasi dari rumah',
        bg: '#FFF0F6',
        Icon: ArticleIcon,
        iconColor: '#FF8FB3',
        route: 'LAB',
    },
    {
        id: 4,
        title: 'Buat janji offline',
        desc: 'Buat janji temu di RS atau klinik terdekat',
        bg: '#F0FFF4',
        Icon: Scan,
        iconColor: '#6EE7B7',
        route: 'BAA',
    },
    {
        id: 5,
        title: 'Pengurusan BPJS',
        desc: 'Manage BPJS related tasks',
        bg: '#FFF4E6',
        Icon: Scan,
        iconColor: '#FFB86B',
        route: 'BPJS',
    },
    {
        id: 6,
        title: 'Periksa Tumor Otak',
        desc: 'Specialist checks and screening',
        bg: '#F6F6FF',
        Icon: Scan,
        iconColor: '#B9A7FF',
        route: 'OT',
    },
    {
        id: 7,
        title: 'Apotek Cepat',
        desc: 'Order medicines online',
        bg: '#FFF1F0',
        Icon: Scan,
        iconColor: '#FF9A8B',
        route: 'AP',
    },
    {
        id: 8,
        title: 'Cari Dokter',
        desc: 'Find the right specialist',
        bg: '#E8FDF6',
        Icon: Scan,
        iconColor: '#4EE0A1',
        route: 'CD',
    },
    {
        id: 9,
        title: 'Konsultasi',
        desc: 'Chat with a doctor online',
        bg: '#F0F9FF',
        Icon: Scan,
        iconColor: '#7FD3FF',
        route: 'KS',
    },
    {
        id: 10,
        title: 'Terapi',
        desc: 'Book therapy sessions',
        bg: '#FFF7FA',
        Icon: Scan,
        iconColor: '#FFB3E0',
        route: 'TR',
    },
    {
        id: 11,
        title: 'Pusat Bantuan',
        desc: 'Help center and FAQs',
        bg: '#FFFDF0',
        Icon: Scan,
        iconColor: '#FFF08A',
        route: 'HB',
    },
    {
        id: 12,
        title: 'Kalender Kehamilan',
        desc: 'Pantau tumbuh kembang janin',
        bg: '#FFEFF2',
        Icon: Scan,
        iconColor: '#FFB7D5',
        route: 'KK',
    },
];

export default menuData;